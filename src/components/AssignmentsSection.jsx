import { useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

/** ====== DATA ====== */
const assignments = [
  {
    id: "a1",
    title: "Assignment 1 — UNGCNS Websites Management",
    date: "Dec 2025 - Feb 2026",
    course: "Internship — UNGCNS",
    tags: [
      "Website Management",
      "WordPress",
      "Elementor",
      "Coding",
      "Process Improvement",
    ],
    summary:
      "I managed and optimised three organisational websites independently, self-learning WordPress, Elementor, and backend configurations to improve content management, user experience, and internal workflow efficiency.",

    images: [
      "/assignments/a2/picture-1.jpg",
      "/assignments/a2/picture-2.jpg",
      "/assignments/a2/picture-3.jpg",
      "/assignments/a2/picture-4.jpg",
    ],

    details: {
      taskDescription:
        "I was responsible for managing and updating three different websites under UNGCNS after the full-time staff overseeing them left shortly after I joined. This included maintaining <strong>event pages</strong>, <strong>member resources</strong>, and <strong>programme information</strong>, ensuring all content remained accurate, updated, and user-friendly.",

      myActions:
        "To deliver my responsibilities, I <strong>self-learnt WordPress</strong>, <strong>Elementor</strong>, and basic <strong>HTML</strong> for backend adjustments. To me, the learning curve was very steep. I spent significant time troubleshooting issues, watching tutorials, testing configurations, and understanding the site architecture myself, because the full-timer had left the organisation shortly after I joined.<br><br>I independently updated event pages, embedded media, structured resource repositories, and coordinated technical changes with external agencies such as <strong>Genuus (a website agency from India)</strong>, who supported our website management. Additionally, I <strong>value-added</strong> by implementing <strong>WP Mail SMTP integration</strong> to automate email routing of backend enquiries to the relevant departments (e.g., Events or Membership teams), replacing the previous manual forwarding process.",

      learningAndApplication:
        "This assignment strengthened my <strong>technical adaptability</strong> and <strong>problem-solving skills</strong>, as I had to navigate unfamiliar systems without step-by-step guidance. I applied concepts from <strong>Digital Commerce</strong> and <strong>Artificial Intelligence & Robotics</strong>, particularly in understanding <strong>digital user journeys</strong>, <strong>content structure</strong>, and backend process optimisation through simple coding.<br><br>Through managing form routing and email automation, I also contributed to UNGCNS' <strong>workflow efficiency</strong>, and <strong>cross-department coordination</strong> within a digital platform environment.",

      reflectionAndImpact:
        "This was a turning point in my internship, as it pushed me to become more <strong>independent and solution-oriented</strong>. Instead of waiting for instructions, I learnt how to <strong>proactively find solutions</strong> and take ownership of technical systems</strong>.<br><br>The implementation of automated email routing improved coordination and accountability not only within the MarComms team, but also across the entire organisation! <strong>Managing multiple websites independently</strong> gave me greater confidence in handling digital platforms and strengthened my understanding of how <strong>backend systems</strong> directly shape <strong>user experience and organisational efficiency</strong>.",
    },
  },
  {
    id: "a2",
    title: "Assignment 2 — Social Media Outreach (Digital Communications)",
    date: "Dec 2025 - Feb 2026",
    course: "Internship — UNGCNS",
    tags: [
      "Social Media",
      "Email Marketing",
      "Digital Strategy",
      "Auditing",
      "Data Analytics",
    ],

    summary:
      "Managed United Nations Global Compact Singapore's LinkedIn page (11,000+ followers), Mailchimp email marketing (~8,000 recipients), YouTube channel (~200 subscribers), and supported Google Advertisements planning. Executed structured digital campaigns, and conducted Monthly Performance Audits.",

    images: [
      "/assignments/a2/picture-1.jpg",
      "/assignments/a2/picture-2.jpg",
      "/assignments/a2/picture-3.jpg",
      "/assignments/a2/picture-4.jpg",
    ],

    details: {
      taskDescription:
        "I was responsible for managing and executing UNGCNS’ <strong>LinkedIn page (11,000+ followers)</strong>, <strong>Mailchimp email marketing campaigns (8,000 recipients)</strong>, <strong>YouTube channel management</strong> (posting and playlist creation), and supporting <strong>Google advertisement campaign planning</strong>. My role focused on strengthening digital outreach, improving engagement, and ensuring consistent brand communication across platforms.",

      myActions:
        "I developed a structured <strong>content calendar in Trello</strong>, outlining scheduled LinkedIn posts and EDMs for the month to ensure alignment with campaigns and organisational priorities.<br><br>I supported multiple campaigns, such as the <strong>SGX webinar</strong>, <strong>SLR-UNGCNS Launch of the TNFD Reporting Executive Guide</strong> etc., and partner announcements, through coordinated LinkedIn posts and EDMs. For both LinkedIn and Mailchimp, <strong>I drafted the marketing copy</strong> independently, submitted it for approval, and executed the postings.<br><br>After each campaign, I conducted <strong>monthly audits</strong>, tracking performance metrics such as engagement rates, likes, and link click-through rates from EDMs. These audits supported <strong>performance monitoring, reporting</strong>, and <strong>continuous improvement</strong> of outreach strategies.",

      learningAndApplication:
        "This assignment allowed me to directly apply concepts from my <strong>Digital Transformation and Marketing Strategy (DTMS)</strong> module.<br><br>Leveraging prior experience with Mailchimp through <strong>Traffic Bees</strong>' lectures and the prior project I did with <strong>Clean and Real Foods</strong> for DTMS, I could confidently create <strong>Marketing Content Calendar</strong> on Trello and Design Email Templates on Mailchimp, applying <strong>audience segmentation strategies</strong>, and executed campaigns efficiently; despite it being my first time managing a live database of 8,000 subscribers.<br><br>My familiarity with Mailchimp layouts and Digital Marketing frameworks enabled me to contribute with minimal supervision. I applied principles of <strong>content positioning</strong>, <strong>engagement optimisation</strong>, and <strong>data-driven decision-making</strong> to enhance campaign effectiveness!",

      reflectionAndImpact:
        "This experience strengthened my confidence in managing large-scale digital communications independently. Handling a professional LinkedIn audience of over 11,000 followers and executing EDM campaigns for 8,000 recipients required precision, professionalism, and accountability.<br><br>Through structured planning, cross-platform coordination, and performance auditing, I contributed to improving <strong>outreach consistency and campaign effectiveness</strong>. This assignment reinforced my understanding of how digital platforms, analytics, and strategic content creation work together to drive <strong>organisational visibility</strong> and <strong>stakeholder engagement</strong>.",
    },
  },
  {
    id: "a3",
    title: "Assignment 3 — Canva Visuals Creation",
    date: "Dec 2025 - Feb 2026",
    course: "Internship — UNGCNS",
    tags: ["Design", "Brand Communications", "Visual Strategy"],

    summary:
      "Designed over 30+ observance day visuals, major event creatives, and flagship web banners, ensuring SDG alignment, brand consistency, and cross-platform optimisation across LinkedIn, Mailchimp, and organisational websites.",

    images: [
      "/assignments/a3/picture-1.jpg",
      "/assignments/a3/picture-2.jpg",
      "/assignments/a3/picture-3.jpg",
      "/assignments/a3/picture-4.jpg",
    ],

    details: {
      taskDescription:
        "I was responsible for <strong>conceptualising and designing</strong> a wide range of visual assets using <strong>Canva</strong> to support UNGCNS’ digital communications strategy. These visuals were deployed across <strong>LinkedIn</strong>, <strong>Mailchimp EDMs</strong>, and UNGCNS’ websites under “Upcoming Events”. My role required balancing creativity with corporate messaging, brand alignment, and stakeholder expectations.",

      myActions:
        "I created over <strong>30+ Observance Day visuals</strong>, including Christmas, Chinese New Year, Hari Raya, World Water Day, International Day of Forests, and International Day of Education. For each visual, I crafted the accompanying copy and ensured alignment with relevant <strong>UN Sustainable Development Goals (SDGs)</strong>, such as <strong>Quality Education</strong> and <strong>Sustainable Cities and Communities</strong>.<br><br>In addition, I designed <strong>event visuals</strong> for campaigns such as the Virtual Open House, the SLR-UNGCNS Launch of the TNFD Reporting Executive Guide, the 30 Pioneers for 2030 initiative, and more. These visuals were optimised for cross-platform distribution and amplified across all our digital channels.<br><br>I also produced <strong>Web Banner visuals</strong> for two flagship events — the <strong>18th UNGCNS Summit</strong> and the <strong>Apex Awards</strong> — ensuring precise sizing specifications for website integration while maintaining visual impact and brand coherence.",

      learningAndApplication:
        "Through this assignment, I deepened my understanding of <strong>strategic brand communications</strong>. Every visual required <strong>coordination with internal stakeholders</strong>, adherence to <strong>brand tone and colour palette</strong>, and navigation of structured <strong>approval processes</strong>.<br><br>I applied principles of <strong>visual hierarchy</strong>, <strong>message clarity</strong>, and <strong>audience positioning</strong> learnt in UCDB (Year 1) and DCOM (Year 3), to ensure that each design was both aesthetic and purpose-driven. I also took initiative to integrate SDG messaging intentionally into all our Observance Days content, strengthening thematic consistency between <strong>global sustainability narratives</strong> and <strong>UNGCNS’ organisational identity.</strong>",

      reflectionAndImpact:
        "This assignment sharpened my appreciation for the discipline behind <strong>effective communications</strong>. Consistency is not accidental — it is engineered through alignment, structured processes, and attention to detail. Managing multiple visual outputs simultaneously required forward planning and stakeholder coordination, while I ensured highest standards of quality and consistency in my visuals.<br><br>Beyond producing creatives, I contributed to reinforcing <strong>UNGCNS’ digital brand identity</strong>. By ensuring SDG alignment and maintaining a consistent visual language across platforms, I helped <strong>strengthen organisational credibility and message coherence</strong>. My work supported <strong>sustained engagement with members and partners</strong> while elevating the professionalism of external communications.<br><br>Most importantly, this experience strengthened my <strong>project management capability</strong>. I learnt to <strong>manage competing deadlines</strong>, and coordinate approvals across departments, while balancing my own creative autonomy. The value I added extended beyond design; it enhanced brand consistency, improved campaign readiness, and contributed to a <strong>more structured and strategic communications ecosystem</strong> within UNGCNS. :)",
    },
  },
  {
    id: "a4",
    title: "Assignment 4 — Enhancing UNGCNS' Visibility: Lead Generation",
    date: "Dec 2025 - Feb 2026",
    course: "Internship — UNGCNS",
    tags: ["Lead Generation", "Sales Navigator", "B2B Strategy", "Prospeo"],

    summary:
      "Independently leveraged LinkedIn Sales Navigator and Prospeo to generate ~300 qualified B2B leads monthly, strengthening UNGCNS’ outreach pipeline and contributing to measurable network expansion.",

    images: [
      "/assignments/a4/picture-1.jpg",
      "/assignments/a4/picture-2.jpg",
      "/assignments/a4/picture-3.jpg",
      "/assignments/a4/picture-4.jpg",
    ],

    details: {
      taskDescription:
        "I was tasked with supporting the expansion of UNGCNS by identifying and engaging potential Members and Partners. My task was to generate qualified leads that would <strong>enhance organisational visibility</strong>, strengthen <strong>partnership pipelines</strong>, and contribute to <strong>UNGCNS' long-term growth</strong>.",

      myActions:
        "I independently learnt and applied <strong>LinkedIn Sales Navigator</strong>, an AI-powered B2B sales intelligence platform with over 50 advanced filters for precise targeting by industry, company size, job title, and seniority level. I utilised real-time insights such as job transitions and company growth indicators to refine targeting strategies and personalise outreach.<br><br>To complement this, I implemented <strong>Prospeo</strong>, a B2B lead generation and data enrichment tool, to extract verified professional emails and mobile numbers. I enabled the Chrome extension to efficiently extract <strong>contact data</strong> directly from LinkedIn profiles and company websites.<br><br>Through a structured and systematic workflow, I consistently generated approximately <strong>300+ qualified leads per month</strong>, building a <strong>reliable outreach database</strong> that contributed to UNGCNS’ broader mission of promoting <strong>corporate sustainability partnerships</strong>.",

      learningAndApplication:
        "This assignment significantly strengthened my understanding of <strong>digital sales intelligence</strong>, <strong>data-driven targeting</strong>, and <strong>B2B pipeline development</strong>. I learnt how advanced filtering, behavioural insights, and CRM-compatible workflows can transform prospecting from a manual activity into a scalable system.<br><br>When Prospeo transitioned to a <strong>new</strong> platform version in January 2026, I encountered operational disruption as the new platform was more complex and I initially did not know how to navigate it. I had to quickly <strong>re-learn the updated interface</strong> while <strong>maintaining performance targets</strong>. During this period, I <strong>proactively explored alternative tools</strong> such as Email Chaser, Bardeen, and Evaboot, and experimented with <strong>Robotic Process Automation (RPA)</strong> workflows to extract data more efficiently. This <strong>broadened my technical exposure</strong> and deepened my <strong>adaptability</strong> in navigating evolving digital ecosystems.<br><br>After mastering the updated Prospeo version and optimising my workflow, my lead generation efficiency improved, restoring process stability and confidence in execution.",

      reflectionAndImpact:
        "This assignment made me contribute directly to <strong>organisational growth</strong>. By generating a steady pipeline of ~300 qualified leads monthly, I strengthened UNGCNS’ <strong>outreach capacity</strong> and <strong>enhanced the scalability</strong> of its membership acquisition strategy.<br><br>More importantly, I learnt that digital tools alone do not drive impact — systems thinking does. I shifted from merely collecting contacts to <strong>building a structured, repeatable lead-generation engine</strong> aligned with strategic objectives. Overcoming platform disruptions reinforced my resilience and ability to sustain output under pressure.<br><br>The value I added was measurable. I <strong>improved prospecting consistency</strong>, reduced <strong>manual inefficiencies</strong>, and <strong>expanded visibility</strong> among potential corporate partners. Looking ahead, I aim to refine qualification criteria, implement automated follow-up sequences, and analyse conversion metrics to further <strong>optimise performance</strong>. This experience has equipped me with a growth-oriented mindset — one that views technology not just as a tool, but as a <strong>strategic multiplier for organisational expansion</strong>.",
    },
  },
  {
    id: "a5",
    title: "Assignment 5 — Expanding Global Reach: Apex Sustainability Awards",
    date: "Dec 2025 - Feb 2026",
    course: "Internship — UNGCNS",
    tags: ["Global Engagement", "Stakeholder Management", "Strategic Outreach"],

    summary:
      "Led strategic outreach and global engagement efforts for the Apex Awards, expanding international partner networks, driving registrations, and strengthening cross-border sustainability collaborations.",

    images: [
      "/assignments/a5/picture-1.jpg",
      "/assignments/a5/picture-2.jpg",
      "/assignments/a5/picture-3.jpg",
      "/assignments/a5/picture-4.jpg",
    ],

    details: {
      taskDescription:
        "I supported the <strong>Apex Awards</strong>, UNGCNS’ flagship sustainability recognition platform, by driving strategic outreach and registrations. My role focused on <strong>expanding visibility, strengthening partnerships, and increasing participation</strong> across both local and international networks aligned with the UN Global Compact’s principles.",

      myActions:
        "To strengthen outreach efforts, I proactively expanded our partner lists through strategic prospecting on <strong>LinkedIn</strong> and other digital platforms. I identified sustainability-focused organisations, senior decision-makers, and corporate representatives aligned with ESG and SDG commitments.<br><br>I collaborated closely with the <strong>Partnerships team</strong> to validate leads, cross-check existing databases, and re-engage past partners who had previously participated in UNGCNS initiatives (such as sourcing for our previous Outreach Partners for the 2025 Apex Awards). Additionally, I conducted <strong>independent research</strong> using company directories and official websites to compile verified contact points.<br><br>My engagement extended <strong>internationally</strong>, reaching out to UN Global Compact country networks in <strong>Indonesia, Japan, Korea, Pakistan, Malaysia, and Brunei</strong>. These conversations explored <strong>cross-country collaboration opportunities</strong> and encouraged member companies to participate in the 2026 Awards cycle. I also had the opportunity to communicate with representatives from the <strong>United Nations Development Programme (UNDP)</strong>, gaining insights into <strong>inter-agency collaboration</strong> in advancing the Sustainable Development Goals.<br><br>To support campaign execution, I developed customised <strong>partner toolkits and promotional collaterals</strong> for amplification. I monitored <strong>weekly campaign metrics</strong>, tracking registrations, engagement levels, and outreach performance to refine strategies dynamically.",

      learningAndApplication:
        "This assignment strengthened my understanding of <strong>global stakeholder engagement</strong>, <strong>cross-border communication</strong>, and <strong>relationship lifecycle management</strong>. I learnt that effective marketing is rooted not only in visibility but in credibility, trust-building, and consistent follow-up.<br><br><strong>Engaging international partners</strong> required <strong>cultural sensitivity, professionalism, and clarity</strong> of messaging. <br><br>I also applied data-driven monitoring techniques to assess campaign momentum and inform tactical adjustments, reinforcing the importance of measurable outreach strategies.",

      reflectionAndImpact:
        "This project demonstrated that meaningful organisational growth is built through strategic relationships rather than one-off campaigns. By systematically expanding outreach pipelines and reactivating dormant partnerships, I contributed to <strong>strengthening the Apex Awards’ global footprint</strong>.<br><br>I enhanced <strong>international visibility</strong> by initiating engagement with multiple UN Global Compact country networks, positioning the Apex Awards as a cross-border sustainability platform rather than a purely domestic initiative.</strong> At the same time, I also <strong>increased stakeholder confidence</strong> by developing structured partner toolkits and maintaining professional, data-informed communication, ensuring clarity and alignment in all outreach efforts.<br><br>I contributed to measurable <strong>campaign momentum</strong> through <strong>weekly monitoring</strong> of registration metrics, enabling agile refinements to outreach strategy and improving accountability within the team.<br><br>Most importantly, I <strong>represented UNGCNS on an international stage</strong>, bridging <strong>conversations between global networks</strong> and reinforcing the organisation’s role in mobilising responsible business action toward the <strong>Sustainable Development Goals.</strong><br><br>This experience reshaped my perspective on marketing and engagement. It taught me that influence is amplified through sustained <strong>relationship-building</strong> and strategic <strong>coordination between global organisations</strong>. Being <strong>entrusted</strong> with global outreach responsibilities <strong>strengthened my confidence, expanded my worldview, and deepened my commitment</strong> to advancing <strong>sustainability</strong> through collaborative, cross-border partnerships.",
    },
  },
  {
    id: "a6",
    title: "Assignment 6 — UNGCNS Stickerbook Shoot",
    date: "Dec 2025 - Feb 2026",
    course: "Internship — UNGCNS",
    tags: [
      "Content Development",
      "Executive Communication",
      "Digital Production",
    ],

    summary:
      "Supported the pilot launch of UNGCNS’ first interactive Stickerbook learning initiative by scripting executive videos, managing production coordination, and shaping the communication tone for a sustainability-focused digital certification platform.",

    images: [
      "/assignments/a6/picture-1.jpg",
      "/assignments/a6/picture-2.jpg",
      "/assignments/a6/picture-3.jpg",
      "/assignments/a6/picture-4.jpg",
    ],

    details: {
      taskDescription:
        "I supported the launch of the <strong>UNGCNS Stickerbook</strong>, a first-of-its-kind interactive learning initiative designed to help members embed sustainability practices through bite-sized video modules and activities leading to <strong>accredited certification</strong>. I was involved from the pilot stage, focusing on developing, refining, and managing the <strong>video scripting process</strong> for the CEO and directors.",

      myActions:
        "My primary responsibility was to <strong>craft</strong> professional yet engaging <strong>scripts</strong> that reflected UNGCNS’ <strong>vision, tone, and organisational credibility</strong>. This required balancing corporate wording with educational storytelling to ensure clarity and accessibility for diverse audiences.<br><br>I helped in the creation of the <strong>opening script</strong>, setting the tone for the entire Stickerbook series. I revised scripts multiple times to align messaging across departments while maintaining consistency in voice and delivery.<br><br>The filming process was conducted via <strong>'Riverside'</strong>, a professional web-based production platform. I gained hands-on exposure to technical elements such as <strong>camera framing, lighting, audio clarity, backdrop composition, teleprompter</strong> pacing, and overall <strong>visual consistency</strong>. I also coordinated with internal stakeholders to ensure scripts, delivery, and branding remained <strong>aligned</strong> under <strong>tight timelines</strong>.",

      learningAndApplication:
        "This assignment strengthened my capabilities in <strong>executive communication</strong>, <strong>educational content design</strong>, and <strong>digital media production</strong>. Writing for senior leadership required clarity, strategic alignment, and precision in language. I applied communication theory in a real-world sustainability context—translating abstract ESG principles into motivating and actionable narratives.<br><br>The production process also exposed me to how media quality directly influences audience perception and engagement.",

      reflectionAndImpact:
        "This project deepened my understanding that sustainability advocacy depends not only on policy, but on <strong>strategic narrative framing</strong> and <strong>compelling storytelling</strong>. Crafting scripts for senior executives strengthened my confidence in <strong>high-level stakeholder communication</strong> and sharpened my ability to balance <strong>credibility with accessibility</strong>.<br><br>Through spearheading the opening segment, I contributed to establishing the <strong>foundational tone and identity</strong> of the Stickerbook series, influencing how audiences would perceive the initiative from the very first interaction.<br><br>The technical production experience enhanced my appreciation for <strong>media professionalism</strong>, <strong>visual consistency</strong>, and <strong>audience psychology</strong>—factors that significantly shape engagement outcomes.<br><br>Most importantly, this assignment allowed me to contribute to a <strong>pioneering sustainability learning platform</strong>, strengthening UNGCNS’ capacity to deliver <strong>interactive, scalable education</strong>. It reinforced that impactful change is driven by the ability to translate complex sustainability frameworks into narratives that are clear, motivating, and action-oriented. The experience <strong>expanded my skill set</strong> beyond conventional marketing into the domain of strategic communication leadership.",
    },
  },
];

function AssignmentModal({ assignment, onClose }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  // pictures is safe even if assignment is null
  const pictures = assignment?.images || [];

  const nextPhoto = useCallback(
    () => setPhotoIndex((i) => (i + 1) % (pictures.length || 1)),
    [pictures.length],
  );

  const prevPhoto = useCallback(
    () =>
      setPhotoIndex(
        (i) => (i - 1 + (pictures.length || 1)) % (pictures.length || 1),
      ),
    [pictures.length],
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, nextPhoto, prevPhoto]);

  // ✅ guard comes AFTER hooks
  if (!assignment) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-labelledby="assignment-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Dialog */}
      <div
        className="text-start relative z-[101] w-[92vw] max-w-3xl max-h-[86vh] overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-5 border-b bg-card/90 backdrop-blur">
          <div>
            <h3 id="assignment-modal-title" className="text-xl font-semibold">
              {assignment.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {assignment.date}
              {assignment.course ? ` • ${assignment.course}` : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-lg px-3 py-1.5 text-sm border hover:bg-accent"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto max-h-[70vh] custom-scroll px-6 py-6 space-y-6 pb-24">
          {/* Carousel if images exist */}
          {pictures.length > 0 && (
            <div className="relative w-full overflow-hidden rounded-lg flex justify-center bg-black">
              <img
                src={pictures[photoIndex]}
                alt={`${assignment.title} photo ${photoIndex + 1}`}
                className="max-h-[70vh] w-auto object-contain transition-opacity duration-500"
              />

              {/* Full clickable zones */}
              {pictures.length > 1 && (
                <>
                  {/* Left half - previous */}
                  <div
                    className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
                    onClick={prevPhoto}
                  />

                  {/* Right half - next */}
                  <div
                    className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
                    onClick={nextPhoto}
                  />

                  {/* Optional visible arrows */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                  >
                    ›
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {pictures.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={() => setPhotoIndex(idx)}
                        className={`h-2.5 w-2.5 rounded-full cursor-pointer transition ${
                          idx === photoIndex
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {assignment.tags?.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Summary */}
          {assignment.summary && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {assignment.summary}
            </p>
          )}

          {/* Dynamic Details */}
          {assignment.details &&
            Object.entries(assignment.details).map(([key, value]) => (
              <DetailsSection
                key={key}
                title={formatKey(key)}
                items={Array.isArray(value) ? value : [String(value)]}
              />
            ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-10 p-5 border-t flex items-center justify-between bg-card/90 backdrop-blur">
          <span className="text-xs text-muted-foreground">
            Press <kbd className="px-1 py-0.5 border rounded">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}

/* Helper to format keys (e.g., "whatILearnt" -> "What I Learnt") */
function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

function DetailsSection({ title, items }) {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="space-y-2">
        {items.map((item, i) => (
          <p
            key={i}
            className="text-sm text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
    </div>
  );
}

DetailsSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/** ====== SECTION ====== */
export const AssignmentsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="assignments" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Assignments</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Academic assignments showcasing my applied skills and professional
          growth.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((as) => (
            <button
              key={as.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left border hover:shadow-md transition-shadow h-full flex flex-col"
              onClick={() => setSelected(as)}
              aria-label={`Open details for ${as.title}`}
            >
              {/* Image preview (first if available) */}
              {as.images?.length > 0 && (
                <div className="w-full h-64 flex items-center justify-center overflow-hidden bg-black">
                  <img
                    src={as.images[0]}
                    alt={as.title}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {as.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">{as.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {as.date}
                  {as.course ? ` • ${as.course}` : ""}
                </p>

                <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                  {as.summary}
                </p>

                {/* Footer pinned at bottom */}
                <div className="mt-auto flex items-center gap-2 text-primary pt-4">
                  <span className="text-sm font-medium">View details</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AssignmentModal
        assignment={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

AssignmentModal.propTypes = {
  assignment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    course: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.object, // dynamic
  }),
  onClose: PropTypes.func.isRequired,
};
