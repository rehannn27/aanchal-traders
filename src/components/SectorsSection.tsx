import { motion } from "framer-motion";

const sectors = [
  { title: "Residential", desc: "Premium windows, sliding doors, balcony railings for homes", icon: "🏠" },
  { title: "Commercial", desc: "Office partitions, glass facades, reception areas", icon: "🏢" },
  { title: "Industrial", desc: "Heavy-duty partitions, factory windows, warehouse doors", icon: "🏭" },
  { title: "Hospitality", desc: "Hotel lobby features, restaurant partitions, room dividers", icon: "🏨" },
  { title: "Retail", desc: "Shopfronts, display cases, store interiors", icon: "🛍️" },
  { title: "Education", desc: "School partitions, library shelving, auditorium panels", icon: "🏫" },
];

const SectorsSection = () => (
  <section id="sectors" className="section-padding">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Expertise</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Our Sectors</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          Serving diverse industries with precision aluminium solutions tailored to specific needs.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector, index) => (
          <motion.div
            key={sector.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-default p-8 rounded-2xl border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-4xl mb-6">{sector.icon}</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{sector.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{sector.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;

