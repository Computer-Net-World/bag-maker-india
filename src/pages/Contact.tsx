import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <SectionHeading title="Contact Us" subtitle="Have a question or need a quote? Reach out — we'd love to hear from you." />
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="bg-olive/10 rounded-lg p-6 sm:p-10 text-center">
                <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 text-olive">Thank You!</h3>
                <p className="text-muted-foreground text-sm sm:text-base">We have received your inquiry. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 block">Name *</label>
                  <input type="text" required placeholder="Your full name" className="w-full border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 block">Phone *</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 block">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium mb-1.5 block">Message *</label>
                  <textarea required rows={5} placeholder="Tell us about your requirement — bag type, quantity, customisation needs..." className="w-full border border-input rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-2.5 sm:py-3.5 rounded-md text-sm sm:text-base font-semibold hover:bg-accent transition-colors">
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-5">
                <a href="tel:+919368400659" className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0"><Phone size={16} className="text-accent" /></div>
                  <span>+91 93684 00659</span>
                </a>
                <a href="mailto:siyaramenterprises211@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors text-sm sm:text-base break-all">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0"><Mail size={16} className="text-accent" /></div>
                  <span>siyaramenterprises211@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-foreground/80 text-sm sm:text-base">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5"><MapPin size={16} className="text-accent" /></div>
                  <span>Near Maa sumitra rasoi, Gaushala Rd, Nagla Emliya, Hathras, UP</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20your%20carry%20bags."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-olive text-olive-foreground py-2.5 sm:py-3.5 rounded-md text-sm sm:text-base font-semibold hover:brightness-110 transition"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden border border-border aspect-video bg-muted flex items-center justify-center">
              <iframe
                title="Location"
              src="https://www.google.com/maps?q=Hathras,Uttar+Pradesh&output=embed"
    width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
