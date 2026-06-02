import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/siya ram logo.png";
import { mainCategories } from "@/data/products";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); setDropdownOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-white/90 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-18 px-3 sm:px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 h-full shrink-0">
          <img src={logo} alt="Siya Ram Enterprises" className="h-11 sm:h-13 object-contain" />
          <div className="hidden sm:block">
            <div className="font-serif text-sm lg:text-base text-primary leading-tight tracking-tight">
              Siya Ram<span className="text-accent"> Enterprises</span>
            </div>
            <div className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
              Bag Manufacturer · Hathras
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname.startsWith("/products") || location.pathname.startsWith("/category")
                      ? "text-accent bg-accent/8"
                      : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-50"
                    >
                      <div className="p-2">
                        <Link
                          to="/products"
                          className="block px-3 py-2 text-sm font-semibold text-accent hover:bg-accent/8 rounded-lg transition-colors"
                        >
                          🛍️ All Products
                        </Link>
                        <div className="h-px bg-border my-1" />
                        {mainCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/category/${cat.id}`}
                            className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                          >
                            <span className="text-base">{cat.icon}</span>
                            <span>{cat.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? "text-accent bg-accent/8"
                    : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                }`}
              >
                {l.label}
              </Link>
            )
          )}

          <a
            href="tel:+919368400659"
            className="ml-2 flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors border border-primary/20 hover:border-accent/40 px-3 py-1.5 rounded-full"
          >
            <Phone size={13} />
            <span className="hidden lg:inline">+91 93684 00659</span>
            <span className="lg:hidden">Call</span>
          </a>

          <Link
            to="/contact"
            className="ml-1 bg-accent text-white px-4 lg:px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a href="tel:+919368400659" className="text-primary p-2 rounded-lg hover:bg-primary/5 transition-colors" aria-label="Call us">
            <Phone size={18} />
          </a>
          <button
            className="text-foreground p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-border overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {/* Home */}
              <Link
                to="/"
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  location.pathname === "/" ? "bg-accent/10 text-accent" : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  location.pathname === "/about" ? "bg-accent/10 text-accent" : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                }`}
              >
                About Us
              </Link>

              {/* Products with sub-items */}
              <div>
                <Link
                  to="/products"
                  className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors block ${
                    location.pathname.startsWith("/products") ? "bg-accent/10 text-accent" : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  🛍️ All Products
                </Link>
                <div className="ml-3 mt-1 flex flex-col gap-0.5">
                  {mainCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.id}`}
                      className={`text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center gap-2 ${
                        location.pathname === `/category/${cat.id}` ? "bg-accent/10 text-accent" : "text-foreground/60 hover:text-accent hover:bg-accent/5"
                      }`}
                    >
                      <span>{cat.icon}</span> {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/custom-orders"
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  location.pathname === "/custom-orders" ? "bg-accent/10 text-accent" : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                }`}
              >
                Custom Orders
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  location.pathname === "/contact" ? "bg-accent/10 text-accent" : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                }`}
              >
                Contact
              </Link>

              <div className="mt-2 pt-2 border-t border-border flex flex-col gap-2">
                <a
                  href="tel:+919368400659"
                  className="flex items-center justify-center gap-2 border-2 border-primary/30 text-primary py-2.5 rounded-lg text-sm font-semibold"
                >
                  <Phone size={16} /> +91 93684 00659
                </a>
                <Link
                  to="/contact"
                  className="bg-accent text-white py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-accent/90 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
