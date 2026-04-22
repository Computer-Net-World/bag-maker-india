import { motion } from "framer-motion";
import { Users, Package, Award, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import factoryImg from "@/assets/factory.jpg";

const stats = [
  { icon: Clock, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Package, value: "10M+", label: "Bags Delivered" },
  { icon: Award, value: "100%", label: "Quality Commitment" },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="py-12 sm:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading title="About CarryBags India" subtitle="India's trusted hand carry bag manufacturer — delivering quality since 2009." />
      </div>
    </section>

    {/* Intro */}
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src={factoryImg} alt="Our manufacturing facility" loading="lazy" width={1200} height={800} className="rounded-lg shadow-md w-full" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Built on Quality, Driven by Trust</h2>
          <div className="space-y-3 sm:space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
            <p>
              CarryBags India is one of India's leading manufacturers of premium hand carry bags. Based in Mumbai, we have been serving retailers, wholesalers, and brands across the country for over 15 years.
            </p>
            <p>
              Our state-of-the-art manufacturing facility is equipped with modern machinery and staffed by skilled craftsmen who ensure every bag meets the highest standards of durability and finish.
            </p>
            <p>
              From eco-friendly jute and paper bags to custom-branded cloth bags, we offer a complete range of packaging solutions that combine quality with affordability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 sm:py-16 bg-earth text-earth-foreground">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <s.icon size={20} className="mx-auto mb-2 sm:mb-3 text-sand" />
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl">{s.value}</p>
            <p className="text-earth-foreground/70 text-xs sm:text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream rounded-lg p-6 sm:p-10">
          <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Our Mission</h3>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
          <p className="text-foreground/80 leading-relaxed">
            To provide businesses across India with high-quality, eco-friendly carry bags at competitive prices, while supporting sustainable manufacturing practices and empowering local communities.
          </p>
        </motion.div>
        </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-cream rounded-lg p-6 sm:p-10">
          <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Our Vision</h3>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
          <p className="text-foreground/80 leading-relaxed">
            To become India's most trusted name in carry bag manufacturing — known for innovation, reliability, and an unwavering commitment to quality and sustainability.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
