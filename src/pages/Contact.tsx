import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a short delay then show success
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-10 sm:pb-14 bg-[hsl(var(--cream))]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge-pill bg-accent/10 text-accent mb-4">Contact Us</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2">Get a Free Quote</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Tell us your requirement — bag type, quantity, customisation. We'll respond within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">

            {/* Form — wider */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl mb-2 text-green-700">Thank You!</h3>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-xs mx-auto">
                      We've received your inquiry. Our team will get back to you within 2 hours.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="https://wa.me/919368400659?text=Hi%2C%20I%20just%20sent%20an%20inquiry%20form."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-xl text-sm font-semibold"
                      >
                        <MessageCircle size={16} /> Also chat on WhatsApp
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="border border-border px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-secondary transition-colors"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <h2 className="font-serif text-xl sm:text-2xl mb-1">Send an Inquiry</h2>
                    <p className="text-muted-foreground text-sm mb-2">Fields marked * are required.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-medium mb-1.5 block">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full border border-input rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm font-medium mb-1.5 block">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full border border-input rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full border border-input rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-1.5 block">Product / Category *</label>
                      <select
                        required
                        className="w-full border border-input rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                      >
                        <option value="">Select product category...</option>
                        <option>Wedding Bags</option>
                        <option>Sweet / Mithai Bags</option>
                        <option>Garment Bags</option>
                        <option>Jute Bags</option>
                        <option>Saree Cover</option>
                        <option>Non-Woven Bags</option>
                        <option>Multiple / Others</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-1.5 block">Message / Requirements *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us: type of bag, quantity needed, size, print/design requirements, city for delivery..."
                        className="w-full border border-input rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Inquiry →"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Quick contact card */}
              <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6">
                <h3 className="font-serif text-lg sm:text-xl mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+919368400659" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <Phone size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-semibold">+91 93684 00659</p>
                    </div>
                  </a>

                  <a href="mailto:siyaramenterprises211@gmail.com" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-accent transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <Mail size={16} className="text-accent" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-semibold text-xs sm:text-sm break-all">siyaramenterprises211@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-sm text-foreground/80">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="font-medium leading-relaxed text-xs sm:text-sm">
                        Near Maa Sumitra Rasoi, Gaushala Rd, Nagla Emliya, Hathras, UP 204101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Business Hours</p>
                      <p className="font-semibold text-xs sm:text-sm">Mon–Sat, 9 AM – 7 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919368400659?text=Hi%2C%20I%20am%20interested%20in%20your%20carry%20bags.%20Can%20you%20share%20pricing?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-2xl font-semibold text-base transition-colors shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3]">
                <iframe
                  title="Siya Ram Enterprises Location"
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
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
