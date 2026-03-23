import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LocationSection = () => (
  <section id="location" className="py-20 md:py-28 bg-gradient-to-b from-muted to-background">
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <SectionHeading 
        subtitle="Find Us"
        title="Visit Us"
      />
      
      {/* Address Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card/80 backdrop-blur-sm rounded-xl shadow-xl border border-border/50 p-6 md:p-8 max-w-2xl mx-auto mt-12"
      >
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <MapPin className="w-8 h-8 text-primary-foreground" />
        </div>
        
        <div className="space-y-2 text-muted-foreground leading-relaxed text-lg">
          <p>Unit no. 3 & 4</p>
          <p>Plot no. 185/1, Dutch Kulpada</p>
          <p>Behind Sai Palace Hotel</p>
          <p className="font-semibold text-foreground">Kashimira, Thane East</p>
        </div>
        
        <Button 
          asChild
          className="mt-8 w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 text-primary-foreground rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-6"
        >
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Unit%20no.%203%20%26%204%2C%20Plot%20no.%20185%2F1%2C%20Dutch%20Kulpada%2C%20Behind%20Sai%20Palace%20Hotel%2C%20Kashimira%2C%20Thane%20East" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Navigation className="w-5 h-5 mr-2" />
            Get Directions
          </a>
        </Button>
      </motion.div>

      <p className="text-center text-sm text-muted-foreground mt-12 max-w-md mx-auto">
        Serving Mumbai & Thane region with precision aluminium solutions
      </p>
    </div>
  </section>
);

export default LocationSection;

