import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <SectionHeading
            title="Our Products"
            subtitle="Explore our complete range of premium carry bags, packaging boxes, and custom solutions."
          />
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-8 sm:py-12 border-b border-border">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Filter by Category:</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm("");
                }}
                className="text-accent font-semibold hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">🏭</div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">Direct Manufacturer</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                No middlemen — lowest prices guaranteed
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">🚚</div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">Pan India Delivery</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Fast delivery to tier 1, 2, and 3 cities
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">🎨</div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">Fully Customizable</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Size, color, print, and design — all custom
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
