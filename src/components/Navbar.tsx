import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 lg:px-8">
        <Link to="/" className="font-serif text-lg sm:text-2xl text-primary tracking-tight truncate">
          Siya Ram<span className="text-accent"> Enterprises</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs lg:text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === l.to ? "text-accent" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-4 lg:px-5 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm font-semibold hover:bg-accent transition-colors whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-3 sm:p-4 gap-1.5 sm:gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 px-2 rounded transition-colors ${
                    location.pathname === l.to ? "bg-accent/10 text-accent" : "text-foreground/70 hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-semibold text-center mt-2 hover:bg-accent transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
