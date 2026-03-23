import { motion } from "framer-motion";

const SectorsPage = () => (
  <div className="min-h-screen bg-background">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Sectors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving diverse industries with precision aluminium solutions tailored to specific needs.
          </p>
        </motion.div>
        
        {/* Sector Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Residential", desc: "Premium windows, sliding doors, balcony railings for homes", icon: "🏠", color: "from-blue-500 to-blue-600" },
            { title: "Commercial", desc: "Office partitions, glass facades, reception areas", icon: "🏢", color: "from-emerald-500 to-emerald-600" },
            { title: "Industrial", desc: "Heavy-duty partitions, factory windows, warehouse doors", icon: "🏭", color: "from-orange-500 to-orange-600" },
            { title: "Hospitality", desc: "Hotel lobby features, restaurant partitions, room dividers", icon: "🏨", color: "from-purple-500 to-purple-600" },
            { title: "Retail", desc: "Shopfronts, display cases, store interiors", icon: "🛍️", color: "from-pink-500 to-pink-600" },
            { title: "Education", desc: "School partitions, library shelving, auditorium panels", icon: "🏫", color: "from-indigo-500 to-indigo-600" },
          ].map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`rounded-xl p-8 text-center shadow-lg group-hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-center bg-gradient-to-br ${sector.color} bg-gradient-to-br text-white`}>
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="font-bold text-xl mb-3">{sector.title}</h3>
                <p className="opacity-90">{sector.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default SectorsPage;

