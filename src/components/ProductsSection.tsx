import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import aws17 from "@/assets/17mm.jpeg";
import aws20 from "@/assets/20mm.jpeg";
import aws30 from "@/assets/30mm.jpeg";
import acs40 from "@/assets/40mm.jpeg";
import acs52 from "@/assets/52mm.jpeg";
import facade from "@/assets/facade.jpeg";
import railing from "@/assets/railing.jpeg";
import acp from "@/assets/acp.jpeg";
import aluminiumFrame from "@/assets/aluminum fence.jpeg";

interface Product {
  name: string;
  desc: string;
  image: string;
}

const minimalSeries: Product[] = [
  { name: "AWS 17 Minimal", desc: "A sleek and space-efficient sliding system designed for clean aesthetics and smooth functionality.", image: aws17 },
  { name: "AWS 20", desc: "Enhanced durability with a minimal profile. A perfect balance of elegance and performance.", image: aws20 },
  { name: "AWS 30", desc: "Designed for large architectural spaces with superior strength and refined detailing.", image: aws30 },
];

const casementSeries: Product[] = [
  { name: "ACS 40 Casement", desc: "Reliable solution for ventilation, security, and durability.", image: acs40 },
  { name: "ACS 52 Casement", desc: "Stronger frame with improved insulation performance.", image: acs52 },
];

const otherProducts: Product[] = [
  { name: "Facade", desc: "Premium facade systems for modern architectural designs.", image: facade },
  { name: "Railing", desc: "Elegant and durable balcony railing solutions.", image: railing },
  { name: "ACP", desc: "High-quality aluminium composite panels for interiors and exteriors.", image: acp },
  { name: "Aluminium Frame", desc: "High-quality aluminium frames for windows and doors.", image: aluminiumFrame },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card rounded-xl overflow-hidden card-shadow border border-border group"
  >
    <div className="aspect-[4/3] overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
    </div>
  </motion.div>
);

const ProductsSection = () => (
  <section id="products" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        subtitle="What We Offer"
        title="Our Products"
      />

      {/* Minimal Series */}
      <div className="mb-14">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Minimal Window Series
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {minimalSeries.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>

      {/* Casement Series */}
      <div className="mb-14">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Casement Series
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {casementSeries.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>

      {/* Other Products */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Speciality Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {otherProducts.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;

