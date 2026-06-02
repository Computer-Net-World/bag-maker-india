import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SubCategoryCard from "@/components/SubCategoryCard";
import { mainCategories } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const category = mainCategories.find((c) => c.id === id);

  if (!category) {
    return (
      <Layout>
        <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
            <Link to="/products" className="inline-block bg-accent text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-accent/90 transition-colors">
              Browse All Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const waMsg = `Hi, I'm interested in ${category.name}. Please share pricing and details.`;
  const waLink = `https://wa.me/919368400659?text=${encodeURIComponent(waMsg)}`;

  return (
    <Layout>
      {/* ── CATEGORY HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[52vh] sm:min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`} />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 pb-10 sm:pb-14 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-xs mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="text-5xl sm:text-6xl mb-4 block">{category.icon}</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              {category.name}
            </h1>
            <p className="text-white/75 text-sm sm:text-base italic mb-4">{category.tagline}</p>
            <p className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
              {category.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SUBCATEGORY COUNT BAR ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link to="/products" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft size={15} /> All Products
            </Link>
            <span className="text-border">|</span>
            <span className="text-sm text-foreground font-medium">
              {category.subcategories.length} variants available
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-3.5 py-2 rounded-lg hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href="tel:+919368400659"
              className="flex items-center gap-1.5 border border-border text-xs font-semibold px-3.5 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Phone size={14} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── SUBCATEGORY GRID ───────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--cream))]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl">
              Choose Your {category.name} Variant
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-lg mx-auto">
              All bags are fully customizable — your size, print, and design. Minimum order 500 pcs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {category.subcategories.map((sub, i) => (
              <SubCategoryCard
                key={sub.id}
                sub={sub}
                categoryId={category.id}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZATION STRIP ───────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-2">Can't find what you need?</h3>
              <p className="text-muted-foreground text-sm">We do fully custom sizes, prints, and materials. Tell us your requirement!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/custom-orders"
                className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm"
              >
                <CheckCircle size={16} /> Custom Order
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1ebe5d] transition-colors text-sm"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER CATEGORIES ──────────────────────────────────────────────── */}
      <section className="section-pad bg-[hsl(var(--cream))]">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-center mb-8">Explore Other Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {mainCategories.filter((c) => c.id !== id).map((cat, i) => (
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
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-border/50"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-xl mb-1">{cat.icon}</div>
                    <p className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                      {cat.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
