import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Boxes,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { projects } from "../../data/projects";

const techStack = [
  "Python",
  "TypeScript",
  "React Native",
  "Next.js",
  "Flask",
  "Supabase",
  "PyTorch",
  "MySQL",
];

const countFor = (category: string) =>
  projects.filter((project) => project.category === category).length;

const systemRows = [
  {
    label: "Product Engineering",
    metric: `${countFor("Product Engineering")} projects`,
    detail: "mobile, web, auth",
    icon: Code2,
  },
  {
    label: "ML / AI",
    metric: `${countFor("Machine Learning / AI")} projects`,
    detail: "pipelines, evaluation",
    icon: BrainCircuit,
  },
  {
    label: "Systems Projects",
    metric: `${countFor("Systems & Team Projects")} projects`,
    detail: "simulation, DBMS",
    icon: Boxes,
  },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume/Farhan.Labib_Resume.pdf`, "_blank");
  };

  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-[var(--bg-primary)] px-4 pb-20 pt-32 sm:px-6 md:pt-36"
    >
      <div className="mx-auto grid min-h-[calc(92vh-9rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.72fr]">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-w-0 max-w-3xl"
        >
          <p className="font-mono-ui mb-5 text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Software Engineering / ML / Product
          </p>

          <div className="mb-5 flex items-center gap-2">
            <a
              href="https://github.com/Farhan-Labib-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-muted)] outline-none transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/farhan-labib-edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-muted)] outline-none transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="mailto:farhan.labib@ucalgary.ca"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--text-muted)] outline-none transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>

          <h1 className="max-w-4xl break-words text-4xl font-extrabold leading-[0.96] text-[var(--text-primary)] min-[420px]:text-5xl sm:text-6xl md:text-7xl">
            Farhan Labib
          </h1>

          <p className="mt-5 max-w-full text-base font-semibold leading-7 text-[var(--text-primary)] sm:text-xl">
            CS @UofCalgary | ML & Full-Stack Developer
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            I build production-style software, applied ML tooling, and team systems
            with clean interfaces and practical engineering depth.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="h-12 w-full rounded-full bg-[var(--text-primary)] px-6 text-[var(--bg-primary)] hover:bg-[var(--accent-strong)] focus-visible:ring-[var(--accent)] sm:w-auto"
            >
              View Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-full border-[var(--border-soft)] bg-[var(--surface)] px-6 text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)] sm:w-auto"
              onClick={openResume}
            >
              <FileText className="size-4" />
              Download Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 w-full rounded-full px-6 text-[var(--text-muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] sm:w-auto"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="mt-12"
          >
            <p className="font-mono-ui mb-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Tech Stack
            </p>
            <div className="flex max-w-full flex-wrap gap-2.5 overflow-hidden">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.22 + index * 0.04 }}
                  className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] shadow-[0_8px_24px_rgba(17,19,22,0.04)]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="hidden lg:block"
          aria-label="Portfolio focus areas"
        >
          <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border-soft)] pb-5">
              <div>
                <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Current Focus
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                  Building reliable product systems.
                </h2>
              </div>
              <span className="inline-flex size-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_15%,transparent)]" />
            </div>

            <div className="divide-y divide-[var(--border-soft)]">
              {systemRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="flex items-center gap-4 py-5">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent)]">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[var(--text-primary)]">{row.label}</p>
                      <p className="font-mono-ui mt-1 text-xs text-[var(--text-muted)]">
                        {row.detail}
                      </p>
                    </div>
                    <p className="font-mono-ui text-right text-xs font-medium text-[var(--text-primary)]">
                      {row.metric}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
              <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Availability
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-primary)]">
                Open to 4/8/12/16 month internships starting Summer 2026.
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
