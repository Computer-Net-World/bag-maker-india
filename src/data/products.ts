// ─── Image imports ───────────────────────────────────────────────────────────
import weddingBagsImg    from "@/assets/wedding-bags.png";
import sweetBagsImg      from "@/assets/sweet-bags.png";
import garmentBagsImg    from "@/assets/garment-bags.png";
import juteBagsImg       from "@/assets/jute-bags-ai.png";
import sareeCoverImg     from "@/assets/saree-cover.png";
import sareePrintedImg   from "@/assets/saree-printed.png";
import nonwovenBagsImg   from "@/assets/nonwoven-bags.png";
import weddingReturnImg  from "@/assets/wedding-return-gift.png";
import weddingWelcomeImg from "@/assets/wedding-welcome.png";
import paperBagsAiImg    from "@/assets/paper-bags-ai.png";
import paperBagImg       from "@/assets/paper-bag.jpg";
import clothBagImg       from "@/assets/cloth-bag.jpg";
import customBagImg      from "@/assets/custom-bag.jpg";

// ─── Interfaces ──────────────────────────────────────────────────────────────
export interface SubCategory {
  id: string;
  name: string;
  image: string;
  description: string;
  specs: {
    sizes?: string[];
    material?: string;
    gsm?: string;
    loadCapacity?: string;
    handles?: string[];
    weight?: string; // for sweet bags in kg
  };
  moq: number;
  price: string;
  customizable: boolean;
  badge?: string; // e.g. "Best Seller", "Eco-Friendly"
}

export interface MainCategory {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  description: string;
  longDescription: string;
  color: string;      // Tailwind gradient class
  accentColor: string; // for badges
  subcategories: SubCategory[];
}

