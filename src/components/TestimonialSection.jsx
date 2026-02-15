export const TestimonialSection = () => {
  return (
    <section id="testimonial" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Testimonial</span>
        </h2>

        <p className="text-muted-foreground text-center mb-8">
          This testimonial was written by my supervisor, Mr Neo Kwok Siang, at{" "}
          <span className="font-medium">FoodXervices</span>.
        </p>

        <div className="rounded-2xl border border-border bg-card/50 p-4">
          <img
            src="/FoodXervicesInternshipTestimonial-ClareChan.jpg"
            alt="Internship Testimonial"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
