import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
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

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <Button
                variant="default"
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Problem Statement
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Architecture & Implementation
            </h3>
            <ul className="space-y-2">
              {project.architecture.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Technical Details
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{project.technicalDetails}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Results & Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-indigo-50 dark:bg-indigo-950/40 rounded-lg p-4 border border-indigo-100"
                >
                  <p className="text-gray-700 dark:text-gray-200">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
