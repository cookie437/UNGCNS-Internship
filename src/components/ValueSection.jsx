import { FaBullhorn } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

export const ValueSection = () => {
  return (
    <section id="value" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-6xl space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Value</span> I Contributed
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            During my internship with{" "}
            <span className="font-medium">
              UN Global Compact Network Singapore (UNGCNS)
            </span>
            , I strengthened the organisation’s{" "}
            <span className="font-medium">digital presence</span>,{" "}
            <span className="font-medium">global outreach</span>, and{" "}
            <span className="font-medium">operational efficiency</span>. My work
            spanned integrated digital marketing, international stakeholder
            engagement, executive communication, and backend system
            optimisation, directly contributing to visibility, engagement, and
            scalability.
          </p>
        </div>

        {/* Contribution Showcase */}
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Digital Communications */}
          <div className="text-start flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <FaBullhorn className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Strengthening Digital Communications
              </h3>
              <p className="text-muted-foreground text-sm">
                Managed UNGCNS’{" "}
                <span className="font-medium">
                  LinkedIn (11,000+ followers)
                </span>
                and{" "}
                <span className="font-medium">
                  Mailchimp (8,000+ subscribers)
                </span>
                , developing structured content calendars, drafting marketing
                copy, and conducting monthly engagement audits. Produced more
                than 50 SDG-aligned observance visuals and supported our main
                flagship campaigns such as the{" "}
                <span className="font-medium">18th UNGCNS Summit</span> and{" "}
                <span className="font-medium">Apex Awards</span>, ensuring
                consistent brand positioning across platforms.
              </p>
            </div>
          </div>

          {/* Global Outreach & Lead Generation */}
          <div className="text-start md:text-end flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <MdEventAvailable className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Expanding Global Outreach & Lead Pipelines
              </h3>
              <p className="text-muted-foreground text-sm">
                Independently leveraged{" "}
                <span className="font-medium">LinkedIn Sales Navigator </span>
                and <span className="font-medium">Prospeo</span> to generate
                approximately{" "}
                <span className="font-medium">
                  300 qualified B2B leads per month
                </span>
                , strengthening membership acquisition pipelines. Conducted
                international outreach to UN Global Compact networks across Asia
                and engaged with other UN stakeholders including{" "}
                <span className="font-medium">UNDP</span>, positioning the Apex
                Awards as a cross-border sustainability platform.
              </p>
            </div>
          </div>

          {/* Systems & Executive Communication */}
          <div className="text-start flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 p-5 rounded-full bg-primary/10">
              <RiTeamLine className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Driving Systems Efficiency & Executive Messaging
              </h3>
              <p className="text-muted-foreground text-sm">
                Implemented{" "}
                <span className="font-medium">WP Mail SMTP automation </span>
                to streamline internal enquiry routing, improving accountability
                across departments. Self-learnt{" "}
                <span className="font-medium">
                  WordPress, Elementor, and HTML coding
                </span>
                to manage three organisational websites independently.
                Spearheaded scripting for the{" "}
                <span className="font-medium">
                  UNGCNS Stickerbook initiative
                </span>
                , shaping executive communication for a pioneering
                sustainability learning platform.
              </p>
            </div>
          </div>
        </div>

        {/* Future Improvements for UNGCNS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
            Future Opportunities for{" "}
            <span className="text-primary">UNGCNS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Automate Lead Nurturing
              </h4>
              <p>
                Implement structured{" "}
                <strong>automated follow-up sequences</strong> for B2B leads to
                improve conversion rates and reduce manual outreach workload.
              </p>
            </div>

            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Strengthen Data Dashboards
              </h4>
              <p>
                Develop consolidated{" "}
                <strong>real-time campaign dashboards</strong> integrating
                LinkedIn, Mailchimp, and website analytics to enhance
                data-driven decision-making.
              </p>
            </div>

            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Deepen Regional Partnerships
              </h4>
              <p>
                Expand structured collaboration frameworks with{" "}
                <strong>regional UN Global Compact networks</strong> to scale
                cross-border campaign participation and sustainability advocacy.
              </p>
            </div>
          </div>
        </div>

        {/* Future Improvements for Myself */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
            Future Growth for <span className="text-primary">Myself</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Deepen my skills in Data Analytics
              </h4>
              <p>
                Deepen expertise in <strong>marketing analytics</strong> and
                <strong> conversion optimisation</strong> to quantify impact
                more precisely and strengthen strategic recommendations.{" "}
                <br></br>
                <br></br>For example, this includes analysing click‑through rate
                (CTR) data, performing A/B testing, and evaluating ad
                performance to determine which advertisements drive higher
                <strong> engagement and Return on Investment (ROI)</strong>.
              </p>
            </div>

            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Executive Storytelling
              </h4>
              <p>
                Continue refining <strong>high-level narrative framing</strong>
                to translate complex sustainability principles into compelling,
                action-oriented messaging. <br></br>
                <br></br>For example, I can craft executive talking points or
                keynote narratives that{" "}
                <strong>
                  link sustainability outcomes to their measurable business
                  value
                </strong>
                , inspiring both internal teams and external partners to take
                meaningful action.
              </p>
            </div>

            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Automation & Systems Thinking
              </h4>
              <p>
                Explore more <strong>workflow automation tools</strong>
                and CRM integrations to design scalable communication systems.
                <br></br>
                <br></br>
                For example, I can experiment more with Robotic Process
                Automation (RPA) to{" "}
                <strong>
                  automatically extract lead data from platforms like LinkedIn
                  and sync them with the CRM
                </strong>
                , streamlining outreach processes and reducing manual effort
                while improving efficiency and accuracy.
              </p>
            </div>

            <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                Global Leadership Exposure
              </h4>
              <p>
                Seek deeper involvement in{" "}
                <strong>regional sustainability forums</strong>
                to continue growing in cross-cultural collaboration and
                strategic engagement. <br></br>
                <br></br>By leveraging the United Nations, a global platform, I
                aim to{" "}
                <strong>
                  strengthen my ability to network with international
                  professionals
                </strong>
                , learn from diverse leadership approaches, and articulate
                sustainability insights that resonate across cultural and
                organizational contexts, positioning myself as an emerging{" "}
                <strong>leader in the global sustainability movement</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
