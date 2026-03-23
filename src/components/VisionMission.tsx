import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Target } from "lucide-react";

const VisionMission = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto">
      <SectionHeading
        subtitle="Our Purpose"
        title="Vision & Mission"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {[
          {
            icon: Eye,
            title: "Vision",
            text: "To become a leading name in innovative aluminium fabrication, known for creating modern, durable, and aesthetically refined solutions that enhance the way people live and work.",
          },
          {
            icon: Target,
            title: "Mission",
            text: "To deliver precision-crafted aluminium windows, partitions, and fabrication solutions that meet the highest standards of quality and reliability, while providing transparent and customer-focused service.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-card rounded-xl p-8 md:p-10 card-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-6">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMission;
