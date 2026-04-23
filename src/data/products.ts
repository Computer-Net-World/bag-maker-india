import paperBag from "@/assets/paper-bag.jpg";
import juteBag from "@/assets/jute-bag.jpg";
import clothBag from "@/assets/cloth-bag.jpg";
import customBag from "@/assets/custom-bag.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  specs: {
    sizes?: string[];
    material?: string;
    gsm?: string;
    loadCapacity?: string;
    handles?: string[];
  };
  moq: number;
  price: string;
  customizable: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  subcategories: string[];
}

export const categories: ProductCategory[] = [
  {
    id: "non-woven",
    name: "Non-Woven Bags",
    icon: "📦",
    description: "Durable, reusable non-woven bags perfect for retail and everyday use",
    image: clothBag,
    subcategories: ["D Cut Bags", "U Cut Bags", "Loop Handle Bags", "Box Type Bags", "Laminated/Non-Laminated"],
  },
  {
    id: "paper",
    name: "Paper Bags",
    icon: "📄",
    description: "Premium kraft paper bags for retail, gifting, and food packaging",
    image: paperBag,
    subcategories: ["Kraft Paper Bags", "Duplex Bags", "Laminated Paper Bags", "Rope Handle Bags"],
  },
  {
    id: "jute",
    name: "Jute Bags",
    icon: "🌾",
    description: "Natural, eco-friendly jute bags for corporate gifting and events",
    image: juteBag,
    subcategories: ["Laminated Jute Bags", "Designer Jute Bags", "Promotional Jute Bags"],
  },
  {
    id: "wedding",
    name: "Wedding Customized Bags",
    icon: "💍",
    description: "Premium customized bags for weddings and special occasions",
    image: customBag,
    subcategories: ["Return Gift Bags", "Welcome Bags", "Premium Printed Bags", "Customized Wedding Bags"],
  },
  {
    id: "garments",
    name: "Garments Bags",
    icon: "👗",
    description: "Stylish bags for fashion retail and clothing stores",
    image: clothBag,
    subcategories: ["Boutique Bags", "Clothing Store Bags", "Loop Handle Bags", "Premium Brand Bags"],
  },
  {
    id: "sweets",
    name: "Sweets (Mithai) Bags",
    icon: "🍬",
    description: "Hygienic and attractive bags for sweet shops and bakeries",
    image: paperBag,
    subcategories: ["Mithai Carry Bags", "Bakery Bags", "Festival Gift Bags", "Printed Sweet Bags"],
  },
  {
    id: "packaging",
    name: "Packaging Boxes",
    icon: "📮",
    description: "Sturdy packaging solutions for shipping and storage",
    image: customBag,
    subcategories: ["Bhaji Boxes", "Corrugated Boxes", "Plastic Crates"],
  },
];

