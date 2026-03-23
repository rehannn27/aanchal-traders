import { motion } from "framer-motion";
import aws17 from "@/assets/aws17.png";
import aws20 from "@/assets/aws20.png";
import aws25 from "@/assets/aws25.png";
import aws30 from "@/assets/aws30.png";
import acs45 from "@/assets/acs45.png";
import acs52 from "@/assets/acs52.png";
import abd75 from "@/assets/abd75.png";

interface Product {
  name: string;
  desc: string;
  image: string;
}

const minimalSeries: Product[] = [
  { name: "AWS 17 Minimal", desc: "A sleek and space-efficient sliding system designed for clean aesthetics and smooth functionality.", image: aws17 },
  { name: "AWS 20 Minimal", desc: "Enhanced durability with a minimal profile. A perfect balance of elegance and performance.", image: aws20 },
  { name: "AWS 25 Minimal", desc: "Robust slim-profile system offering stability and premium finishing for larger openings.", image: aws25 },
  { name: "AWS 30 Minimal", desc: "Designed for large architectural spaces with superior strength and refined detailing.", image: aws30 },
];

const casementSeries: Product[] = [
  { name: "ACS 45 Casement", desc: "Reliable solution for ventilation, security, and durability.", image: acs45 },
  { name: "ACS 52 Casement", desc: "Stronger frame with improved insulation performance.", image: acs52 },
  { name: "ABD 75 Biofold", desc: "Versatile bi-fold system connecting indoor and outdoor spaces seamlessly.", image: abd75 },
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Our Products</h2>
      </motion.div>

      {/* Minimal Series */}
      <div className="mb-14">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Minimal Window Series
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {minimalSeries.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>

      {/* Casement Series */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Casement Series
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {casementSeries.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
