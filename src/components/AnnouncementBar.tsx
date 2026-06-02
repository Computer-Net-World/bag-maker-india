import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

const messages = [
  "🎉 Free design consultation for orders above 2000 pcs",
  "🚚 Pan India delivery — order today, ship in 7–15 days",
  "📞 Call us: +91 93684 00659 | Mon–Sat 9 AM – 7 PM",
  "💍 Wedding season special — custom bags from ₹5/piece",
];

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  const [idx, setIdx] = useState(0);

  // Rotate messages every 4s
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative z-[55] bg-[hsl(var(--earth))] text-white text-xs sm:text-sm py-2 px-4 text-center">
      <span className="font-medium">{messages[idx]}</span>
      <a
        href="tel:+919368400659"
        className="ml-3 hidden sm:inline-flex items-center gap-1 underline underline-offset-2 hover:text-amber-300 transition-colors"
      >
        <Phone size={11} /> Call Now
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
