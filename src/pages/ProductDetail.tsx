import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ChevronLeft, Check, Tag, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { mainCategories } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Find the product across all categories
  let found: { sub: ReturnType<typeof mainCategories[0]["subcategories"][0]>; cat: typeof mainCategories[0] } | null = null;
  for (const cat of mainCategories) {
    const sub = cat.subcategories.find((s) => s.id === id);
    if (sub) { found = { sub, cat }; break; }
  }

  if (!found) {
    return (
      <Layout>
        <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="inline-block bg-accent text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-accent/90 transition-colors">
              Back to Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const { sub: product, cat: category } = found;
  const waMsg = `Hi, I'm interested in "${product.name}" (${category.name}). MOQ: ${product.moq} pcs. Please share pricing and availability.`;
  const waLink = `https://wa.me/919368400659?text=${encodeURIComponent(waMsg)}`;

  const BADGE_STYLES: Record<string, string> = {
    "Most Popular": "bg-amber-100 text-amber-800",
    "Best Seller": "bg-green-100 text-green-800",
    "New": "bg-blue-100 text-blue-800",
    "Luxury": "bg-purple-100 text-purple-800",
    "Trending": "bg-pink-100 text-pink-800",
    "Eco Pick": "bg-emerald-100 text-emerald-800",
    "Durable": "bg-slate-100 text-slate-800",
    "Custom": "bg-orange-100 text-orange-800",
    "Festival Pick": "bg-red-100 text-red-800",
    "Value Pick": "bg-teal-100 text-teal-800",
    "Premium": "bg-indigo-100 text-indigo-800",
    "Best for Gifting": "bg-rose-100 text-rose-800",
  };

  const specRows = [
    { label: "Material",      value: product.specs.material },
    { label: "GSM",           value: product.specs.gsm },
    { label: "Weight Capacity", value: product.specs.weight },
    { label: "Load Capacity", value: product.specs.loadCapacity },
    { label: "Available Sizes", value: product.specs.sizes?.join(", ") },
    { label: "Handle Types",  value: product.specs.handles?.join(", ") },
  ].filter((r) => r.value);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="pt-20 pb-0 border-b border-border bg-white">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/category/${category.id}`} className="hover:text-accent transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main product section */}
      <section className="section-pad bg-[hsl(var(--cream))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md border border-border/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 badge-pill ${BADGE_STYLES[product.badge] ?? "bg-gray-100 text-gray-800"} shadow-sm`}>
                    <Tag size={11} /> {product.badge}
                  </span>
                )}
              </div>

              {/* Customization options */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[
                  { icon: "📏", label: "Size" },
                  { icon: "🎨", label: "Color" },
                  { icon: "🖨️", label: "Print" },
                  { icon: "🔗", label: "Handle" },
                ].map((opt) => (
                  <div key={opt.label} className="bg-white rounded-xl p-3 text-center border border-border/50 shadow-sm">
                    <div className="text-2xl mb-1">{opt.icon}</div>
                    <p className="text-xs font-semibold text-foreground/70">{opt.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-2">All options are fully customizable</p>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col">
              <Link to={`/category/${category.id}`} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-4 w-fit">
                <ChevronLeft size={15} /> Back to {category.name}
              </Link>

              {/* Category badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{category.icon}</span>
                <span className="badge-pill bg-accent/10 text-accent text-xs">{category.name}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl mb-3">{product.name}</h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">{product.description}</p>

              {/* Price & MOQ */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 mb-6 border border-border/50 shadow-sm">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Price per piece</p>
                    <p className="text-2xl sm:text-3xl font-bold text-accent">{product.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">*Price varies with quantity & customization</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Min. Order Qty</p>
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">{product.moq.toLocaleString()} pcs</p>
                    <p className="text-xs text-muted-foreground mt-1">Bulk discounts available</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {product.customizable && (
                  <div className="flex items-center gap-2 text-green-700 text-sm">
                    <Check size={17} className="shrink-0" />
                    <span className="font-medium">Fully Customizable — size, color, print, handles</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-blue-700 text-sm">
                  <Check size={17} className="shrink-0" />
                  <span className="font-medium">Bulk order discounts available</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700 text-sm">
                  <Check size={17} className="shrink-0" />
                  <span className="font-medium">Pan India shipping — delivery in 7–15 days</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-xl font-semibold text-base transition-colors shadow-lg"
                >
                  <MessageCircle size={20} /> Get Quote on WhatsApp
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white py-3 rounded-xl font-semibold text-sm transition-colors"
                  >
                    Inquiry Form
                  </Link>
                  <a
                    href="tel:+919368400659"
                    className="flex items-center justify-center gap-2 border-2 border-border text-foreground hover:bg-secondary py-3 rounded-xl font-semibold text-sm transition-colors"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-6">Product Specifications</h2>
          <div className="bg-[hsl(var(--cream))] rounded-2xl overflow-hidden border border-border/50">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {specRows.map(({ label, value }) => (
                  <tr key={label} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-sm text-foreground w-40 sm:w-52">{label}</td>
                    <td className="py-4 px-5 sm:px-6 text-sm text-muted-foreground">{value}</td>
                  </tr>
                ))}
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-5 sm:px-6 font-semibold text-sm text-foreground w-40 sm:w-52">Customizable</td>
                  <td className="py-4 px-5 sm:px-6 text-sm text-green-600 font-medium">
                    {product.customizable ? "✓ Yes — size, print, color, handles" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-[hsl(var(--earth))] text-white text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-3">Ready to Order {product.name}?</h2>
          <p className="text-white/65 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Min order: {product.moq.toLocaleString()} pieces. Custom sizes and prints available. Contact us for bulk pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp Quote
            </a>
            <Link
              to={`/category/${category.id}`}
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              More {category.name}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
