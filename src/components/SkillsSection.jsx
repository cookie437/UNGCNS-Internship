import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaBullhorn,
  FaGlobeAsia,
  FaPeopleArrows,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineAnalytics, MdEventAvailable } from "react-icons/md";
import { RiTeamLine, RiDraftLine, RiCodeSSlashLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const skills = [
  // Digital Communications
  {
    name: "LinkedIn & EDM Campaign Management",
    category: "digital",
    icon: <FaBullhorn />,
  },
  {
    name: "Copywriting & SDG-Aligned Messaging",
    category: "digital",
    icon: <RiDraftLine />,
  },
  {
    name: "Content Calendars & Campaign Planning",
    category: "digital",
    icon: <MdEventAvailable />,
  },

  // Global & Stakeholder Engagement
  {
    name: "International Stakeholder Outreach",
    category: "engagement",
    icon: <FaGlobeAsia />,
  },
  {
    name: "Cross-Cultural Communication",
    category: "engagement",
    icon: <FaPeopleArrows />,
  },
  {
    name: "C-Suite & Executive Communication",
    category: "engagement",
    icon: <RiTeamLine />,
  },

  // Systems & Automation
  {
    name: "WordPress, Elementor & HTML",
    category: "systems",
    icon: <RiCodeSSlashLine />,
  },
  {
    name: "Workflow Automation (WP Mail SMTP)",
    category: "systems",
    icon: <TfiMicrosoftAlt />,
  },
  {
    name: "Lead Generation (Sales Navigator, Prospeo)",
    category: "systems",
    icon: <AiOutlineDatabase />,
  },

  // Analytics & Strategy
  {
    name: "Engagement Analytics & Reporting",
    category: "analytics",
    icon: <MdOutlineAnalytics />,
  },
  {
    name: "Data-Driven Campaign Optimisation",
    category: "analytics",
    icon: <MdOutlineAnalytics />,
  },

  // Teamwork & Professional Growth
  {
    name: "Cross-Team Collaboration",
    category: "professional",
    icon: <FaUsers />,
  },
  {
    name: "Managing Upwards & Expectation Alignment",
    category: "professional",
    icon: <FaUsers />,
  },
];

const categories = [
  "all",
  "digital",
  "engagement",
  "systems",
  "analytics",
  "professional",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  const groupedSkills =
    activeCategory === "all"
      ? categories
          .filter((c) => c !== "all")
          .reduce((acc, cat) => {
            acc[cat] = filteredSkills.filter((s) => s.category === cat);
            return acc;
          }, {})
      : {
          [activeCategory]: filteredSkills,
        };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> Skills</span> Developed at UNGCNS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold capitalize mb-4 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsInCategory.map((skill, key) => (
                <div
                  key={key}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
                >
                  <div className="text-2xl text-primary">{skill.icon}</div>
                  <h4 className="font-semibold text-lg">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
