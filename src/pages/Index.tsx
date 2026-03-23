import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorsSection from "@/components/SectorsSection";
import ClientsSection from "@/components/ClientsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <VisionMission />
    <ProductsSection />
    <ProjectsSection />
    <SectorsSection />
    <ClientsSection />
    <LocationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
