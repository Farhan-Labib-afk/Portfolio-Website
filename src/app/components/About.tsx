import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Compass, GraduationCap, Heart } from "lucide-react";

const attributes = [
  {
    title: "Academic Background",
    icon: GraduationCap,
    copy: "Computer Science major at University of Calgary (Class of 2027). Relevant coursework: Data Structure & Algorithms, Database Management Systems, Computer Network, Software Project Management.",
  },
  {
    title: "Hobbies",
    icon: Compass,
    copy: "Outside of coding, I enjoy motorcycling through the mountains, playing and watching soccer, and swimming.",
  },
  {
    title: "What Drives Me",
    icon: Heart,
    copy: "I like making projects that solve real problems.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[var(--bg-secondary)] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              About
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl">
              Practical software work with a product and ML lens.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
              I am a Computer Science student focused on building clear, reliable
              projects across full-stack product engineering, applied machine
              learning, and team-based systems.
            </p>
          </div>

          <div className="space-y-4">
            {attributes.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_14px_38px_rgba(17,19,22,0.06)]"
                >
                  <div className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                        {item.copy}
                      </p>
                    </div>
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
