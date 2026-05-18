import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Brain, Code2, Database, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "Java", "JavaScript", "C#", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend / Data",
    icon: Database,
    skills: [
      "Flask",
      ".NET 8",
      "EF Core",
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
    skills: ["PyTorch", "scikit-learn", "pandas", "NumPy"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "PowerBI", "Jira", "Clickup", "Streamlit"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="bg-[var(--bg-primary)] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-10 max-w-3xl">
            <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl">
              A focused stack for full-stack builds, ML workflows, and team delivery.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                  className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_14px_38px_rgba(17,19,22,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
