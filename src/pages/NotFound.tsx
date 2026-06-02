import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Package, Phone } from "lucide-react";
import { mainCategories } from "@/data/products";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] flex flex-col items-center justify-center px-4 py-16">
      {/* Animated 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        {/* Icon */}
        <div className="text-8xl mb-4">🛍️</div>

        {/* Error number */}
        <h1 className="font-serif text-8xl sm:text-9xl font-bold text-accent/20 leading-none select-none">
          404
        </h1>

        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mt-2 mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-2">
          The page <span className="font-mono bg-secondary px-1.5 py-0.5 rounded text-xs">{location.pathname}</span> doesn't exist.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base mb-8">
          But don't worry — our bags are still here! 🎉
        </p>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
          >
            <Home size={17} /> Go Home
          </Link>
          <Link
            to="/products"
            className="flex items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Package size={17} /> Browse Products
          </Link>
        </div>

        {/* Quick category links */}
        <div className="bg-white rounded-2xl p-5 border border-border/50 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Popular Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {mainCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-accent hover:bg-accent/5 transition-colors"
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Phone size={14} />
          <span>Need help?</span>
          <a href="tel:+919368400659" className="text-accent font-semibold hover:underline">
            +91 93684 00659
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
