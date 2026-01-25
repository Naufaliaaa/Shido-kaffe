import SequenceScroll from "@/components/canvas/SequenceScroll";
import AboutSection from "@/components/ui/AboutSection";
import BentoGrid from "@/components/ui/BentoGrid";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="relative">
      <SequenceScroll />
      <div className="-mt-[100vh] relative z-10 bg-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <AboutSection />
          <BentoGrid />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
