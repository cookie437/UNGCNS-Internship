import { FaSun, FaClock, FaCloudSun, FaCompass } from "react-icons/fa";

export const DayInMyLifeSection = () => {
  return (
    <section id="day-in-my-life" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-5xl space-y-20">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Day In My Life at <span className="text-primary">UNGCNS</span>
          </h2>

          {/* Video Wrapper */}
          <div className="w-full h-[80vh] md:h-[70vh] rounded-xl shadow-md bg-black overflow-hidden">
            <video
              className="w-full h-full object-contain"
              autoPlay
              muted
              playsInline
              controls
            >
              <source src="/DayInMyLifeVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Every day blends strategy, execution, and continuous learning. From
          campaign analytics to global stakeholder coordination, my role sits at
          the intersection of digital communication, sustainability advocacy,
          and operational optimisation.
        </p>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Morning */}
          <div className="text-start flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <FaSun className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Morning</h3>
              <p className="text-muted-foreground text-sm">
                A typical morning begins with reviewing campaign dashboards. I
                check LinkedIn engagement, Mailchimp open rates, and website
                traffic. Data guides every decision, whether adjusting copy
                tone, optimising posting times, or refining subject lines. This
                ensures communication remains strategic and measurable.
              </p>
            </div>
          </div>

          {/* Midday */}
          <div className="text-start md:text-end flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <FaClock className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Midday</h3>
              <p className="text-muted-foreground text-sm">
                Midday focuses on coordination and campaign execution. I
                collaborate with the Partnerships team, external partners, and
                regional UN Global Compact networks. I draft LinkedIn posts,
                prepare EDMs, design SDG-aligned visuals, and maintain brand
                consistency. During flagship campaigns such as the Apex Awards,
                emphasis shifts towards outreach strategy, lead tracking, and
                performance monitoring.
              </p>
            </div>
          </div>

          {/* Afternoon */}
          <div className="text-start flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <FaCloudSun className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Afternoon</h3>
              <p className="text-muted-foreground text-sm">
                Afternoons often involve website management and systems
                optimisation. I update event pages, embed media, manage
                WordPress backend configurations, and troubleshoot technical
                issues independently. When required, I coordinate with external
                developers to ensure smooth implementation. This autonomy
                strengthened my self-directed and solution-oriented approach.
              </p>
            </div>
          </div>

          {/* Always */}
          <div className="text-start md:text-end flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <FaCompass className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Always</h3>
              <p className="text-muted-foreground text-sm">
                Beyond daily tasks, what defines my internship is strategic
                thinking. I consistently reflect on how campaigns can reach
                further, how processes can become more efficient, and how
                communication can drive measurable engagement. This mindset
                transformed my experience from simple task execution into
                purposeful impact creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
