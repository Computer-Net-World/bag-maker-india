import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col overflow-x-hidden">
    <Navbar />
    <main className="flex-1 pt-16 sm:pt-16 w-full">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
