import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { mainCategories } from "@/data/products";

/**
 * Floating Quick Inquiry Widget.
 * Collapses to a small pill; expands to a mini inquiry form.
 * Sends users to WhatsApp with a pre-filled message.
 */
const QuickInquiry = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const buildWALink = () => {
    const msg =
      category && quantity
        ? `Hi, I need a quote for ${category} — Quantity: ${quantity} pcs. Please share pricing.`
        : "Hi, I'm interested in your carry bags. Can you share pricing?";
    return `https://wa.me/919368400659?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[hsl(var(--earth))] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator size={16} />
                <span className="font-semibold text-sm">Quick Quote</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground">
                Get an instant WhatsApp quote in 2 minutes!
              </p>

              {/* Category */}
              <div>
                <label className="text-xs font-semibold block mb-1">Product Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  <option value="">Select category...</option>
                  {mainCategories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.icon} {c.name}
                    </option>
                  ))}
                  <option value="Multiple / Others">🛍️ Multiple / Others</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-xs font-semibold block mb-1">Quantity (pieces)</label>
                <input
                  type="number"
                  min="500"
                  step="500"
                  placeholder="e.g. 1000"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
                <p className="text-[10px] text-muted-foreground mt-0.5">Minimum 500 pcs</p>
              </div>

              {/* CTA */}
              <a
                href={buildWALink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                <MessageCircle size={16} /> Get WhatsApp Quote
              </a>

              {/* Divider */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex-1 h-px bg-border" />
                <span>or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919368400659"
                  className="flex items-center justify-center gap-1.5 border border-border rounded-lg py-2 text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  <Phone size={13} /> Call
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 border border-border rounded-lg py-2 text-xs font-semibold hover:bg-secondary transition-colors"
                >
                  Form <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.93 }}
        className={`flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-full shadow-xl transition-all duration-200 ${
          open
            ? "bg-foreground text-background"
            : "bg-accent text-white hover:bg-accent/90"
        }`}
        aria-label="Quick quote"
      >
        {open ? <X size={18} /> : <Calculator size={18} />}
        <span className="hidden sm:inline">{open ? "Close" : "Quick Quote"}</span>
      </motion.button>
    </div>
  );
};

export default QuickInquiry;
