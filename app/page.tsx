import HeroSection from "@/components/HeroSection";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import WhyNexora from "@/components/sections/WhyNexora";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ background: '#ffffff' }}>
      <HeroSection />
      <ImpactNumbers />
      <Features />
      <Pricing />
      <WhyNexora />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
