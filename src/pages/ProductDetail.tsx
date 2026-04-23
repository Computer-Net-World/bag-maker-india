import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ChevronLeft, Check, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold hover:bg-accent transition-colors">
              Back to Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const phoneNumber = "919368400659";
  const whatsappMessage = `Hi, I'm interested in ${product.name} with MOQ of ${product.moq} pieces. Can you provide more details and pricing?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-4 border-b border-border">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-accent flex items-center gap-1">
              <ChevronLeft size={16} /> Products
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-md overflow-hidden bg-secondary cursor-pointer hover:opacity-70 transition-opacity">
                    <img src={product.image} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col">
              {/* Category Badge */}
              <div className="inline-flex w-fit items-center gap-2 mb-4 px-3 py-1.5 bg-secondary rounded-full">
                <span className="text-sm font-semibold text-accent">{product.subcategory}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl mb-3 text-foreground">{product.name}</h1>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

              {/* Price & MOQ */}
              <div className="bg-cream rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price per piece</p>
                    <p className="text-2xl sm:text-3xl font-semibold text-accent">{product.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Minimum Order</p>
                    <p className="text-2xl sm:text-3xl font-semibold">{product.moq.toLocaleString()} pcs</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {product.customizable && (
                  <div className="flex items-center gap-2 text-green-600">
                    <Check size={20} />
                    <span className="font-medium">Fully Customizable (Size, Color, Print, Design)</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-blue-600">
                  <AlertCircle size={20} />
                  <span className="font-medium">Bulk Order Discount Available</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={20} />
                  Get Quote on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Contact Form
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8">Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {product.specs.material && (
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">Material</td>
                    <td className="py-4 px-4 text-muted-foreground">{product.specs.material}</td>
                  </tr>
                )}
                {product.specs.gsm && (
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">GSM</td>
                    <td className="py-4 px-4 text-muted-foreground">{product.specs.gsm}</td>
                  </tr>
                )}
                {product.specs.sizes && (
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">Available Sizes</td>
                    <td className="py-4 px-4 text-muted-foreground">{product.specs.sizes.join(", ")}</td>
                  </tr>
                )}
                {product.specs.loadCapacity && (
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">Load Capacity</td>
                    <td className="py-4 px-4 text-muted-foreground">{product.specs.loadCapacity}</td>
                  </tr>
                )}
                {product.specs.handles && (
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">Handle Types</td>
                    <td className="py-4 px-4 text-muted-foreground">{product.specs.handles.join(", ")}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8">Customization Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "📏", label: "Size", desc: "Customize bag dimensions" },
              { icon: "🎨", label: "Color", desc: "Choose from 50+ colors" },
              { icon: "🖨️", label: "Print", desc: "Full color digital/screen print" },
              { icon: "🔗", label: "Handles", desc: "Various handle options" },
            ].map((opt) => (
              <div key={opt.label} className="bg-card rounded-lg p-6 text-center border border-border hover:border-accent transition-colors">
                <div className="text-4xl mb-3">{opt.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{opt.label}</h3>
                <p className="text-muted-foreground text-sm">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-20 bg-earth text-earth-foreground">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <SectionHeading title="Why Order From Us" subtitle="" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
            <div>
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-semibold mb-2">Direct Manufacturer</h3>
              <p className="text-earth-foreground/70">No middlemen, lowest wholesale prices guaranteed</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-semibold mb-2">Pan India Delivery</h3>
              <p className="text-earth-foreground/70">Fast & reliable shipping to all cities</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-earth-foreground/70">Premium materials, strict QC process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get a custom quote for {product.name} with your specific requirements. Minimum order: {product.moq.toLocaleString()} pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={20} />
              Get Quote
            </a>
            <Link
              to="/products"
              className="px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-colors"
            >
              Browse More Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
