import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2, ExternalLink, MapPin } from "lucide-react";

const experiences = [
  {
    company: "PepsiCo, Inc.",
    companyUrl: "https://www.pepsico.com/",
    position: "Supply Chain Analyst Intern",
    duration: "May 2026 - Present",
    status: "Current Role",
    description:
      "Supporting supply chain analytics work by turning SAP and operational data into clearer reporting, insights, and decision-support workflows.",
    responsibilities: [
      "Work with SAP and operational datasets to validate, organize, and analyze supply chain information for planning and reporting.",
      "Build dashboards and recurring reports with Power BI, Tableau, and Excel to support performance tracking and process visibility.",
      "Use Microsoft 365 tools to document insights, coordinate updates, and translate data findings into stakeholder-friendly summaries.",
    ],
    tags: ["Supply Chain", "SAP", "Power BI", "Tableau", "Excel", "Microsoft 365"],
  },
  {
    company: "The Gist Technologies Inc.",
    companyUrl: "https://apps.apple.com/ca/app/the-gist-summarized-news/id6471227626",
    position: "Software Developer",
    location: "Remote",
    duration: "Sept 2025 - Apr 2026",
    status: "Previous Role",
    description:
      "Contributed to the development and maintenance of The Gist - Summarized News, a production iOS app available on the Apple App Store, as part of a capstone industry partnership.",
    responsibilities: [
      "Implemented user-facing features and resolved bugs in a React Native + TypeScript + Expo codebase, improving reliability and overall UX.",
      "Supported Android pre-release testing by debugging platform-specific issues and validating builds in a test environment.",
      "Collaborated with stakeholders and teammates in an Agile workflow, participating in sprint planning, peer code reviews, and feature demos.",
      "Maintained and troubleshot backend functionality using Supabase (Auth + database) and external APIs, including backend configuration and data updates when required.",
      "Used GitHub-based workflows including feature branching, pull requests, and coordinated versioned releases.",
      "Wrote and maintained unit tests for shipped features to improve code quality and prevent regressions.",
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
              Software, data, and analytics experience across shipped products and operations.
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
                        {exp.status}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                        {exp.position}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-fit items-center gap-2 rounded-full text-sm font-semibold text-[var(--text-primary)] outline-none transition-colors hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface)]"
                        aria-label={`Open ${exp.company} website in a new tab`}
                      >
                        <Briefcase className="size-4 text-[var(--accent)]" />
                        {exp.company}
                        <ExternalLink className="size-3.5 text-[var(--accent)]" />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2 text-sm text-[var(--text-muted)] lg:justify-end">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2">
                        <Calendar className="size-4" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2">
                          <MapPin className="size-4" />
                          {exp.location}
                        </span>
                      )}
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
