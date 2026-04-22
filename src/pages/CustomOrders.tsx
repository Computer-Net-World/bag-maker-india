import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ruler, Layers, Printer, CheckCircle, Truck, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const options = [
  { icon: Ruler, title: "Size", desc: "Choose any dimensions — from small gift bags to large shopping bags." },
  { icon: Layers, title: "Material", desc: "Paper, cotton, canvas, jute, or non-woven — pick what fits your brand." },
  { icon: Printer, title: "Printing & Branding", desc: "Full-colour logo printing, embossing, foil stamping, and more." },
];

const steps = [
  { icon: MessageSquare, label: "Inquiry", desc: "Tell us your requirements." },
  { icon: Layers, label: "Design", desc: "We create mockups for you." },
  { icon: CheckCircle, label: "Approval", desc: "You review and approve." },
  { icon: Printer, label: "Production", desc: "We manufacture your bags." },
  { icon: Truck, label: "Delivery", desc: "Shipped to your doorstep." },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const CustomOrdersPage = () => (
  <Layout>
    <section className="py-12 sm:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading title="Custom Orders" subtitle="Get bags made exactly the way you want — your size, your material, your branding." />
      </div>
    </section>

    {/* Options */}
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {options.map((o, i) => (
            <motion.div
              key={o.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-lg p-5 sm:p-8 text-center shadow-sm"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-3 sm:mb-5 rounded-full bg-secondary flex items-center justify-center">
                <o.icon size={20} className="text-accent sm:size-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading title="How It Works" subtitle="Our simple 5-step process from your idea to the finished product." />
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 text-center relative"
            >
              <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold">
                {i + 1}
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-1">{s.label}</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 sm:top-8 left-[calc(50%+2rem)] sm:left-[calc(50%+2.5rem)] w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link to="/contact" className="bg-accent text-accent-foreground px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-md text-sm sm:text-base font-semibold hover:brightness-110 transition inline-block">
            Start Your Custom Order
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default CustomOrdersPage;
