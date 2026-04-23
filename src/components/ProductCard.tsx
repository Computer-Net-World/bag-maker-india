import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const phoneNumber = "919368400659";
  const whatsappMessage = `Hi, I'm interested in ${product.name}. Can you provide more details and pricing?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Category Badge */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            {product.subcategory}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-serif text-base sm:text-lg font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Specs Grid */}
        <div className="bg-secondary/30 rounded-md p-3 mb-4 text-xs space-y-1.5">
          {product.specs.sizes && (
            <div>
              <span className="font-semibold text-foreground">Sizes:</span>
              <p className="text-muted-foreground">
                {product.specs.sizes.slice(0, 2).join(", ")}
                {product.specs.sizes.length > 2 && "..."}
              </p>
            </div>
          )}
          {product.specs.material && (
            <div>
              <span className="font-semibold text-foreground">Material:</span>
              <p className="text-muted-foreground">{product.specs.material}</p>
            </div>
          )}
          {product.specs.loadCapacity && (
            <div>
              <span className="font-semibold text-foreground">Capacity:</span>
              <p className="text-muted-foreground">{product.specs.loadCapacity}</p>
            </div>
          )}
          <div>
            <span className="font-semibold text-foreground">MOQ:</span>
            <p className="text-muted-foreground">{product.moq.toLocaleString()} pcs</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4 pb-4 border-b border-border">
          <p className="text-accent font-semibold text-sm sm:text-base">{product.price}</p>
          {product.customizable && (
            <p className="text-green-600 text-xs font-medium mt-1">✓ Fully Customizable</p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp Quote
          </a>
          <Link
            to={`/products/${product.id}`}
            className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md font-semibold text-sm flex items-center justify-center gap-1 transition-colors"
          >
            View Details
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
