import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Shield, Award, Users } from "lucide-react";

const features = [
  { icon: Shield, title: "Quality Assurance", desc: "Premium materials and rigorous standards" },
  { icon: Award, title: "Since 2017", desc: "Years of trusted craftsmanship" },
  { icon: Users, title: "Client Focused", desc: "Long-term relationships built on trust" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading 
        subtitle="Who We Are"
        title="About Aanchal Traders"
        description="Since 2017, Aanchal Traders has been committed to shaping spaces with precision-crafted aluminium windows and partitions. We believe every structure deserves durability, safety, and elegance — values reflected in our workmanship and service. With a focus on trust, quality, and long-term relationships, we serve clients across residential, commercial, and industrial sectors."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 text-center card-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
