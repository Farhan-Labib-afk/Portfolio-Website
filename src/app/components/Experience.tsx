import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

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
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="bg-[var(--bg-primary)] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-10 max-w-3xl">
            <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl">
              Production-minded work on shipped software.
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.duration}`}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] md:p-8"
              >
                <div className="border-l-2 border-[var(--accent)] pl-5">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                        Current Role
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                        {exp.position}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                        <Briefcase className="size-4 text-[var(--accent)]" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-sm text-[var(--text-muted)] lg:justify-end">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2">
                        <Calendar className="size-4" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2">
                        <MapPin className="size-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 max-w-4xl text-base leading-7 text-[var(--text-muted)]">
                    {exp.description}
                  </p>

                  <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
