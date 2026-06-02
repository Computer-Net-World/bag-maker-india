import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Factory, Paintbrush, Leaf, Truck, Star, ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { mainCategories } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import heroBagsImg from "@/assets/hero-bags.jpg";

// ── Animations ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const features = [
  { icon: Factory,    title: "Bulk Manufacturing",  desc: "Large-scale production with consistent quality for any order size — 500 to 1 lakh+ pieces." },
  { icon: Paintbrush, title: "Custom Branding",     desc: "Print your logo, brand colours, and designs on any bag material or size." },
  { icon: Leaf,       title: "Eco-Friendly",        desc: "Sustainable, biodegradable materials including jute, kraft, and food-grade paper." },
  { icon: Truck,      title: "Pan India Delivery",  desc: "Fast, reliable shipping to every corner of India — tier 1, 2, and 3 cities." },
];

const stats = [
  { value: "300+",  label: "Happy Clients" },
  { value: "10M+",  label: "Bags Delivered" },
  { value: "6",     label: "Product Categories" },
  { value: "5+",    label: "Years Experience" },
];

const HomePage = () => (
  <Layout>

    {/* ── HERO ─────────────────────────────────────────────────────────────── */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBagsImg}
          alt="Premium carry bags by Siya Ram Enterprises"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 tracking-wider uppercase">
            🏭 Direct Manufacturer · Hathras, UP
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Premium Carry Bags
            <br />
            <span className="text-amber-300">Manufacturer in India</span>
          </h1>

          <p className="mt-5 text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-lg">
            Wedding bags, sweet bags, garment bags, jute bags, saree covers & more —
            fully customizable, bulk supply at direct factory prices.
          </p>

          {/* Trust line */}
          <div className="mt-4 flex flex-wrap gap-3">
            {["✓ Bulk Orders", "✓ Custom Printing", "✓ Pan India Delivery", "✓ 500 pcs MOQ"].map((t) => (
              <span key={t} className="text-xs text-white/70 font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 text-sm sm:text-base"
            >
              Get Free Quote <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/919368400659?text=Hi%2C%20I%20need%20a%20quote%20for%20carry%20bags."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#1ebe5d] transition-all shadow-lg text-sm sm:text-base"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1 text-xs"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </motion.div>
    </section>

    {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
    <section className="bg-[hsl(var(--earth))] text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="font-serif text-3xl sm:text-4xl text-amber-300">{s.value}</p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PRODUCT CATEGORIES ───────────────────────────────────────────────── */}
    <section className="section-pad bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="badge-pill bg-accent/10 text-accent mb-3">Our Product Range</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2">
            6 Categories, Endless Possibilities
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Click any category to explore all variants, sizes, and pricing options.
          </p>
        </motion.div>

        {/* Wedding bags — HERO card */}
        {(() => {
          const wedding = mainCategories[0];
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link
                to={`/category/${wedding.id}`}
                className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-400 border border-border/50"
              >
                <div className="sm:w-1/2 lg:w-3/5 aspect-video sm:aspect-auto overflow-hidden">
                  <img
                    src={wedding.image}
                    alt={wedding.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-52"
                  />
                </div>
                <div className="sm:w-1/2 lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-3xl mb-3">{wedding.icon}</span>
                  <div className="badge-pill bg-rose-100 text-rose-700 w-fit mb-3 text-xs">⭐ Most Popular Category</div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-3 group-hover:text-accent transition-colors">
                    {wedding.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                    {wedding.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {wedding.subcategories.map((s) => (
                      <span key={s.id} className="text-xs bg-secondary px-2.5 py-1 rounded-full text-foreground/70">
                        {s.name}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore {wedding.subcategories.length} variants <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })()}

        {/* Remaining 5 categories — grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {mainCategories.slice(1).map((cat, i) => (
            <motion.div
              key={cat.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={`/category/${cat.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="font-serif text-lg sm:text-xl group-hover:text-accent transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {cat.subcategories.length} variants
                    </span>
                    <span className="flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all">
                      Explore <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base"
          >
            Browse All Products <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>

    {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="badge-pill bg-primary/10 text-primary mb-3">Why Siya Ram?</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-2">Built on Quality, Driven by Trust</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Trusted by 300+ businesses across India for quality, reliability, and competitive pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW TO ORDER ─────────────────────────────────────────────────────── */}
    <section className="section-pad bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="badge-pill bg-accent/10 text-accent mb-3">Simple Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-2">How to Order in 4 Easy Steps</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", icon: "📞", title: "Contact Us", desc: "Call, WhatsApp, or fill the inquiry form — we respond within 2 hours." },
            { step: "02", icon: "🎨", title: "Share Design", desc: "Send your logo, brand colours, and size requirements." },
            { step: "03", icon: "✅", title: "Approve Sample", desc: "We send a digital mockup or physical sample for your approval." },
            { step: "04", icon: "🚚", title: "Receive Order", desc: "We manufacture and ship your order pan India within 7–15 days." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative text-center"
            >
              {i < 3 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px border-t-2 border-dashed border-accent/20" />
              )}
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent text-white flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-accent/40 tracking-widest">STEP {s.step}</span>
              <h4 className="font-serif text-lg mt-1 mb-2">{s.title}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="badge-pill bg-amber-100 text-amber-700 mb-3">⭐ Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-2">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Real feedback from businesses across India who trust us for their packaging needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow border border-border/50 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--cream))] overflow-hidden flex-shrink-0 flex items-center justify-center border border-border">
                  <img src={t.clientLogo} alt={t.clientName} className="w-full h-full object-contain p-1.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{t.clientName}</h3>
                  <p className="text-muted-foreground text-xs">{t.businessType}</p>
                  <p className="text-accent text-xs font-medium">{t.city}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-foreground/75 text-sm leading-relaxed italic flex-grow">
                "{t.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden bg-[hsl(var(--earth))] text-white py-16 sm:py-20">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-white/5" />

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Get bulk pricing, free design consultation, and fast delivery across India.
            Minimum order starts at just 500 pieces.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-accent/30"
            >
              <CheckCircle size={18} /> Get Free Quote
            </Link>
            <a
              href="tel:+919368400659"
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              <Phone size={18} /> +91 93684 00659
            </a>
            <a
              href="https://wa.me/919368400659?text=Hi%2C%20I%20need%20a%20quote%20for%20carry%20bags."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-lg"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
