import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
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
      <SectionHeading 
        subtitle="Our Partners"
        title="Our Clients"
        description="Trusted by leading construction and infrastructure companies"
      />

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-card border border-border rounded-xl px-6 py-6 flex items-center justify-center w-48 sm:w-52 md:w-56 card-shadow"
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
