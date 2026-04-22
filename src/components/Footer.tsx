import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-earth text-earth-foreground">
    <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        <div>
          <h3 className="font-serif text-lg sm:text-2xl mb-3 sm:mb-4">
            Siya Ram <span className="text-sand">Enterprises </span>
          </h3>
          <p className="text-earth-foreground/70 text-xs sm:text-sm leading-relaxed">
            India's trusted manufacturer of premium hand carry bags. Quality, customisation, and bulk supply — delivered pan India.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/custom-orders", label: "Custom Orders" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-earth-foreground/70 hover:text-sand text-xs sm:text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Products</h4>
          <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-earth-foreground/70">
            <span>Paper Bags</span>
            <span>Cloth Bags</span>
            <span>Jute Bags</span>
            <span>Custom Printed Bags</span>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Contact</h4>
          <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-earth-foreground/70">
            <a href="tel:+919368400659" className="flex items-center gap-2 hover:text-sand transition-colors break-all">
              <Phone size={14} className="shrink-0" /> +91 9368400659
            </a>
            <a href="mailto:siyaramenterprises211@gmail.com" className="flex items-center gap-2 hover:text-sand transition-colors break-all">
              <Mail size={14} className="shrink-0" /> siyaramenterprises211@gmail.com
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" /> <span className="text-xs sm:text-sm">Near Maa sumitra rasoi, Gaushala Rd, Nagla Emliya, Hathras, Uttar Pradesh 204101</span>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-earth-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-xs text-earth-foreground/50">
        © {new Date().getFullYear()} siyaram enterprises. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
