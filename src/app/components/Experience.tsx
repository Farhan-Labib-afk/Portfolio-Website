import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "DeepMind (Google)",
    position: "Machine Learning Research Intern",
    location: "London, UK (Remote)",
    duration: "Jun 2025 - Sep 2025",
    description:
      "Working on reinforcement learning algorithms for robotics manipulation tasks.",
    responsibilities: [
      "Implemented novel reward shaping techniques improving sample efficiency by 30%",
      "Collaborated with senior researchers on multi-agent RL project",
      "Contributed to internal ML infrastructure used by 50+ researchers",
    ],
    tags: ["PyTorch", "RL", "Robotics"],
    color: "border-l-blue-500",
  },
  /*
  {
    company: "Stripe",
    position: "Software Engineering Intern",
    location: "San Francisco, CA",
    duration: "Jun 2024 - Sep 2024",
    description:
      "Full-stack development on payment infrastructure serving millions of transactions daily.",
    responsibilities: [
      "Built real-time fraud detection pipeline processing 10K+ events/sec",
      "Reduced API latency by 40% through database query optimization",
      "Shipped features to production used by Fortune 500 companies",
    ],
    tags: ["Ruby", "PostgreSQL", "React"],
    color: "border-l-indigo-500",
  },
  {
    company: "Stanford AI Lab",
    position: "Undergraduate Researcher",
    location: "Stanford, CA",
    duration: "Sep 2023 - Present",
    description:
      "Research on neural architecture search and meta-learning under Prof. Sarah Johnson.",
    responsibilities: [
      "Developed efficient NAS algorithm reducing search time by 10x",
      "Co-authored paper submitted to NeurIPS 2025",
      "Mentored 2 freshman students on research methodology",
    ],
    tags: ["PyTorch", "Research", "Meta-Learning"],
    color: "border-l-green-500",
  },
  {
    company: "DataCorp Analytics",
    position: "Data Science Intern",
    location: "New York, NY",
    duration: "Jun 2023 - Aug 2023",
    description:
      "Built predictive models for customer behavior analysis in e-commerce.",
    responsibilities: [
      "Deployed ML models predicting customer churn with 87% accuracy",
      "Created interactive dashboards visualizing insights for executives",
      "Automated ETL pipelines saving 15 hours/week of manual work",
    ],
    tags: ["Python", "Scikit-learn", "SQL"],
    color: "border-l-purple-500",
  },
  */
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.duration}`}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-slate-950 rounded-xl p-6 border-l-4 ${exp.color} hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="mb-4 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />

                <p className="text-gray-700 dark:text-gray-200 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
