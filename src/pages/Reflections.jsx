import { Navbar } from "../components/Navbar";
import { ValueSection } from "../components/ValueSection";
import { ReflectionsSection } from "../components/ReflectionsSection";
import { Footer } from "../components/Footer";

export const Reflections = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <ReflectionsSection />
        <ValueSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
