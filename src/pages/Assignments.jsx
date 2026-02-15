import { Navbar } from "../components/Navbar";
import { AssignmentsSection } from "../components/AssignmentsSection";
import { Footer } from "../components/Footer";

export const Assignments = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <AssignmentsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
