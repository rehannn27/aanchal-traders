import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg1 from "@/assets/1.jpeg";
import heroBg2 from "@/assets/2.jpeg";
import heroBg3 from "@/assets/3.jpeg";
import heroBg4 from "@/assets/4.jpeg";
import heroBg5 from "@/assets/5.jpeg";
import heroBg6 from "@/assets/hero-bg.jpg";

const heroImages = [
  heroBg1,
  heroBg2,
  heroBg3,
  heroBg4,
  heroBg5,
  heroBg6
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent/50 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
          <span className="inline-block text-white/90 bg-black/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-1.5 text-sm font-medium mb-6 shadow-xl">
            Since 2017 — Trusted Fabricator
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
            Precision Aluminium Solutions for{" "}
<span className="text-gray-300 drop-shadow-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">Modern Spaces</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-xl [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]">
            Since 2017, Aanchal Traders has been delivering durable, safe, and
            elegant aluminium windows and partitions for residential, commercial,
            and industrial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#products" className="group">
              <Button
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full px-10 py-7 text-lg font-semibold gap-3 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50 shadow-2xl"
              >
                Explore Products 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact" className="group">
              <Button
                size="lg"
                className="bg-transparent backdrop-blur-sm text-white border-2 border-white/50 rounded-full px-10 py-7 text-lg font-semibold gap-3 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" /> Contact Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <motion.div 
            className="w-1.5 h-3 bg-white/60 rounded-full" 
            animate={{ y: [0, 8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Image indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 backdrop-blur-md bg-black/20 px-4 py-2 rounded-full">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-10 shadow-lg scale-110" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

