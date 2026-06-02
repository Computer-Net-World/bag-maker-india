import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollProgress from "./ScrollProgress";
import AnnouncementBar from "./AnnouncementBar";

// Scroll to top whenever route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col overflow-x-hidden">
    <ScrollProgress />
    <ScrollToTop />
    <AnnouncementBar />
    <Navbar />
    {/* pt-16 accounts for the fixed navbar (announcement bar height adds dynamically) */}
    <main className="flex-1 w-full pt-16">
      {children}
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
