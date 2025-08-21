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
    <div className="min-h-screen bg-mystic-black text-mystic-white relative overflow-x-hidden">

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