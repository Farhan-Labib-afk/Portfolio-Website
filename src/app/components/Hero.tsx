import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React Native", icon: "📱" },
  { name: "Next.js", icon: "⚡" },
  { name: "Flask", icon: "🌶️" },
  { name: "Supabase", icon: "🧩" },
  { name: "PyTorch", icon: "🔥" },
  { name: "MySQL", icon: "🐬" },
];

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="py-20 px-4 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <a
              href="https://github.com/Farhan-Labib-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/farhan-labib-edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:farhan.labib@ucalgary.ca"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Farhan Labib
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6">
            CS @UofCalgary | ML & Full-Stack Developer
          </p>

          

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800/60"
              onClick={() =>
                window.open(
                  `${import.meta.env.BASE_URL}resume/Farhan.Labib_Resume.pdf`,
                  "_blank"
                )
              }
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800/60"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>

          <div className="mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={scrollToProjects}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
