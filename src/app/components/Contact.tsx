import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "farhan.labib@ucalgary.ca",
    href: "mailto:farhan.labib@ucalgary.ca",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/farhan-labib-afk",
    href: "https://github.com/Farhan-Labib-afk",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/farhan-labib-edu",
    href: "https://www.linkedin.com/in/farhan-labib-edu/",
    icon: Linkedin,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-[var(--bg-primary)] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        >
          <div className="min-w-0">
            <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl">
              Let's build something that ships.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
              I love collaborating on data analytics, applied ML, and
              product-focused software. Reach out for project collaboration,
              demos, or roles.
            </p>
          </div>

          <div className="min-w-0 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)]">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex min-w-0 items-center gap-4 rounded-[1.25rem] p-4 outline-none transition-colors hover:bg-[var(--surface-soft)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    index > 0 ? "mt-1" : ""
                  }`}
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent)] transition-colors group-hover:bg-[var(--surface)]">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {link.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-[var(--text-primary)]">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
