import { motion } from "framer-motion";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing excellence in aluminium fabrication across residential, commercial, and industrial spaces.
          </p>
        </motion.div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Luxury Residential", desc: "High-end aluminium windows", img: "project1.jpg" },
            { title: "Office Facade", desc: "Modern curtain wall system", img: "project2.jpg" },
            { title: "Industrial Partition", desc: "Heavy-duty aluminium partitions", img: "project3.jpg" },
            { title: "Commercial Space", desc: "Sliding glass doors & partitions", img: "project4.jpg" },
            { title: "Retail Storefront", desc: "Custom shopfront fabrication", img: "project5.jpg" },
            { title: "Hotel Lobby", desc: "Elegant feature railings", img: "project6.jpg" },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden bg-card shadow-lg group-hover:shadow-2xl transition-all duration-300 h-64 bg-gradient-to-br from-muted to-card flex items-end p-6">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ProjectsPage;

