import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Server,
  Wrench,
  Layout,
  Database,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React Native",
      "Next.js", "HTML", "CSS", "Tailwind CSS",
    ],
  },
  {
    title: "Backend / Data",
    icon: Database,
    skills: [
      "Flask",
      "Supabase",
      "MySQL",
      "PostgreSQL",
      "RESTful APIs",
      "ETL Pipelines",
    ],
  },
  {
    title: "ML / Data Science",
    icon: Brain,
    skills: [
      "PyTorch",
      "scikit-learn",
      "pandas",
      "NumPy",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "PowerBI", "Jira", "Clickup", "Streamlit"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-950 rounded-xl p-6 border border-gray-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="mb-4 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
