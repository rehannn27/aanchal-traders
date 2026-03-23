import { motion } from "framer-motion";
import GodrejLogo from "@/assets/godrej.jpeg";
import CapaciteLogo from "@/assets/capacite.jpeg";
import DemLogo from "@/assets/dem.jpeg";
import GundechaLogo from "@/assets/gundecha.png";
import OmkarLogo from "@/assets/omkarr-removebg-preview.png";

const clients = [
  { name: "Godrej", logo: GodrejLogo },
  { name: "Capacit'e", logo: CapaciteLogo },
  { name: "DEM Phoenix", logo: DemLogo },
  { name: "Gundecha", logo: GundechaLogo },
  { name: "Omkar", logo: OmkarLogo },
];

const ClientsSection = () => (
  <section id="clients" className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Partners</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Our Clients</h2>
        <p className="text-muted-foreground">Trusted by leading construction and infrastructure companies</p>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-card border border-border rounded-xl px-10 py-6 flex items-center justify-center min-w-[200px] card-shadow"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <p className="text-center text-muted-foreground mt-8 font-medium">And Many More…</p>
    </div>
  </section>
);

export default ClientsSection;
