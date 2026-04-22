import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Factory, Paintbrush, Leaf, Truck, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBags from "@/assets/hero-bags.jpg";
import paperBag from "@/assets/paper-bag.jpg";
import juteBag from "@/assets/jute-bag.jpg";
import clothBag from "@/assets/cloth-bag.jpg";
import customBag from "@/assets/custom-bag.jpg";

const features = [
  { icon: Factory, title: "Bulk Manufacturing", desc: "Large-scale production with consistent quality for orders of any size." },
  { icon: Paintbrush, title: "Custom Branding", desc: "Print your logo, brand colours, and designs on any bag material." },
  { icon: Leaf, title: "Eco-Friendly Materials", desc: "Sustainable, biodegradable materials that care for the environment." },
  { icon: Truck, title: "Pan India Delivery", desc: "Reliable shipping to every corner of India — tier 1, 2, and 3 cities." },
];

const products = [
  { img: paperBag, name: "Paper Bags", desc: "Strong, recyclable kraft paper bags in all sizes." },
  { img: clothBag, name: "Cloth Bags", desc: "Durable cotton and canvas bags for everyday use." },
  { img: juteBag, name: "Jute Bags", desc: "Natural jute bags, sturdy and eco-conscious." },
  { img: customBag, name: "Custom Printed Bags", desc: "Fully branded bags with your logo and design." },
];

const testimonials = [
  { name: "Rajesh Sharma", city: "Delhi", text: "Excellent quality bags at very competitive pricing. We have been ordering in bulk for our retail chain for 2 years now." },
  { name: "Priya Mehta", city: "Mumbai", text: "The custom branding options are fantastic. Our customers love the bags — they double as marketing for our brand!" },
  { name: "Anand Gupta", city: "Jaipur", text: "Timely delivery across all our stores in Rajasthan. Very professional and reliable manufacturer." },
];

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
            Premium Hand Carry Bags Manufacturer in India
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
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="Why Choose Us" subtitle="Trusted by hundreds of businesses across India for quality, reliability, and value." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="Our Products" subtitle="Explore our wide range of hand carry bags for every need." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
                <Link to="/contact" className="inline-block mt-4 text-accent font-semibold text-sm hover:underline">
                  Enquire Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="What Our Clients Say" subtitle="Trusted by retailers, wholesalers, and brands across India." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Contact */}
    <section className="py-20 bg-earth text-earth-foreground text-center">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Place Your Order?</h2>
        <p className="text-earth-foreground/70 max-w-xl mx-auto mb-8">
          Get in touch with us for bulk pricing, custom designs, and fast delivery across India.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:brightness-110 transition">
            Contact Us
          </Link>
          <a href="tel:+919876543210" className="border-2 border-earth-foreground/40 text-earth-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-earth-foreground/10 transition">
            Call Now
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default HomePage;
