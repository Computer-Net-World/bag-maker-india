import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ChevronRight, Tag } from "lucide-react";
import { type SubCategory } from "@/data/products";

interface SubCategoryCardProps {
  sub: SubCategory;
  categoryId: string;
  index?: number;
}

const BADGE_STYLES: Record<string, string> = {
  "Most Popular": "bg-amber-100 text-amber-800",
  "Best Seller": "bg-green-100 text-green-800",
  "New": "bg-blue-100 text-blue-800",
  "Luxury": "bg-purple-100 text-purple-800",
  "Trending": "bg-pink-100 text-pink-800",
  "Eco Pick": "bg-emerald-100 text-emerald-800",
  "Eco-Friendly": "bg-emerald-100 text-emerald-800",
  "Durable": "bg-slate-100 text-slate-800",
  "Custom": "bg-orange-100 text-orange-800",
  "Festival Pick": "bg-red-100 text-red-800",
  "Value Pick": "bg-teal-100 text-teal-800",
  "Premium": "bg-indigo-100 text-indigo-800",
  "Best for Gifting": "bg-rose-100 text-rose-800",
};

const SubCategoryCard = ({ sub, categoryId, index = 0 }: SubCategoryCardProps) => {
  const phoneNumber = "919368400659";
  const waMsg = `Hi, I'm interested in ${sub.name}. MOQ: ${sub.moq} pcs. Please share pricing and details.`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMsg)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-border/60"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={sub.image}
          alt={sub.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {sub.badge && (
          <span
            className={`absolute top-3 left-3 badge-pill ${BADGE_STYLES[sub.badge] ?? "bg-gray-100 text-gray-800"}`}
          >
            <Tag size={10} />
            {sub.badge}
          </span>
        )}
        {sub.customizable && (
          <span className="absolute top-3 right-3 badge-pill bg-white/90 text-green-700 shadow-sm">
            ✓ Custom
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight mb-1.5">
            {sub.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {sub.description}
          </p>
        </div>

        {/* Specs chips */}
        <div className="flex flex-wrap gap-1.5">
          {sub.specs.material && (
            <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-foreground/70 font-medium">
              {sub.specs.material}
            </span>
          )}
          {sub.specs.weight && (
            <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-foreground/70 font-medium">
              {sub.specs.weight}
            </span>
          )}
          {sub.specs.loadCapacity && !sub.specs.weight && (
            <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-foreground/70 font-medium">
              Upto {sub.specs.loadCapacity}
            </span>
          )}
          {sub.specs.gsm && (
            <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-foreground/70 font-medium">
              {sub.specs.gsm}
            </span>
          )}
        </div>

        {/* Price + MOQ */}
        <div className="flex items-end justify-between pt-1 border-t border-border/60 mt-auto">
          <div>
            <p className="text-xs text-muted-foreground">Price per piece</p>
            <p className="text-accent font-bold text-base sm:text-lg">{sub.price}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              MOQ: <span className="text-foreground font-medium">{sub.moq.toLocaleString()} pcs</span>
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp Quote
          </a>
          <Link
            to={`/products/${sub.id}`}
            className="flex items-center justify-center gap-1 border-2 border-accent text-accent hover:bg-accent hover:text-white py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            View Details <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SubCategoryCard;
