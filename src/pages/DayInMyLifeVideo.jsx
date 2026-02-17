import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function DayInMyLifeVideo() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Page Header */}
      <header className="pt-24 pb-8">
        {" "}
        {/* add top padding to clear fixed navbar */}
        <h1 className="text-4xl font-bold">
          <span className="text-primary">A Day In My Life</span> Video
        </h1>
      </header>
      {/* Main Content */}
      <main>
        {/* video from public/DayInMyLifeVideo.mp4 */}
        <video
          className="w-1/4 max-w-3xl mx-auto"
          controls
          poster="/some‑poster.jpg" /* optional */
        >
          <source src="/DayInMyLifeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
