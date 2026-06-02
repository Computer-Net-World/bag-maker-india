import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ruler, Layers, Printer, CheckCircle, Truck, MessageSquare, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const options = [
  { icon: Ruler,   title: "Custom Size",            desc: "Any dimensions — from tiny gift bags to large shopping totes." },
  { icon: Layers,  title: "Material Choice",        desc: "Paper, jute, non-woven, canvas — pick what fits your brand." },
  { icon: Printer, title: "Printing & Branding",    desc: "Full-colour logo, embossing, foil stamping, screen printing & more." },
];

const steps = [
  { icon: MessageSquare, label: "Inquiry",    desc: "Share your requirements via call, WhatsApp, or form." },
  { icon: Layers,        label: "Design",     desc: "We create digital mockups and share within 24 hours." },
  { icon: CheckCircle,   label: "Approval",   desc: "You review and approve the design and specs." },
  { icon: Printer,       label: "Production", desc: "We manufacture with full quality control." },
  { icon: Truck,         label: "Delivery",   desc: "Shipped pan India within 7–15 business days." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const CustomOrdersPage = () => (
  <Layout>
    {/* Header */}
    <section className="pt-24 pb-10 sm:pb-14 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="badge-pill bg-accent/10 text-accent mb-4">Custom Orders</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2">Your Bag, Your Brand</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Get bags made exactly the way you want — your size, your material, your branding.
            Starting from just 500 pieces.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Options */}
    <section className="section-pad">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {options.map((o, i) => (
            <motion.div
              key={o.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-accent/10 flex items-center justify-center">
                <o.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-pad bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl">How It Works</h2>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">Our simple 5-step process from your idea to the finished product.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative text-center flex flex-col items-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px border-t-2 border-dashed border-accent/20" />
              )}
              <div className="w-14 h-14 mb-3 rounded-2xl bg-accent text-white flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <h4 className="font-semibold text-sm mb-1">{s.label}</h4>
              <p className="text-muted-foreground text-xs max-w-[120px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
          >
            Start Custom Order <ArrowRight size={17} />
          </Link>
          <a
            href="https://wa.me/919368400659?text=Hi%2C%20I%20want%20to%20place%20a%20custom%20bag%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#1ebe5d] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    {/* MOQ section */}
    <section className="py-10 sm:py-14 bg-white border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-center mb-8">Minimum Order Quantities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { cat: "Wedding Bags",   moq: "500 pcs", icon: "💍" },
            { cat: "Sweet Bags",     moq: "500 pcs", icon: "🍬" },
            { cat: "Garment Bags",   moq: "500 pcs", icon: "👗" },
            { cat: "Jute Bags",      moq: "500 pcs", icon: "🌾" },
            { cat: "Saree Cover",    moq: "500 pcs", icon: "🥻" },
            { cat: "Non-Woven Bags", moq: "500 pcs", icon: "📦" },
          ].map((m) => (
            <div key={m.cat} className="bg-[hsl(var(--cream))] rounded-xl p-4 text-center border border-border/50">
              <div className="text-3xl mb-2">{m.icon}</div>
              <p className="text-xs font-semibold text-foreground/80 mb-1">{m.cat}</p>
              <p className="text-accent font-bold text-sm">{m.moq}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          Larger quantities qualify for bulk discounts. <Link to="/contact" className="text-accent hover:underline">Contact us</Link> for pricing.
        </p>
      </div>
    </section>
  </Layout>
);

export default CustomOrdersPage;
