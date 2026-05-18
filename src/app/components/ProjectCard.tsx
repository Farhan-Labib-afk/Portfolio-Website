import type { KeyboardEvent } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  onClick: () => void;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  category,
  featured,
  githubUrl,
  liveUrl,
  onClick,
}: ProjectCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open project details for ${title}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface)] shadow-[var(--shadow-soft)] outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/18" />
        {featured && (
          <span className="font-mono-ui absolute left-4 top-4 rounded-full border border-white/35 bg-black/45 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-md">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono-ui text-xs font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
          {category}
        </p>
        <h3 className="mt-3 text-xl font-bold leading-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--text-muted)]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="font-mono-ui rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-2.5 py-1 text-[0.68rem] font-medium text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={(event) => {
                event.stopPropagation();
                window.open(githubUrl, "_blank");
              }}
              className="h-9 rounded-full border-[var(--border-soft)] bg-transparent px-3 text-xs text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"
              aria-label={`View code for ${title}`}
            >
              <Github className="size-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={(event) => {
                event.stopPropagation();
                window.open(liveUrl, "_blank");
              }}
              className="h-9 rounded-full border-[var(--border-soft)] bg-transparent px-3 text-xs text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"
              aria-label={`Open live demo for ${title}`}
            >
              <ExternalLink className="size-4" />
              Demo
            </Button>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
            Details
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
