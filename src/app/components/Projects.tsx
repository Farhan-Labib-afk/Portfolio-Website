import { useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { projects, type ProjectCategory } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal, type ProjectDetail } from "./ProjectModal";

const CATEGORY_ORDER: ProjectCategory[] = [
  "Product Engineering",
  "Machine Learning / AI",
  "Systems & Team Projects",
];
const FEATURED_FILTER = "Featured";
const ALL_FILTER = "All";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const prefersReducedMotion = useReducedMotion();
  const [selected, setSelected] = useState<ProjectDetail | null>(null);
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>(FEATURED_FILTER);

  const sortedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );
  }, []);

  const filterCounts = useMemo(() => {
    const counts = new Map<string, number>([
      [FEATURED_FILTER, sortedProjects.filter((project) => project.featured).length],
      [ALL_FILTER, sortedProjects.length],
    ]);
    CATEGORY_ORDER.forEach((category) => {
      counts.set(
        category,
        sortedProjects.filter((project) => project.category === category).length,
      );
    });
    return counts;
  }, [sortedProjects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === FEATURED_FILTER) {
      return sortedProjects.filter((project) => project.featured);
    }
    if (activeFilter === ALL_FILTER) return sortedProjects;
    return sortedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, sortedProjects]);

  const openProject = (project: ProjectDetail) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="bg-[var(--bg-secondary)] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl">
                Product, ML, and systems work with real implementation detail.
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] p-1.5 shadow-[0_10px_30px_rgba(17,19,22,0.05)]"
              aria-label="Project filters"
            >
              {[FEATURED_FILTER, ...CATEGORY_ORDER].map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`font-mono-ui rounded-full px-3.5 py-2 text-xs font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                      isActive
                        ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                    }`}
                    aria-pressed={isActive}
                  >
                    {category}
                    <span className="ml-2 opacity-70">{filterCounts.get(category)}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setActiveFilter(ALL_FILTER)}
                className={`font-mono-ui rounded-full px-3.5 py-2 text-xs font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  activeFilter === ALL_FILTER
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                }`}
                aria-pressed={activeFilter === ALL_FILTER}
              >
                See all
                <span className="ml-2 opacity-70">{filterCounts.get(ALL_FILTER)}</span>
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  category={project.category}
                  featured={project.featured}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  onClick={() => openProject(project)}
                />
              </motion.div>
            ))}
          </div>

          <ProjectModal project={selected} open={open} onClose={() => setOpen(false)} />
        </motion.div>
      </div>
    </section>
  );
}
