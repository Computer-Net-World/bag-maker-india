import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, TrendingDown } from "lucide-react";
import { mainCategories } from "@/data/products";

// Price tiers per piece (INR) based on quantity
// [minQty, maxQty, minPrice, maxPrice]
type Tier = [number, number, number, number];

const priceTiers: Record<string, Tier[]> = {
  wedding:   [[500,999,18,28],[1000,2999,14,22],[3000,9999,10,18],[10000,Infinity,8,14]],
  sweet:     [[500,999,5,10],[1000,2999,4,8],[3000,9999,3,6],[10000,Infinity,2,5]],
  garment:   [[500,999,12,20],[1000,2999,9,16],[3000,9999,7,13],[10000,Infinity,5,10]],
  jute:      [[500,999,25,45],[1000,2999,20,38],[3000,9999,16,30],[10000,Infinity,12,25]],
  saree:     [[500,999,8,15],[1000,2999,6,12],[3000,9999,5,10],[10000,Infinity,4,8]],
  "non-woven":[[500,999,6,12],[1000,2999,4,9],[3000,9999,3,7],[10000,Infinity,2,5]],
};

const BulkPriceCalculator = () => {
  const [catId, setCatId] = useState("wedding");
  const [qty, setQty] = useState<number>(1000);

  const tiers = priceTiers[catId] ?? priceTiers["wedding"];
  const tier = tiers.find(([min, max]) => qty >= min && qty <= max);

  const minTotal = tier ? Math.round(tier[2] * qty) : null;
  const maxTotal = tier ? Math.round(tier[3] * qty) : null;
  const perMin = tier?.[2];
  const perMax = tier?.[3];

  // Find discount % vs base (500 pcs price)
  const baseTier = tiers[0];
  const baseMid = (baseTier[2] + baseTier[3]) / 2;
  const curMid = tier ? (tier[2] + tier[3]) / 2 : baseMid;
  const discount = tier && tier !== baseTier ? Math.round(((baseMid - curMid) / baseMid) * 100) : 0;

  const cat = mainCategories.find((c) => c.id === catId);
  const waMsg = `Hi! I want to order ${qty.toLocaleString("en-IN")} pcs of ${cat?.name}. Please share exact pricing.`;

  const tierLabels = ["500–999 pcs", "1,000–2,999 pcs", "3,000–9,999 pcs", "10,000+ pcs"];

  return (
    <div className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[hsl(var(--earth))] to-[hsl(28,50%,28%)] px-6 py-5 text-white">
        <div className="flex items-center gap-2 mb-1">
          <TrendingDown size={18} className="text-amber-300" />
          <h3 className="font-serif text-lg sm:text-xl">Bulk Price Estimator</h3>
        </div>
        <p className="text-white/65 text-xs sm:text-sm">More you order → Less you pay per piece</p>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Category selector */}
        <div>
          <label className="text-xs font-semibold mb-2 block text-muted-foreground uppercase tracking-wider">
            Select Product
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCatId(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border-2 transition-all ${
                  catId === cat.id
                    ? "border-accent bg-accent/8 text-accent"
                    : "border-border text-foreground/60 hover:border-accent/40 hover:text-accent"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity slider + input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Quantity
            </label>
            <input
              type="number"
              min={500}
              step={100}
              value={qty}
              onChange={(e) => setQty(Math.max(500, parseInt(e.target.value) || 500))}
              className="w-28 border border-input rounded-lg px-3 py-1.5 text-sm text-center font-bold focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <input
            type="range"
            min={500}
            max={25000}
            step={500}
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent)) ${((qty - 500) / (25000 - 500)) * 100}%, hsl(var(--border)) ${((qty - 500) / (25000 - 500)) * 100}%, hsl(var(--border)) 100%)`,
            }}
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>500</span>
            <span>5K</span>
            <span>10K</span>
            <span>25K</span>
          </div>
        </div>

        {/* Price tiers pills */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Price Tiers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {tiers.map((t, i) => {
              const isActive = tier === t;
              return (
                <button
                  key={i}
                  onClick={() => setQty(t[0])}
                  className={`rounded-xl p-2.5 text-center border-2 transition-all ${
                    isActive
                      ? "border-accent bg-accent/8"
                      : "border-border hover:border-accent/40"
                  }`}
                >
                  <p className={`text-[10px] font-medium mb-0.5 ${isActive ? "text-accent" : "text-muted-foreground"}`}>
                    {tierLabels[i]}
                  </p>
                  <p className={`text-xs font-bold ${isActive ? "text-accent" : "text-foreground/70"}`}>
                    ₹{t[2]}–{t[3]}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result */}
        {tier && (
          <motion.div
            key={`${catId}-${qty}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[hsl(var(--cream))] rounded-2xl p-4 sm:p-5"
          >
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Per Piece</p>
                <p className="text-xl sm:text-2xl font-bold text-accent">
                  ₹{perMin}–{perMax}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Estimated Total</p>
                <p className="text-xl sm:text-2xl font-bold text-foreground">
                  ₹{minTotal?.toLocaleString("en-IN")}–{maxTotal?.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
            {discount > 0 && (
              <div className="flex items-center gap-1.5 text-green-700 text-xs font-semibold mb-3">
                <TrendingDown size={14} />
                You save ~{discount}% vs buying 500 pcs!
              </div>
            )}
            <p className="text-[10px] text-muted-foreground mb-3">
              * Estimated price range. Final price depends on design complexity, handles, material, and print type.
            </p>
            <a
              href={`https://wa.me/919368400659?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              <MessageCircle size={16} /> Get Exact Quote for {qty.toLocaleString("en-IN")} pcs
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BulkPriceCalculator;
