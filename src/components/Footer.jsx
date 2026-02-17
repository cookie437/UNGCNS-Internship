import { ArrowUp } from "lucide-react";

const navItems = [
  { name: "Home", href: "/index" },
  { name: "Assignments", href: "/assignments" },
  { name: "Reflections", href: "/reflections" },
  { name: "Video", href: "/video" },
  { name: "Conclusion", href: "/conclusion" },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Copyright + scroll to top */}
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Clare Chan, All rights reserved.
          </p>
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
