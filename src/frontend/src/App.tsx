import AboutSection from "./components/AboutSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyUsSection from "./components/WhyUsSection";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <AboutSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
