import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our standard MOQ is 500 pieces per design/type. For certain premium items like custom printed bags with special finishes, MOQ may be 1000 pieces. Contact us for specific product MOQs.",
  },
  {
    q: "Can I get my logo printed on the bags?",
    a: "Yes! All our bags support custom logo printing. We offer screen printing, offset printing, digital printing, foil stamping, and embossing options. Share your logo file (AI, PDF, or high-res PNG) and we'll send a digital mockup within 24 hours.",
  },
  {
    q: "How long does manufacturing and delivery take?",
    a: "Standard orders take 7–15 business days after design approval. Urgent orders (extra charges apply) can be completed in 5–7 days. Delivery time depends on your location — typically 1–3 days after dispatch via courier.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes, we deliver pan India — from major metros to tier 2 and tier 3 cities. We work with trusted logistics partners to ensure safe and timely delivery. Shipping costs are calculated based on order size and destination.",
  },
  {
    q: "What materials are available for the bags?",
    a: "We manufacture bags in kraft paper, art paper, non-woven fabric, jute, canvas, and food-grade LDPE. Each material is available in multiple GSM (thickness) options. Our team can recommend the best material based on your use case and budget.",
  },
  {
    q: "Can I get a sample before placing a bulk order?",
    a: "Yes, samples are available. Physical samples are provided against a small sample charge which is adjusted in your final order. Digital mockups are always free. Turnaround for a physical sample is 3–5 business days.",
  },
  {
    q: "What sizes are available?",
    a: "We manufacture bags in any custom size. Common sizes range from 8×10 inches (small gift bags) to 18×24 inches (large shopping bags). For garment and saree covers, we accommodate lengths up to 60 inches. Just share your requirements.",
  },
  {
    q: "Do you offer bulk discounts?",
    a: "Yes! Our pricing is volume-based — the more you order, the lower the per-piece cost. For orders above 5,000 pieces, we offer significant discounts. Contact us with your quantity and we'll share a customized price list.",
  },
];

const FAQAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
            openIdx === i ? "border-accent/30 shadow-md" : "border-border/50 shadow-sm hover:shadow-md"
          }`}
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-start justify-between gap-3 text-left px-5 sm:px-6 py-4 sm:py-5"
            aria-expanded={openIdx === i}
          >
            <span className={`font-semibold text-sm sm:text-base leading-snug ${openIdx === i ? "text-accent" : "text-foreground"}`}>
              {faq.q}
            </span>
            <span className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              openIdx === i ? "bg-accent text-white" : "bg-secondary text-muted-foreground"
            }`}>
              {openIdx === i ? <Minus size={13} /> : <Plus size={13} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIdx === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/50 pt-3">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
