import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  architecture: string[];
  results: string[];
  technicalDetails: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onClose: () => void;
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-bold text-[var(--text-primary)]">{title}</h3>
      {children}
    </section>
  );
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-[calc(100%-1.5rem)] overflow-y-auto rounded-[1.5rem] border-[var(--border-soft)] bg-[var(--surface)] p-0 shadow-[var(--shadow-strong)] sm:max-w-5xl">
        <div className="relative aspect-[16/8] max-h-[360px] min-h-[220px] overflow-hidden bg-[var(--surface-soft)]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
        </div>

        <div className="space-y-8 p-6 sm:p-8">
          <DialogHeader className="text-left">
            <div className="flex flex-wrap items-center gap-2">
              {project.category && (
                <span className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
                  {project.category}
                </span>
              )}
              {project.featured && (
                <span className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--text-primary)] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--bg-primary)]">
                  Featured
                </span>
              )}
            </div>
            <DialogTitle className="mt-3 text-3xl font-bold leading-tight text-[var(--text-primary)]">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.githubUrl && (
                <Button
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="h-10 rounded-full bg-[var(--text-primary)] px-4 text-sm text-[var(--bg-primary)] hover:bg-[var(--accent-strong)]"
                >
                  <Github className="size-4" />
                  View Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                  className="h-10 rounded-full border-[var(--border-soft)] bg-transparent px-4 text-sm text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <DetailSection title="Overview">
                <p className="text-base leading-7 text-[var(--text-muted)]">
                  {project.description}
                </p>
              </DetailSection>

              <DetailSection title="Problem">
                <p className="text-base leading-7 text-[var(--text-muted)]">
                  {project.problem}
                </p>
              </DetailSection>

              <DetailSection title="Solution">
                <p className="text-base leading-7 text-[var(--text-muted)]">
                  {project.solution}
                </p>
              </DetailSection>
            </div>

            <div className="space-y-8">
              <DetailSection title="Architecture & Implementation">
                <ul className="space-y-3">
                  {project.architecture.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
                  <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Implementation Notes
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {project.technicalDetails}
                  </p>
                </div>
              </DetailSection>
            </div>
          </div>

          <DetailSection title="Results & Impact">
            <div className="grid gap-3 md:grid-cols-2">
              {project.results.map((result) => (
                <div
                  key={result}
                  className="rounded-[1.1rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
                    <p className="text-sm leading-6 text-[var(--text-primary)]">
                      {result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DetailSection>
        </div>
      </DialogContent>
    </Dialog>
  );
}
