import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// ✅ FIXED PATHS
const mangrovePhotos = [
  "6-project.jpg",
  "7-project.jpg",
  "8-project.jpg",
  "9-project.jpg"
];

const MangroveProject = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mangrove Project - Borivali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive aluminium solutions including facade systems, sliding windows, casement windows, 
              and minimalist balcony railings for premium residential development.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/mangrove-borivali/6-project.jpg"
                alt="Mangrove Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent/0 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2">
                  {mangrovePhotos.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === 0 ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
                      }`}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              4+ Premium Project Images
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Premium Residential Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Delivered state-of-the-art aluminium fabrication for Mangrove Project - a luxury residential 
                development in Borivali. Our solutions combine modern aesthetics with superior functionality.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Project Scope</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Facade Systems</li>
                      <li>• Sliding Windows</li>
                      <li>• Casement Windows</li>
                      <li>• Balcony Railings</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">Borivali, Mumbai</p>
                    <p className="text-sm text-muted-foreground mt-1">Premium Residential</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/mangrove-borivali/8-project.jpg"
                alt="Project detail"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            Project Gallery
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mangrovePhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-80 md:h-96"
                onClick={() => openLightbox(`/mangrove-borivali/${photo}`)}
              >
                <img
                  src={`/mangrove-borivali/${photo}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-lg backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                    View Fullscreen
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            <button
              className="absolute -top-12 -right-4 text-white text-2xl hover:text-gray-300 z-[10000]"
              onClick={closeLightbox}
            >
              ×
            </button>
            <img
              src={currentImage}
              alt="Fullscreen"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-zoom-in"
            />
          </motion.div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="text-lg px-8 h-14">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MangroveProject;

