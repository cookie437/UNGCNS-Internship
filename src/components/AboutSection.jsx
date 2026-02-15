import { FaLinkedin } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">My Internship</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Marketing & Communications Intern, UNGCNS <br />
              (Dec 2025 – Feb 2026)
            </h3>

            <p className="text-muted-foreground">
              Worked across digital communications, global outreach, website
              management and campaign operations at the
              <span className="font-medium">
                {" "}
                United Nations Global Compact Network Singapore
              </span>
              . Managed LinkedIn (11,000+ followers), Mailchimp (8,000+
              subscribers), supported the{" "}
              <span className="font-medium">Apex Awards</span>, contributed to
              the <span className="font-medium">Stickerbook initiative</span>,
              and generated qualified B2B pipelines through structured digital
              prospecting.
            </p>

            <div className="rounded-2xl border border-border p-5 bg-card/50">
              <h4 className="font-semibold mb-2">Key Highlights</h4>
              <ul className="text-start list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>
                  <span className="font-medium">Digital Scale:</span> Managed
                  LinkedIn (11K+) and Mailchimp (8K+) with structured audits and
                  analytics tracking.
                </li>
                <li>
                  <span className="font-medium">Lead Generation:</span>{" "}
                  Generated ~300 qualified B2B leads monthly via Sales Navigator
                  & Prospeo.
                </li>
                <li>
                  <span className="font-medium">Global Outreach:</span> Engaged
                  UN Global Compact networks across Asia and communicated with
                  various <strong>United Nations stakeholders</strong> (such as
                  UNDP and UNICEF).
                </li>
                <li>
                  <span className="font-medium">Executive Scripting:</span>{" "}
                  Spearheaded opening script for UNGCNS Stickerbook pilot.
                </li>
                <li>
                  <span className="font-medium">Systems Improvement:</span>{" "}
                  Implemented WP Mail SMTP automation and self-managed 3
                  WordPress sites.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Capability Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaLinkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Integrated Digital Communications
                  </h4>
                  <p className="text-muted-foreground">
                    Developed content calendars, drafted marketing copy,
                    designed more than 50 visuals, and conducted monthly
                    engagement audits to optimise LinkedIn and EDM performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MdEventAvailable className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Global Campaign & Outreach Strategy
                  </h4>
                  <p className="text-muted-foreground">
                    Expanded international participation for the Apex Awards
                    through structured prospecting, regional engagement, and
                    performance monitoring dashboards.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <RiTeamLine className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Systems & Executive Communication
                  </h4>
                  <p className="text-muted-foreground">
                    Managed backend website operations through basic coding,
                    automating enquiry workflows. Also developed executive
                    scripts for sustainability education initiatives,
                    strengthening both operational efficiency and strategic
                    messaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