// ─── Main Categories ─────────────────────────────────────────────────────────
export const mainCategories: MainCategory[] = [

  // ── 1. Wedding Bags ────────────────────────────────────────────────────────
  {
    id: "wedding",
    name: "Wedding Bags",
    tagline: "Make every celebration memorable",
    icon: "💍",
    image: weddingBagsImg,
    description: "Premium customized bags for weddings and all special occasions",
    longDescription:
      "From intimate gatherings to grand shaadis, our wedding bags combine elegance with practicality. Fully customizable with the couple's name, wedding date, or any design you choose.",
    color: "from-rose-900 to-amber-800",
    accentColor: "rose",
    subcategories: [
      {
        id: "wedding-return-gift",
        name: "Return Gift Bags",
        image: weddingReturnImg,
        description: "Beautifully crafted bags perfect for wedding return gifts and favours",
        specs: {
          sizes: ["8×6 inches", "10×8 inches", "12×10 inches"],
          material: "Premium Paper / Non-Woven",
          gsm: "150–200 GSM",
          loadCapacity: "1–2 kg",
          handles: ["Ribbon", "Golden Handle"],
        },
        moq: 500,
        price: "₹5–10 per piece",
        customizable: true,
        badge: "Most Popular",
      },
      {
        id: "wedding-welcome",
        name: "Welcome Bags",
        image: weddingWelcomeImg,
        description: "Premium welcome bags for wedding guests — first impressions matter",
        specs: {
          sizes: ["12×10 inches", "14×12 inches"],
          material: "Premium Kraft / Duplex",
          gsm: "200 GSM",
          loadCapacity: "2–4 kg",
          handles: ["Ribbon", "Flat Handle"],
        },
        moq: 500,
        price: "₹8–12 per piece",
        customizable: true,
        badge: "New",
      },
      {
        id: "wedding-premium-printed",
        name: "Premium Printed Bags",
        image: customBagImg,
        description: "Luxury bags with full-colour printing for grand wedding events",
        specs: {
          sizes: ["14×10 inches", "16×12 inches"],
          material: "Premium Paper",
          gsm: "250 GSM",
          loadCapacity: "3–5 kg",
          handles: ["Premium Handle"],
        },
        moq: 1000,
        price: "₹10–15 per piece",
        customizable: true,
        badge: "Luxury",
      },
      {
        id: "wedding-custom",
        name: "Fully Custom Wedding Bags",
        image: weddingReturnImg,
        description: "100% customised — your design, your size, your story",
        specs: {
          sizes: ["Any custom size"],
          material: "Choice of material",
          gsm: "As per requirement",
          loadCapacity: "Custom",
          handles: ["Any handle type"],
        },
        moq: 500,
        price: "₹12–25 per piece",
        customizable: true,
        badge: "Custom",
      },
    ],
  },

  // ── 2. Sweet / Mithai Bags ──────────────────────────────────────────────────
  {
    id: "sweet",
    name: "Sweet (Mithai) Bags",
    tagline: "Sweeten every occasion",
    icon: "🍬",
    image: sweetBagsImg,
    description: "Hygienic food-grade bags for sweet shops, bakeries and mithai stores",
    longDescription:
      "Our food-grade mithai bags are made from food-safe materials and are available in sizes perfectly suited for 500g, 1 kg, and 2 kg sweet quantities. Ideal for festivals, daily retail, and gifting.",
    color: "from-orange-700 to-yellow-600",
    accentColor: "orange",
    subcategories: [
      {
        id: "sweet-half-kg",
        name: "500 Gram Sweet Bag",
        image: sweetBagsImg,
        description: "Compact bags perfect for 500g of mithai — daily sweet shop staple",
        specs: {
          sizes: ["8×6 inches", "9×7 inches"],
          material: "Food Grade Kraft Paper",
          gsm: "120–150 GSM",
          weight: "Upto 500g",
          loadCapacity: "0.5 kg",
          handles: ["Twisted Paper"],
        },
        moq: 1000,
        price: "₹1–2 per piece",
        customizable: true,
        badge: "Best Seller",
      },
      {
        id: "sweet-one-kg",
        name: "1 Kg Sweet Bag",
        image: sweetBagsImg,
        description: "Most popular size — 1 kg capacity bags for all occasions",
        specs: {
          sizes: ["10×8 inches", "11×9 inches"],
          material: "Food Grade Kraft / Duplex",
          gsm: "150 GSM",
          weight: "Upto 1 kg",
          loadCapacity: "1 kg",
          handles: ["Twisted Paper", "Flat Handle"],
        },
        moq: 1000,
        price: "₹1.50–2.50 per piece",
        customizable: true,
        badge: "Most Popular",
      },
      {
        id: "sweet-two-kg",
        name: "2 Kg Sweet Bag",
        image: sweetBagsImg,
        description: "Larger bags for 2 kg of sweets — ideal for festival gifting",
        specs: {
          sizes: ["12×10 inches", "13×11 inches"],
          material: "Heavy Kraft Paper",
          gsm: "180–200 GSM",
          weight: "Upto 2 kg",
          loadCapacity: "2 kg",
          handles: ["Rope Handle", "Flat Handle"],
        },
        moq: 500,
        price: "₹2–3.50 per piece",
        customizable: true,
        badge: "Festival Pick",
      },
    ],
  },

  // ── 3. Garment Bags ────────────────────────────────────────────────────────
  {
    id: "garment",
    name: "Garment Bags",
    tagline: "Dress your brand in style",
    icon: "👗",
    image: garmentBagsImg,
    description: "Stylish carry bags for boutiques, clothing stores, and fashion brands",
    longDescription:
      "From high-street boutiques to small clothing stores, we create garment bags that reflect your brand's identity. Available in premium paper, non-woven, and laminated finishes.",
    color: "from-slate-800 to-zinc-700",
    accentColor: "slate",
    subcategories: [
      {
        id: "garment-boutique",
        name: "Boutique Bags",
        image: garmentBagsImg,
        description: "Upscale bags for boutiques — matte, glossy, or kraft finishes",
        specs: {
          sizes: ["14×10 inches", "16×12 inches", "18×14 inches"],
          material: "Premium Non-Woven / Paper",
          gsm: "150–200 GSM",
          loadCapacity: "2–5 kg",
          handles: ["Flat Ribbon", "Loop"],
        },
        moq: 500,
        price: "₹3–6 per piece",
        customizable: true,
        badge: "Premium",
      },
      {
        id: "garment-clothing-store",
        name: "Clothing Store Bags",
        image: clothBagImg,
        description: "Durable everyday bags for clothing retail stores",
        specs: {
          sizes: ["12×10 inches", "14×12 inches", "16×14 inches"],
          material: "Non-Woven 100 GSM",
          gsm: "100 GSM",
          loadCapacity: "3–7 kg",
          handles: ["Loop Handle"],
        },
        moq: 500,
        price: "₹2.50–4.50 per piece",
        customizable: true,
        badge: "Value Pick",
      },
      {
        id: "garment-premium-brand",
        name: "Premium Brand Bags",
        image: garmentBagsImg,
        description: "High-end bags with foil stamping, embossing, and premium finish",
        specs: {
          sizes: ["16×12 inches", "18×14 inches", "20×16 inches"],
          material: "Laminated Paper / Art Board",
          gsm: "250–350 GSM",
          loadCapacity: "5–8 kg",
          handles: ["Rope Handle", "Premium Ribbon"],
        },
        moq: 1000,
        price: "₹6–12 per piece",
        customizable: true,
        badge: "Luxury",
      },
    ],
  },

  // ── 4. Jute Bags ───────────────────────────────────────────────────────────
  {
    id: "jute",
    name: "Jute Bags",
    tagline: "Eco-friendly and built to last",
    icon: "🌾",
    image: juteBagsImg,
    description: "Natural, biodegradable jute bags for corporate gifting and events",
    longDescription:
      "Jute is India's most sustainable packaging material. Our jute bags are hand-crafted, sturdy, and 100% biodegradable — perfect for corporate gifting, trade shows, and everyday use.",
    color: "from-amber-800 to-yellow-700",
    accentColor: "amber",
    subcategories: [
      {
        id: "jute-laminated",
        name: "Laminated Jute Bags",
        image: juteBagsImg,
        description: "Durable jute bags with a protective laminated coating",
        specs: {
          sizes: ["12×10 inches", "14×12 inches", "16×14 inches"],
          material: "Laminated Jute",
          gsm: "200 GSM",
          loadCapacity: "5–10 kg",
          handles: ["Rope", "Flat"],
        },
        moq: 500,
        price: "₹5–8 per piece",
        customizable: true,
        badge: "Durable",
      },
      {
        id: "jute-designer",
        name: "Designer Printed Jute Bags",
        image: juteBagsImg,
        description: "Premium jute bags with custom printing for corporate gifting",
        specs: {
          sizes: ["12×10 inches", "14×12 inches", "16×14 inches", "18×16 inches"],
          material: "Natural Jute",
          gsm: "250 GSM",
          loadCapacity: "5–12 kg",
          handles: ["Rope Handle"],
        },
        moq: 1000,
        price: "₹6–10 per piece",
        customizable: true,
        badge: "Best for Gifting",
      },
      {
        id: "jute-promotional",
        name: "Promotional Jute Bags",
        image: juteBagsImg,
        description: "Cost-effective jute bags for events and corporate giveaways",
        specs: {
          sizes: ["10×8 inches", "12×10 inches", "14×12 inches"],
          material: "Natural Jute",
          gsm: "200 GSM",
          loadCapacity: "3–8 kg",
          handles: ["Rope"],
        },
        moq: 500,
        price: "₹4–6.50 per piece",
        customizable: true,
        badge: "Eco Pick",
      },
      {
        id: "jute-tote",
        name: "Jute Tote Bags",
        image: juteBagsImg,
        description: "Trendy tote-style jute bags for fashion and retail use",
        specs: {
          sizes: ["14×12 inches", "16×14 inches", "18×16 inches"],
          material: "Premium Jute",
          gsm: "300 GSM",
          loadCapacity: "8–15 kg",
          handles: ["Long Rope Handle"],
        },
        moq: 500,
        price: "₹7–12 per piece",
        customizable: true,
        badge: "Trending",
      },
    ],
  },

  // ── 5. Saree Cover ─────────────────────────────────────────────────────────
  {
    id: "saree",
    name: "Saree Cover",
    tagline: "Protect your precious sarees in style",
    icon: "🥻",
    image: sareeCoverImg,
    description: "Non-woven and fabric saree covers for retail, gifting, and storage",
    longDescription:
      "Our saree covers are designed specifically for the Indian market — elegant on the outside, protective on the inside. Perfect for sari shops, gifting during weddings and festivals.",
    color: "from-purple-900 to-pink-700",
    accentColor: "purple",
    subcategories: [
      {
        id: "saree-basic",
        name: "Basic Saree Cover",
        image: sareeCoverImg,
        description: "Simple, clean non-woven covers for everyday saree packaging",
        specs: {
          sizes: ["14×48 inches", "16×52 inches"],
          material: "Non-Woven 80 GSM",
          gsm: "80 GSM",
          handles: ["No Handle"],
        },
        moq: 1000,
        price: "₹3–5 per piece",
        customizable: true,
        badge: "Value Pick",
      },
      {
        id: "saree-printed",
        name: "Printed Saree Cover",
        image: sareePrintedImg,
        description: "Printed covers with your brand logo — perfect for saree shops",
        specs: {
          sizes: ["14×48 inches", "16×52 inches", "18×54 inches"],
          material: "Printed Non-Woven 100 GSM",
          gsm: "100 GSM",
          handles: ["Hook / Hanger"],
        },
        moq: 500,
        price: "₹5–8 per piece",
        customizable: true,
        badge: "Best Seller",
      },
      {
        id: "saree-premium",
        name: "Premium Gift Saree Cover",
        image: sareeCoverImg,
        description: "Luxury saree covers for weddings, gifting, and premium retail",
        specs: {
          sizes: ["16×52 inches", "18×54 inches", "Custom"],
          material: "Laminated Non-Woven 150 GSM",
          gsm: "150 GSM",
          handles: ["Golden Hook", "Ribbon"],
        },
        moq: 500,
        price: "₹8–15 per piece",
        customizable: true,
        badge: "Luxury",
      },
    ],
  },

  // ── 6. Non-Woven Bags ───────────────────────────────────────────────────────
  {
    id: "non-woven",
    name: "Non-Woven Bags",
    tagline: "Durable reusable bags for all retail needs",
    icon: "📦",
    image: nonwovenBagsImg,
    description: "Bulk non-woven carry bags — D Cut, U Cut, and Loop Handle varieties",
    longDescription:
      "Non-woven bags are the backbone of Indian retail packaging. Durable, reusable, and available in multiple finishes — laminated or non-laminated — they suit every budget and use case.",
    color: "from-teal-800 to-cyan-700",
    accentColor: "teal",
    subcategories: [
      {
        id: "nonwoven-dcut",
        name: "D Cut Non-Woven Bag",
        image: nonwovenBagsImg,
        description: "Classic D-cut bags with welded or stitched handles for retail",
        specs: {
          sizes: ["14×10 inches", "16×12 inches", "18×14 inches", "Custom"],
          material: "Non-Woven 80 GSM",
          gsm: "80 GSM",
          loadCapacity: "2–5 kg",
          handles: ["Welded", "Stitched"],
        },
        moq: 500,
        price: "₹2–4 per piece",
        customizable: true,
        badge: "Most Popular",
      },
      {
        id: "nonwoven-ucut",
        name: "U Cut Non-Woven Bag",
        image: nonwovenBagsImg,
        description: "Elegant U-cut bags with curved handles — modern retail look",
        specs: {
          sizes: ["12×10 inches", "14×12 inches", "16×14 inches"],
          material: "Non-Woven 80 GSM",
          gsm: "80 GSM",
          loadCapacity: "2–4 kg",
          handles: ["Welded"],
        },
        moq: 500,
        price: "₹2.50–4.50 per piece",
        customizable: true,
        badge: "Trending",
      },
      {
        id: "nonwoven-loop",
        name: "Loop Handle Non-Woven Bag",
        image: clothBagImg,
        description: "Comfortable loop handle bags with strong construction",
        specs: {
          sizes: ["12×10 inches", "14×12 inches", "16×14 inches", "18×16 inches"],
          material: "Non-Woven 80–100 GSM",
          gsm: "80–100 GSM",
          loadCapacity: "3–8 kg",
          handles: ["Loop Handle"],
        },
        moq: 500,
        price: "₹3–5.50 per piece",
        customizable: true,
        badge: "Durable",
      },
    ],
  },
];

// ─── Flat product list for backwards-compat / search ─────────────────────────
export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  image: string;
  description: string;
  specs: SubCategory["specs"];
  moq: number;
  price: string;
  customizable: boolean;
  badge?: string;
}

export const allProducts: Product[] = mainCategories.flatMap((cat) =>
  cat.subcategories.map((sub) => ({
    id: sub.id,
    name: sub.name,
    categoryId: cat.id,
    categoryName: cat.name,
    image: sub.image,
    description: sub.description,
    specs: sub.specs,
    moq: sub.moq,
    price: sub.price,
    customizable: sub.customizable,
    badge: sub.badge,
  }))
);

// ─── Legacy export for any remaining refs ────────────────────────────────────
export const categories = mainCategories.map((c) => ({
  id: c.id,
  name: c.name,
  icon: c.icon,
  description: c.description,
  image: c.image,
  subcategories: c.subcategories.map((s) => s.name),
}));

export const products = allProducts.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.categoryId,
  subcategory: p.categoryName,
  description: p.description,
  image: p.image,
  specs: p.specs,
  moq: p.moq,
  price: p.price,
  customizable: p.customizable,
}));