export const products: Product[] = [
  // Non-Woven Bags
  {
    id: "nw-dcut-01",
    name: "Standard D Cut Non-Woven Bag",
    category: "non-woven",
    subcategory: "D Cut Bags",
    description: "Versatile D-cut non-woven bags perfect for retail stores and promotional giveaways",
    image: clothBag,
    specs: {
      sizes: ["14x10 inches", "16x12 inches", "18x14 inches", "Custom"],
      material: "Non-Woven 80 GSM",
      gsm: "80 GSM",
      loadCapacity: "2-5 kg",
      handles: ["Welded", "Stitched"],
    },
    moq: 500,
    price: "₹2-4 per piece",
    customizable: true,
  },
  {
    id: "nw-dcut-02",
    name: "Laminated D Cut Bag",
    category: "non-woven",
    subcategory: "D Cut Bags",
    description: "Premium laminated D-cut bags with enhanced durability",
    image: clothBag,
    specs: {
      sizes: ["14x10 inches", "16x12 inches", "18x14 inches"],
      material: "Laminated Non-Woven 100 GSM",
      gsm: "100 GSM",
      loadCapacity: "3-7 kg",
      handles: ["Welded", "Stitched"],
    },
    moq: 1000,
    price: "₹3-5 per piece",
    customizable: true,
  },
  {
    id: "nw-ucut-01",
    name: "U Cut Non-Woven Bag",
    category: "non-woven",
    subcategory: "U Cut Bags",
    description: "Classic U-cut bags with elegant curved handles",
    image: clothBag,
    specs: {
      sizes: ["12x10 inches", "14x12 inches", "16x14 inches"],
      material: "Non-Woven 80 GSM",
      gsm: "80 GSM",
      loadCapacity: "2-4 kg",
      handles: ["Welded"],
    },
    moq: 500,
    price: "₹2.50-4.50 per piece",
    customizable: true,
  },
  {
    id: "nw-loop-01",
    name: "Loop Handle Non-Woven Bag",
    category: "non-woven",
    subcategory: "Loop Handle Bags",
    description: "Comfortable loop handle bags for easy carrying",
    image: clothBag,
    specs: {
      sizes: ["12x10 inches", "14x12 inches", "16x14 inches", "18x16 inches"],
      material: "Non-Woven 80-100 GSM",
      gsm: "80-100 GSM",
      loadCapacity: "3-8 kg",
      handles: ["Loop Handle"],
    },
    moq: 500,
    price: "₹3-5.50 per piece",
    customizable: true,
  },

  // Paper Bags
  {
    id: "paper-kraft-01",
    name: "Kraft Paper Carrier Bag",
    category: "paper",
    subcategory: "Kraft Paper Bags",
    description: "Eco-friendly kraft paper bags perfect for retail and gifting",
    image: paperBag,
    specs: {
      sizes: ["10x7 inches", "12x9 inches", "14x10 inches", "16x12 inches"],
      material: "Kraft Paper",
      gsm: "80-150 GSM",
      loadCapacity: "2-5 kg",
      handles: ["Twisted Paper", "Rope Handle", "Flat Handle"],
    },
    moq: 500,
    price: "₹1.50-3 per piece",
    customizable: true,
  },
  {
    id: "paper-duplex-01",
    name: "Duplex Paper Bag with Handles",
    category: "paper",
    subcategory: "Duplex Bags",
    description: "Premium duplex paper bags with strong construction",
    image: paperBag,
    specs: {
      sizes: ["12x9 inches", "14x10 inches", "16x12 inches"],
      material: "Duplex Paper",
      gsm: "200 GSM",
      loadCapacity: "3-7 kg",
      handles: ["Twisted Paper", "Flat Handle"],
    },
    moq: 500,
    price: "₹2.50-4.50 per piece",
    customizable: true,
  },
  {
    id: "paper-laminated-01",
    name: "Laminated Paper Bag",
    category: "paper",
    subcategory: "Laminated Paper Bags",
    description: "Moisture-resistant laminated paper bags",
    image: paperBag,
    specs: {
      sizes: ["10x8 inches", "12x10 inches", "14x12 inches"],
      material: "Laminated Paper",
      gsm: "150 GSM",
      loadCapacity: "2-4 kg",
      handles: ["Twisted Paper"],
    },
    moq: 1000,
    price: "₹2-3.50 per piece",
    customizable: true,
  },
  {
    id: "paper-rope-01",
    name: "Rope Handle Paper Bag",
    category: "paper",
    subcategory: "Rope Handle Bags",
    description: "Stylish paper bags with rope handles for premium packaging",
    image: paperBag,
    specs: {
      sizes: ["12x9 inches", "14x10 inches", "16x12 inches", "18x14 inches"],
      material: "Kraft/Duplex Paper",
      gsm: "150-200 GSM",
      loadCapacity: "3-6 kg",
      handles: ["Rope Handle"],
    },
    moq: 500,
    price: "₹3-5 per piece",
    customizable: true,
  },

  // Jute Bags
  {
    id: "jute-laminated-01",
    name: "Laminated Jute Bag",
    category: "jute",
    subcategory: "Laminated Jute Bags",
    description: "Durable laminated jute bags with protective coating",
    image: juteBag,
    specs: {
      sizes: ["12x10 inches", "14x12 inches", "16x14 inches"],
      material: "Laminated Jute",
      gsm: "200 GSM",
      loadCapacity: "5-10 kg",
      handles: ["Rope", "Flat"],
    },
    moq: 500,
    price: "₹5-8 per piece",
    customizable: true,
  },
  {
    id: "jute-designer-01",
    name: "Designer Jute Bag with Print",
    category: "jute",
    subcategory: "Designer Jute Bags",
    description: "Premium designer jute bags with custom printing",
    image: juteBag,
    specs: {
      sizes: ["12x10 inches", "14x12 inches", "16x14 inches", "18x16 inches"],
      material: "Jute",
      gsm: "250 GSM",
      loadCapacity: "5-12 kg",
      handles: ["Rope Handle"],
    },
    moq: 1000,
    price: "₹6-10 per piece",
    customizable: true,
  },
  {
    id: "jute-promo-01",
    name: "Promotional Jute Bag",
    category: "jute",
    subcategory: "Promotional Jute Bags",
    description: "Cost-effective jute bags for corporate giveaways",
    image: juteBag,
    specs: {
      sizes: ["10x8 inches", "12x10 inches", "14x12 inches"],
      material: "Jute",
      gsm: "200 GSM",
      loadCapacity: "3-8 kg",
      handles: ["Rope"],
    },
    moq: 500,
    price: "₹4-6.50 per piece",
    customizable: true,
  },

  // Wedding Bags
  {
    id: "wedding-return-01",
    name: "Wedding Return Gift Bag",
    category: "wedding",
    subcategory: "Return Gift Bags",
    description: "Elegant bags for wedding return gifts and favors",
    image: customBag,
    specs: {
      sizes: ["8x6 inches", "10x8 inches", "12x10 inches"],
      material: "Premium Paper/Non-Woven",
      gsm: "150-200 GSM",
      loadCapacity: "1-2 kg",
      handles: ["Ribbon", "Handle"],
    },
    moq: 500,
    price: "₹5-10 per piece",
    customizable: true,
  },
  {
    id: "wedding-welcome-01",
    name: "Wedding Welcome Bag",
    category: "wedding",
    subcategory: "Welcome Bags",
    description: "Premium welcome bags for wedding guests",
    image: customBag,
    specs: {
      sizes: ["12x10 inches", "14x12 inches"],
      material: "Premium Kraft/Duplex",
      gsm: "200 GSM",
      loadCapacity: "2-4 kg",
      handles: ["Ribbon", "Handle"],
    },
    moq: 500,
    price: "₹8-12 per piece",
    customizable: true,
  },
  {
    id: "wedding-premium-01",
    name: "Premium Printed Wedding Bag",
    category: "wedding",
    subcategory: "Premium Printed Bags",
    description: "Luxury bags with premium printing for weddings",
    image: customBag,
    specs: {
      sizes: ["14x10 inches", "16x12 inches"],
      material: "Premium Paper",
      gsm: "250 GSM",
      loadCapacity: "3-5 kg",
      handles: ["Premium Handle"],
    },
    moq: 1000,
    price: "₹10-15 per piece",
    customizable: true,
  },

  // Garments Bags
  {
    id: "garments-boutique-01",
    name: "Boutique Garment Bag",
    category: "garments",
    subcategory: "Boutique Bags",
    description: "Stylish bags for boutiques and fashion stores",
    image: customBag,
    specs: {
      sizes: ["14x10 inches", "16x12 inches", "18x14 inches"],
      material: "Premium Non-Woven/Paper",
      gsm: "150-200 GSM",
      loadCapacity: "2-5 kg",
      handles: ["Flat", "Loop"],
    },
    moq: 500,
    price: "₹3-6 per piece",
    customizable: true,
  },
  {
    id: "garments-clothing-01",
    name: "Clothing Store Bag",
    category: "garments",
    subcategory: "Clothing Store Bags",
    description: "Durable bags for clothing retail stores",
    image: clothBag,
    specs: {
      sizes: ["12x10 inches", "14x12 inches", "16x14 inches"],
      material: "Non-Woven 100 GSM",
      gsm: "100 GSM",
      loadCapacity: "3-7 kg",
      handles: ["Loop Handle"],
    },
    moq: 500,
    price: "₹2.50-4.50 per piece",
    customizable: true,
  },

  // Sweets Bags
  {
    id: "sweets-mithai-01",
    name: "Mithai Carry Bag",
    category: "sweets",
    subcategory: "Mithai Carry Bags",
    description: "Hygienic bags for sweet shops and confectioneries",
    image: paperBag,
    specs: {
      sizes: ["8x6 inches", "10x8 inches", "12x10 inches"],
      material: "Kraft/Duplex Paper",
      gsm: "150 GSM",
      loadCapacity: "1-2 kg",
      handles: ["Twisted Paper"],
    },
    moq: 500,
    price: "₹1.50-2.50 per piece",
    customizable: true,
  },
  {
    id: "sweets-bakery-01",
    name: "Bakery Paper Bag",
    category: "sweets",
    subcategory: "Bakery Bags",
    description: "Food-grade bags for bakeries and food products",
    image: paperBag,
    specs: {
      sizes: ["9x7 inches", "11x9 inches", "13x11 inches"],
      material: "Food Grade Paper",
      gsm: "80-150 GSM",
      loadCapacity: "1-3 kg",
      handles: ["Twisted", "Flat"],
    },
    moq: 500,
    price: "₹1-2.50 per piece",
    customizable: true,
  },

  // Packaging Boxes
  {
    id: "packaging-corrugated-01",
    name: "Corrugated Box",
    category: "packaging",
    subcategory: "Corrugated Boxes",
    description: "Strong corrugated boxes for shipping and storage",
    image: customBag,
    specs: {
      sizes: ["12x10x8 inches", "16x12x10 inches", "20x15x12 inches", "Custom"],
      material: "Corrugated Paper",
      gsm: "150-200 GSM",
      loadCapacity: "5-50 kg",
    },
    moq: 500,
    price: "₹5-15 per piece",
    customizable: true,
  },
];
