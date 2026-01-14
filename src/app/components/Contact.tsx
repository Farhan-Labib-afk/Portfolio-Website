import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-gray-200 dark:border-slate-700 p-8 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Let's build something that ships.
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                I love collaborating on product-focused software and applied ML.
                Reach out for capstone demos, project collaboration, or dev roles.
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
              <div className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-4"
            >
              <a
                href="mailto:farhan.labib@ucalgary.ca"
                className="flex items-center gap-4 p-5 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/60 transition-colors">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Email</div>
                  <div className="my-2 h-px w-10 bg-indigo-200 dark:bg-indigo-500/40" />
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    farhan.labib@ucalgary.ca
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Farhan-Labib-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/60 transition-colors">
                  <Github className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">GitHub</div>
                  <div className="my-2 h-px w-10 bg-indigo-200 dark:bg-indigo-500/40" />
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    github.com/farhan-labib-afk
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/farhan-labib-edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/60 transition-colors">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">LinkedIn</div>
                  <div className="my-2 h-px w-10 bg-indigo-200 dark:bg-indigo-500/40" />
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    linkedin.com/in/farhan-labib-edu
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


