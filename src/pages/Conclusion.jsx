import { Navbar } from "../components/Navbar";
import { ConclusionSection } from "../components/ConclusionSection";
import { Footer } from "../components/Footer";

export const Conclusion = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <ConclusionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
