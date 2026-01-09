import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

const research = [
  {
    title:
      "Efficient Neural Architecture Search Using Gradient-Based Meta-Learning",
    authors: "Farhan Labib, Prof. Sarah Johnson",
    conference: "NeurIPS 2025 Workshop on AutoML",
    status: "Under Review",
    abstract:
      "We propose a novel gradient-based meta-learning approach for neural architecture search that reduces search time by 10x while maintaining competitive accuracy. Our method leverages second-order optimization to guide architecture decisions.",
    tags: ["AutoML", "Meta-Learning", "Deep Learning"],
    icon: Clock,
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    title:
      "Optimizing Query Performance in Distributed Graph Databases Using Learned Indexes",
    authors: "Farhan Labib, Dr. Michael Zhang",
    conference: "VLDB 2026",
    status: "In Progress",
    abstract:
      "Investigation of learned index structures for distributed graph traversal queries. Preliminary results show 3x speedup on social network datasets with 100M+ nodes using neural networks to predict edge locality.",
    tags: ["Databases", "Graph Theory", "Machine Learning"],
    icon: Clock,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
    authors: "Farhan Labib, Dr. Emily Roberts, Prof. David Lee",
    conference: "IEEE EMBC 2025",
    status: "Published",
    abstract:
      "Developed a federated learning framework enabling collaborative training across multiple hospitals without sharing patient data. Achieved 92% accuracy on multi-institutional chest X-ray classification tasks.",
    tags: ["Federated Learning", "Healthcare AI", "Privacy"],
    icon: CheckCircle2,
    color: "text-green-600 bg-green-100",
  },
];

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Research & Publications
          </h2>

          <div className="space-y-6">
            {research.map((paper, index) => {
              const StatusIcon = paper.icon;
              return (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-950 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${paper.color}`}
                    >
                      <StatusIcon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {paper.title}
                        </h3>
                        <Badge
                          variant={
                            paper.status === "Published"
                              ? "default"
                              : "secondary"
                          }
                          className="flex-shrink-0"
                        >
                          {paper.status}
                        </Badge>
                      </div>
                      <div className="mb-3 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {paper.authors}
                      </p>

                      <p className="text-sm font-medium text-indigo-600 mb-3">
                        {paper.conference}
                      </p>

                      <p className="text-gray-700 dark:text-gray-200 mb-4">{paper.abstract}</p>

                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
