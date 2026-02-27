import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DocumentationSection from "@/components/DocumentationSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DocumentationSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
};

export default Index;
