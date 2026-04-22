import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-earth text-earth-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-2xl mb-4">
            CarryBags<span className="text-sand">India</span>
          </h3>
          <p className="text-earth-foreground/70 text-sm leading-relaxed">
            India's trusted manufacturer of premium hand carry bags. Quality, customisation, and bulk supply — delivered pan India.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/custom-orders", label: "Custom Orders" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-earth-foreground/70 hover:text-sand text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
          <div className="flex flex-col gap-2 text-sm text-earth-foreground/70">
            <span>Paper Bags</span>
            <span>Cloth Bags</span>
            <span>Jute Bags</span>
            <span>Custom Printed Bags</span>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-earth-foreground/70">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-sand transition-colors">
              <Phone size={16} /> +91 98765 43210
            </a>
            <a href="mailto:info@carrybagsindia.com" className="flex items-center gap-2 hover:text-sand transition-colors">
              <Mail size={16} /> info@carrybagsindia.com
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> Mumbai, Maharashtra, India
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-earth-foreground/10 mt-12 pt-8 text-center text-xs text-earth-foreground/50">
        © {new Date().getFullYear()} CarryBags India. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
