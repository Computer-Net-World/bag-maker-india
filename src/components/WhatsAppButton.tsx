import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20your%20carry%20bags."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-olive text-olive-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
