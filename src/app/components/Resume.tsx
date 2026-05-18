import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();

  const openResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume/Farhan.Labib_Resume.pdf`, "_blank");
  };

  return (
    <section id="resume" className="bg-[var(--bg-secondary)] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex size-16 items-center justify-center rounded-[1.25rem] bg-[var(--surface-soft)] text-[var(--accent)]">
              <FileText className="size-7" />
            </div>

            <div>
              <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                Resume
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--text-primary)]">
                Farhan Labib - Resume
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)]">
                Available for 4-12 month roles starting Fall 2026 in data
                analytics, data science, supply chain analytics, backend
                development, or software engineering. Open to relocating anywhere
                in Canada.
              </p>
            </div>

            <Button
              size="lg"
              onClick={openResume}
              className="h-12 rounded-full bg-[var(--text-primary)] px-6 text-[var(--bg-primary)] hover:bg-[var(--accent-strong)] md:justify-self-end"
            >
              Open Resume
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
