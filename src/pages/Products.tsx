import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import paperBag from "@/assets/paper-bag.jpg";
import juteBag from "@/assets/jute-bag.jpg";
import clothBag from "@/assets/cloth-bag.jpg";
import customBag from "@/assets/custom-bag.jpg";

const categories = [
  {
    img: paperBag,
    name: "Paper Bags",
    desc: "Premium kraft paper bags available in multiple sizes, colours, and handle types. Perfect for retail, gifting, and food packaging.",
    sizes: ["Small", "Medium", "Large", "Custom"],
  },
  {
    img: clothBag,
    name: "Cloth Bags",
    desc: "Durable cotton and canvas bags that are reusable, washable, and ideal for grocery, fashion retail, and promotional giveaways.",
    sizes: ["Tote", "Drawstring", "Sling", "Custom"],
  },
  {
    img: juteBag,
    name: "Jute Bags",
    desc: "Natural jute carry bags with rope or flat handles. Eco-friendly, biodegradable, and great for corporate gifting and events.",
    sizes: ["Standard", "Wine Bag", "Shopping", "Custom"],
  },
  {
    img: customBag,
    name: "Custom Printed Bags",
    desc: "Fully branded bags with your logo, tagline, and design. Available in paper, cloth, or jute — great for marketing and brand awareness.",
    sizes: ["Any Material", "Any Size", "Full Colour Print"],
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ProductsPage = () => (
  <Layout>
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Our Products"
          subtitle="Explore our complete range of carry bags — crafted for quality and designed for your brand."
        />
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((c, i) => (
          <motion.div
            key={c.name}
            custom={i}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-3">{c.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.sizes.map((s) => (
                  <span key={s} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-accent transition-colors">
                Enquire Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default ProductsPage;
