export const ReflectionsSection = () => {
  return (
    <section id="reflections" className="py-24 px-6 bg-background relative">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Personal <span className="text-primary">Reflections</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This internship at the{" "}
            <strong>United Nations Global Compact Singapore </strong>
            was a defining growth experience for me. I entered focused on
            executing tasks correctly, but over time, I shifted towards thinking
            strategically, asking how communication could drive{" "}
            <strong>measurable engagement</strong>, strengthen{" "}
            <strong>global partnerships</strong>, and improve
            <strong> organisational systems</strong>.
          </p>
        </div>

        {/* Reflection Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-muted-foreground">
          <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              From Execution to Strategy...
            </h3>
            <p>
              Managing LinkedIn (11,000+ followers), Mailchimp campaigns, Apex
              Awards outreach and website systems taught me to move beyond task
              completion.<br></br>
              <br></br>I began analysing <strong>best posting times</strong>,
              refining <strong>engagement metrics</strong>, building structured
              Trello (Content Calendar) workflows, and value-added by improving
              backend automation through
              <strong> WP Mail SMTP integration</strong>. I learnt that I can
              create huge impact when communication is supported by efficient
              systems.
            </p>
          </div>

          <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Gaining Global Exposure & Professional <br></br>Maturity
            </h3>
            <p>
              Engaging with UN Global Compact networks across Indonesia, Japan,
              Korea, Pakistan, Malaysia and Brunei etc., and communicating with
              <strong> external UN organisations</strong> such as UNDP and
              UNICEF , strengthened my cross-cultural communication skills.{" "}
              <br></br>
              <br></br> I learnt to be more
              <strong> concise</strong>, <strong>structured</strong>, and
              <strong> proactive</strong> in stakeholder engagement. This
              exposure shifted my perspective from local operations to
              understanding how my work contributes to a
              <strong> global sustainability ecosystem</strong>.
            </p>
          </div>

          <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Adaptability & Independent Learning
            </h3>
            <p>
              Whether it was re-learning <strong>Prospeo</strong> after a
              platform overhaul, mastering{" "}
              <strong>LinkedIn Sales Navigator</strong>, self-learning{" "}
              <strong>WordPress and basic HTML coding</strong>, or scripting for
              senior executives in the <strong>Stickerbook initiative</strong>,
              I developed the ability to learn independently under pressure,
              with minimal handholding from my colleagues. <br></br>
              <br></br>I became more resilient and solutions-oriented, viewing
              challenges as opportunities to expand my technical and strategic
              skill set.
            </p>
          </div>

          <div className="bg-card/70 p-6 rounded-2xl border border-border shadow">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              People Management & Resilience
            </h3>
            <p>
              Managing multiple campaigns concurrently taught me the importance
              of <strong>prioritisation</strong> and managing expectations. I
              gained exposure and learnt how to communicate upwards (with senior
              stakeholders), and provide structured progress updates. <br></br>
              <br></br> I became more{" "}
              <strong>intentional about setting boundaries</strong>, seeking
              clarity early, and framing updates around shared objectives. This
              strengthened my <strong>emotional resilience</strong> and
              professional composure in high-paced environments. I now
              understand that effective collaboration requires not only
              technical capability, but also <strong>clarity</strong>,
              <strong> interpersonal awareness</strong>, and
              <strong> discipline in communication</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
