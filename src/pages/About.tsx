import { motion } from "framer-motion";
import { Users, Package, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import factoryImg from "@/assets/factory.jpg";

const stats = [
  { icon: Users,   value: "300+", label: "Clients Served" },
  { icon: Package, value: "10M+", label: "Bags Delivered" },
  { icon: Award,   value: "100%", label: "Quality Commitment" },
  { icon: Clock,   value: "5+",   label: "Years Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutPage = () => (
  <Layout>
    {/* Header */}
    <section className="pt-24 pb-10 sm:pb-14 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="badge-pill bg-accent/10 text-accent mb-4">Our Story</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2">About Siya Ram Enterprises</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
            India's trusted hand carry bag manufacturer — delivering quality since 2019.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story section */}
    <section className="section-pad">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={factoryImg}
              alt="Siya Ram Enterprises manufacturing facility"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
              <p className="text-xs text-muted-foreground">Hathras, Uttar Pradesh</p>
              <p className="text-sm font-semibold text-foreground">Our Manufacturing Unit</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-5">Built on Quality, Driven by Trust</h2>
          <div className="space-y-4 text-foreground/75 leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-foreground">Siya Ram Enterprises</strong> is one of India's leading manufacturers of premium hand carry bags, based in Hathras, Uttar Pradesh. We have been serving retailers, wholesalers, and brands across the country for over 5 years.
            </p>
            <p>
              Our state-of-the-art manufacturing facility is equipped with modern machinery and staffed by skilled craftsmen who ensure every bag meets the highest standards of durability and finish.
            </p>
            <p>
              From eco-friendly jute bags to premium wedding bags, custom saree covers to bulk mithai bags — we offer a complete range of packaging solutions that combine quality with affordability.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Wedding Bags", "Sweet Bags", "Garment Bags", "Jute Bags", "Saree Cover", "Non-Woven Bags"].map((tag) => (
              <span key={tag} className="badge-pill bg-secondary text-foreground/70 text-xs">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm"
            >
              Explore Products <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-14 sm:py-18 bg-[hsl(var(--earth))] text-white">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 flex items-center justify-center">
              <s.icon size={22} className="text-amber-300" />
            </div>
            <p className="font-serif text-3xl sm:text-4xl text-amber-300">{s.value}</p>
            <p className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-pad bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl">Our Mission & Vision</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm border border-border/50">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-3">Our Mission</h3>
            <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
              To provide businesses across India with high-quality, eco-friendly carry bags at competitive prices, while supporting sustainable manufacturing practices and empowering local communities in Hathras.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm border border-border/50">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-3">Our Vision</h3>
            <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
              To become India's most trusted name in carry bag manufacturing — known for innovation, reliability, and an unwavering commitment to quality and sustainability for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
