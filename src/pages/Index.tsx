import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SaasSection from "@/components/SaasSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
