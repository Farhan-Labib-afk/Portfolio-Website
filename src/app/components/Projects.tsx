import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal, ProjectDetail } from "./ProjectModal";

const projects: ProjectDetail[] = [
  {
    id: "1",
    title: "Medical Image Classification System",
    description:
      "Deep learning system for automated diagnosis of chest X-rays using CNN architecture with 94% accuracy.",
    image:
      "https://images.unsplash.com/photo-1717501218504-81ed5eb52cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2NzkyNDQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["PyTorch", "Computer Vision", "Flask", "Docker"],
    githubUrl: "https://github.com",
    problem:
      "Radiologists face overwhelming workloads analyzing thousands of chest X-rays daily, leading to delayed diagnoses and potential errors. Manual screening is time-intensive and prone to fatigue-related mistakes.",
    solution:
      "Developed an end-to-end deep learning pipeline using ResNet50 architecture for automated classification of 14 common chest pathologies. Integrated explainable AI (Grad-CAM) to highlight regions of interest, providing visual justification for predictions.",
    architecture: [
      "ResNet50 backbone pre-trained on ImageNet, fine-tuned on ChestX-ray14 dataset (112,120 images)",
      "Custom data augmentation pipeline to handle class imbalance",
      "Flask REST API with Redis caching for real-time inference",
      "Docker containerization for consistent deployment across environments",
      "Implemented batch processing for high-throughput analysis",
    ],
    technicalDetails:
      "Trained on 4x NVIDIA V100 GPUs using mixed precision training (reduced training time by 40%). Implemented custom loss function combining binary cross-entropy with focal loss for handling severe class imbalance. Deployed with Kubernetes for auto-scaling under load.",
    results: [
      "94.2% AUC-ROC on test set, matching specialist performance",
      "Inference time: 80ms per image on CPU, 15ms on GPU",
      "Reduced average diagnosis time by 67% in pilot study",
      "Deployed in 2 teaching hospitals for clinical validation",
    ],
  },
  {
    id: "2",
    title: "Distributed Query Optimizer for PostgreSQL",
    description:
      "Custom query optimizer extension improving complex analytical queries by 45% through intelligent index selection.",
    image:
      "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3ODgxOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["PostgreSQL", "C", "Python", "SQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    problem:
      "Traditional query optimizers struggle with multi-table joins and complex predicates on large datasets, often generating suboptimal execution plans that waste server resources.",
    solution:
      "Built a PostgreSQL extension that uses machine learning to predict optimal index combinations and join orders. Integrates with PostgreSQL's planner to suggest better execution strategies based on historical query patterns.",
    architecture: [
      "Written in C as a PostgreSQL extension using the hook system",
      "Gradient boosting model (XGBoost) trained on query execution statistics",
      "Cost model incorporating IO, CPU, and memory estimates",
      "Python-based profiling tool for collecting training data",
      "Automatic index recommendation system",
    ],
    technicalDetails:
      "Analyzed query execution plans using pg_stat_statements and custom hooks. Feature engineering included cardinality estimates, selectivity factors, and table statistics. Model achieves 89% accuracy in predicting query runtime categories.",
    results: [
      "45% average speedup on TPC-H benchmark queries",
      "Reduced disk I/O by 38% for analytical workloads",
      "Automated index recommendations saved 200+ hours of DBA time",
      "Successfully handles databases with 50M+ rows per table",
    ],
  },
  {
    id: "3",
    title: "Real-Time Collaboration Platform",
    description:
      "Full-stack web application enabling real-time document editing with operational transformation for conflict resolution.",
    image:
      "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc5NDE0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "WebSocket", "MongoDB", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    problem:
      "Existing collaboration tools lack true real-time synchronization, leading to conflicting edits and data loss when multiple users work simultaneously. High latency and poor conflict resolution degrade user experience.",
    solution:
      "Implemented operational transformation (OT) algorithm for conflict-free collaborative editing. Built WebSocket-based communication layer for sub-50ms latency. Designed CRDT-inspired data structures for eventual consistency.",
    architecture: [
      "React frontend with ProseMirror for rich text editing",
      "Node.js backend with Express and Socket.io for WebSocket management",
      "Redis pub/sub for horizontal scaling across multiple servers",
      "MongoDB for document persistence with optimistic locking",
      "JWT-based authentication with refresh token rotation",
    ],
    technicalDetails:
      "Implemented custom OT algorithm handling concurrent insertions, deletions, and formatting changes. Used CRDT principles to guarantee convergence. Client-side prediction reduces perceived latency to near-zero.",
    results: [
      "Supports 50+ concurrent users per document without lag",
      "Average message latency: 42ms (p99: 120ms)",
      "Zero data loss across 10,000+ test scenarios",
      "Used by 500+ students for group projects",
    ],
  },
  {
    id: "4",
    title: "Predictive Analytics Dashboard for E-Commerce",
    description:
      "ML-powered analytics platform predicting customer churn and lifetime value with interactive visualizations.",
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njc4NDk5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Scikit-learn", "React", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com",
    problem:
      "E-commerce businesses struggle to identify at-risk customers before churn occurs. Lack of actionable insights leads to inefficient marketing spend and lost revenue opportunities.",
    solution:
      "Built an end-to-end ML pipeline that ingests transactional data, extracts behavioral features, and generates churn predictions with 87% accuracy. Interactive dashboard allows business users to explore predictions and take targeted actions.",
    architecture: [
      "Python-based ETL pipeline using Apache Airflow for data orchestration",
      "Feature engineering: RFM analysis, session behavior, purchase patterns",
      "Ensemble model combining Random Forest and XGBoost",
      "React dashboard with D3.js for custom visualizations",
      "PostgreSQL data warehouse with materialized views for performance",
    ],
    technicalDetails:
      "Implemented incremental learning to update models daily without full retraining. Feature importance analysis using SHAP values. A/B testing framework to measure business impact of interventions.",
    results: [
      "87% accuracy, 0.82 F1 score on churn prediction",
      "Identified $150K in recoverable revenue over 3 months",
      "Reduced customer acquisition cost by 23%",
      "Dashboard processes 1M+ transactions daily",
    ],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Selected work demonstrating expertise in ML systems, database
              optimization, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
