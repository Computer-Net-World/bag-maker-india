import gauriGraphics from "@/assets/clients/gauri graphics.jpg";
import lakmiPanna from "@/assets/clients/lakmi panna.png";
import mpp from "@/assets/clients/mpp.png";
import sbpPackers from "@/assets/clients/sbp packers.jpg";
import shriRamPackers from "@/assets/clients/shri ram packers.webp";
import yadavBox from "@/assets/clients/yadav box.jpg";

export interface Testimonial {
  id: string;
  clientName: string;
  clientLogo: string;
  city: string;
  businessType: string;
  feedback: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "client-1",
    clientName: "Gauri Graphics",
    clientLogo: gauriGraphics,
    city: "Delhi",
    businessType: "Printing & Branding",
    feedback:
      "Siya Ram Enterprises has been our trusted supplier for custom printed bags for over 3 years. Their quality is consistent, pricing is competitive, and they deliver on time, every time. Highly recommended for bulk orders!",
    rating: 5,
  },
  {
    id: "client-2",
    clientName: "Lakmi Panna",
    clientLogo: lakmiPanna,
    city: "Mumbai",
    businessType: "Retail & Gifting",
    feedback:
      "We switched to Siya Ram for our premium gift bags and it was the best decision. Their customization options are endless, and the bags are of premium quality. Our customers absolutely love them!",
    rating: 5,
  },
  {
    id: "client-3",
    clientName: "MPP",
    clientLogo: mpp,
    city: "Bangalore",
    businessType: "Wholesale Distribution",
    feedback:
      "Direct manufacturer pricing is unbeatable! We order in bulk for our distribution network across South India. Fast delivery, excellent quality control, and amazing customer service.",
    rating: 5,
  },
  {
    id: "client-4",
    clientName: "SBP Packers",
    clientLogo: sbpPackers,
    city: "Gujarat",
    businessType: "Packaging Solutions",
    feedback:
      "Working with Siya Ram has transformed our packaging game. From concept to delivery, they handle everything professionally. The jute and non-woven bags are premium quality and eco-friendly.",
    rating: 5,
  },
  {
    id: "client-5",
    clientName: "Shri Ram Packers",
    clientLogo: shriRamPackers,
    city: "Uttar Pradesh",
    businessType: "Food & Sweets Packaging",
    feedback:
      "We supply to sweet shops across the region and Siya Ram provides the best mithai bags. Hygienic, food-grade, and affordable. Our clients have been ordering consistently for 2+ years!",
    rating: 5,
  },
  {
    id: "client-6",
    clientName: "Yadav Box",
    clientLogo: yadavBox,
    city: "Jaipur",
    businessType: "Corrugated Packaging",
    feedback:
      "Excellent quality corrugated boxes with perfect customization. Siya Ram understood our requirements perfectly and delivered beyond expectations. Great team to work with!",
    rating: 5,
  },
];
