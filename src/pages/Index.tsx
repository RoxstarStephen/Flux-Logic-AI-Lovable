import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import BentoGrid from "@/components/BentoGrid";
import LogicFlow from "@/components/LogicFlow";
import FAQSection from "@/components/FAQSection";
import FooterCapture from "@/components/FooterCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AuthorityStrip />
      <BentoGrid />
      <LogicFlow />
      <FAQSection />
      <FooterCapture />
    </div>
  );
};

export default Index;
