import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "The Gist Technologies Inc.",
    position: "Software Developer",
    location: "Remote",
    duration: "Sept 2025 - Present",
    description:
      "Contribute to the development and maintenance of The Gist - Summarized News, a production iOS app available on the Apple App Store, as part of a capstone industry partnership.",
    responsibilities: [
      "Implement user-facing features and resolve bugs in a React Native + TypeScript + Expo codebase, improving reliability and overall UX.",
      "Support Android pre-release testing by debugging platform-specific issues and validating builds in a test environment.",
      "Collaborate with stakeholders and teammates in an Agile workflow, participating in sprint planning, peer code reviews, and feature demos.",
      "Maintain and troubleshoot backend functionality using Supabase (Auth + database) and external APIs, including making backend configuration and data updates when required.",
      "Use GitHub-based workflows including feature branching, pull requests, and coordinated versioned releases.",
      "Write and maintain unit tests for shipped features to improve code quality and prevent regressions.",
    ],
    tags: ["React Native", "TypeScript", "Expo", "Supabase"],
    color: "border-l-indigo-500",
  },
  
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.duration}`}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-slate-950 rounded-xl p-6 border-l-4 ${exp.color} hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="mb-4 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />

                <p className="text-gray-700 dark:text-gray-200 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

