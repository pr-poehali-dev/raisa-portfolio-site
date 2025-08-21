import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactsSection from "@/components/ContactsSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mystic-dark via-mystic-dark/90 to-black text-white relative overflow-x-hidden">
      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-mystic-purple/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-mystic-accent/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-80 left-1/4 w-1.5 h-1.5 bg-mystic-purple/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-mystic-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-80 left-20 w-1 h-1 bg-mystic-purple/35 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <Navigation scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ReviewsSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;