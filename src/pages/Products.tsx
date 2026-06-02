import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SubCategoryCard from "@/components/SubCategoryCard";
import { mainCategories, allProducts } from "@/data/products";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Sync category filter from URL param
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = allProducts.filter((p) => {
    const matchCat = !selectedCategory || p.categoryId === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchSearch =
      !searchTerm ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  // Group filtered products by category for display
  const grouped = mainCategories
    .map((cat) => ({
      cat,
      items: filtered.filter((p) => p.categoryId === cat.id),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-10 sm:pb-14 bg-[hsl(var(--cream))]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center max-w-2xl mx-auto">
              <span className="badge-pill bg-accent/10 text-accent mb-4">All Products</span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2">
                Our Complete Product Range
              </h1>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                Explore {allProducts.length} products across 6 categories — all customizable with your brand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm py-3 sm:py-4">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="relative mb-3">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-border rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <SlidersHorizontal size={14} className="text-muted-foreground shrink-0" />
            <button
              onClick={() => setSelectedCategory(null)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-colors shrink-0 ${
                !selectedCategory ? "bg-accent text-white shadow-sm" : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              All
            </button>
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                className={`whitespace-nowrap flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors shrink-0 ${
                  selectedCategory === cat.id ? "bg-accent text-white shadow-sm" : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                }`}
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-2">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad bg-[hsl(var(--cream))]">
        <div className="container mx-auto px-4 lg:px-8">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium mb-2">No products found</p>
              <p className="text-muted-foreground text-sm mb-6">Try a different search term or clear the filters.</p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchTerm(""); }}
                className="bg-accent text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-accent/90 transition-colors text-sm"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : selectedCategory ? (
            // Single category view — bigger cards
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {filtered.map((p, i) => {
                  const cat = mainCategories.find((c) => c.id === p.categoryId)!;
                  const sub = cat.subcategories.find((s) => s.id === p.id)!;
                  return <SubCategoryCard key={p.id} sub={sub} categoryId={p.categoryId} index={i} />;
                })}
              </div>
            </div>
          ) : (
            // All categories — grouped sections
            <div className="space-y-14 sm:space-y-20">
              {grouped.map(({ cat, items }, gi) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.06, duration: 0.5 }}
                >
                  {/* Category section header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{cat.icon}</span>
                      <div>
                        <h2 className="font-serif text-xl sm:text-2xl">{cat.name}</h2>
                        <p className="text-muted-foreground text-xs sm:text-sm">{cat.description}</p>
                      </div>
                    </div>
                    <Link
                      to={`/category/${cat.id}`}
                      className="shrink-0 flex items-center gap-1.5 text-accent text-xs sm:text-sm font-semibold hover:gap-2.5 transition-all"
                    >
                      See All <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {items.map((p, i) => {
                      const sub = cat.subcategories.find((s) => s.id === p.id)!;
                      return <SubCategoryCard key={p.id} sub={sub} categoryId={cat.id} index={i} />;
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-10 sm:py-14 bg-white border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              { icon: "🏭", title: "Direct Manufacturer", desc: "No middlemen — lowest prices guaranteed" },
              { icon: "🚚", title: "Pan India Delivery", desc: "Fast delivery to tier 1, 2, and 3 cities" },
              { icon: "🎨", title: "Fully Customizable", desc: "Size, color, print, and design — all custom" },
            ].map((b) => (
              <div key={b.title}>
                <div className="text-4xl mb-2">{b.icon}</div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">{b.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
