import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal, type ProjectDetail } from "./ProjectModal";

const CATEGORY_ORDER: ProjectCategory[] = [
  "Product Engineering",
  "Machine Learning / AI",
  "Systems & Team Projects",
];
const ALL_FILTER = "All";

export function Projects() {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

  const sortedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }, []);

  const openProject = (project: ProjectDetail) => {
    setSelected(project);
    setOpen(true);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) return sortedProjects;
    return sortedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, sortedProjects]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[ALL_FILTER, ...CATEGORY_ORDER].map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white dark:bg-slate-950 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onClick={() => openProject(project)}
            />
          ))}
        </div>

        <ProjectModal project={selected} open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}
