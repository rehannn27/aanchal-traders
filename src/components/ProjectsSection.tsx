import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// New HEIC photos converted to JPGs

const mangrovePhotos = [
  "./mangrove-borivali/6-project.jpg",
  "./mangrove-borivali/7-project.jpg",
  "./mangrove-borivali/8-project.jpg",
  "./mangrove-borivali/9-project.jpg"
];

const projects = [{
  title: "Mangrove Project - Borivali", 
  desc: "Comprehensive aluminium solutions including facade systems, sliding windows, casement windows, and minimalist balcony railings for premium residential development.",
  badge: "Residential"
}];

const ProjectsSection = () => (
  <section id="projects" className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Featured Work</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Our Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            to="/projects/mangrove"
            className="block h-full hover:shadow-2xl transition-all duration-300 group/link"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl h-full bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={mangrovePhotos[0].replace('./', '/src/assets/')}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/20 to-black/40">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">4+ Photos</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.badge}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

