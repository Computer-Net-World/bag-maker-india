import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-8 sm:mb-12 ${center ? "text-center" : ""}`}
  >
    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">{title}</h2>
    {subtitle && <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
