import { motion } from "framer-motion";

type Props = {
  subtitle: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ subtitle, title, description }: Props) => (
  <motion.div
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-20 mb-16 md:mb-24"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-secondary font-semibold text-sm uppercase tracking-wide mb-4 block">
      {subtitle}
    </span>
    <h2 className="max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
      {title}
    </h2>
    {description && (
      <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed mt-6">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;

