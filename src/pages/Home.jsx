import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { UNGCNSSection } from "../components/UNGCNSSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <UNGCNSSection />
        <AboutSection />
        <SkillsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
