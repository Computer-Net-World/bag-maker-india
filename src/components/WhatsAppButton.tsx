import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919368400659?text=Hi%2C%20I%20am%20interested%20in%20your%20carry%20bags.%20Can%20you%20share%20pricing?"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-4 sm:right-6 z-50 group flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-3 pr-4 sm:pl-4 sm:pr-5 py-3 rounded-full shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={22} className="shrink-0" />
    <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
  </a>
);

export default WhatsAppButton;
