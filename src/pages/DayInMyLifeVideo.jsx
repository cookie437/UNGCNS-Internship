import { Navbar } from "../components/Navbar";
import { DayInMyLifeSection } from "../components/DayInMyLifeSection";
import { Footer } from "../components/Footer";

export const DayInMyLife = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <DayInMyLifeSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
