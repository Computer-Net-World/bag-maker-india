import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Factory, Paintbrush, Leaf, Truck, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import heroBags from "@/assets/hero-bags.jpg";

const features = [
  { icon: Factory, title: "Bulk Manufacturing", desc: "Large-scale production with consistent quality for orders of any size." },
  { icon: Paintbrush, title: "Custom Branding", desc: "Print your logo, brand colours, and designs on any bag material." },
  { icon: Leaf, title: "Eco-Friendly Materials", desc: "Sustainable, biodegradable materials that care for the environment." },
  { icon: Truck, title: "Pan India Delivery", desc: "Reliable shipping to every corner of India — tier 1, 2, and 3 cities." },
];

// Get top 4 featured products
const featuredProducts = products.slice(0, 4);

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const HomePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBags} alt="Premium hand carry bags" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-earth/70" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-earth-foreground leading-tight">
            Premium Hand Carry Bags Manufacturer in Hathras
          </h1>
          <p className="mt-6 text-earth-foreground/80 text-lg md:text-xl font-light">
            Durable &nbsp;|&nbsp; Customizable &nbsp;|&nbsp; Bulk Orders Available
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:brightness-110 transition">
              Get Quote
            </Link>
            <Link to="/products" className="border-2 border-earth-foreground/40 text-earth-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-earth-foreground/10 transition">
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-12 sm:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading title="Why Choose Us" subtitle="Trusted by hundreds of businesses across India for quality, reliability, and value." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-lg p-5 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-3 sm:mb-5 rounded-full bg-secondary flex items-center justify-center">
                <f.icon size={20} className="text-accent sm:text-2xl" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Categories Section */}
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading 
          title="Product Categories" 
          subtitle="Explore our 7 main product categories with specialized solutions for every industry."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to={`/products?category=${cat.id}`}
                className="group h-full bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <h3 className="font-serif text-base sm:text-lg mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-12 sm:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading 
          title="Featured Products" 
          subtitle="Check out some of our most popular items. Browse our complete collection on the products page."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link
            to="/products"
            className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-accent transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <SectionHeading title="What Our Clients Say" subtitle="Real feedback from trusted businesses across India who partner with us." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Client Logo & Info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-16 h-16 rounded-lg bg-cream overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src={t.clientLogo}
                    alt={t.clientName}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{t.clientName}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{t.businessType}</p>
                  <p className="text-muted-foreground text-xs text-accent">{t.city}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed italic flex-grow">
                "{t.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Contact */}
    <section className="py-12 sm:py-20 bg-earth text-earth-foreground text-center">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Ready to Place Your Order?</h2>
        <p className="text-earth-foreground/70 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Get in touch with us for bulk pricing, custom designs, and fast delivery across India.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Link to="/contact" className="bg-accent text-accent-foreground px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-md font-semibold hover:brightness-110 transition">
            Contact Us
          </Link>
          <a href="tel:+919876543210" className="border-2 border-earth-foreground/40 text-earth-foreground px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-md font-semibold hover:bg-earth-foreground/10 transition">
            Call Now
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
