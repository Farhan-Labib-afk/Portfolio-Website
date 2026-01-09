import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "./ui/button";

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Resume
          </h2>

          <div className="bg-white dark:bg-slate-950 rounded-xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-16 h-16 text-white" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Farhan Labib - Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Computer Science Student specializing in Machine Learning and
                  Full-Stack Development. Download for detailed information on
                  education, projects, experience, and skills.
                </p>
                <div className="mb-6 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => {
                      // In a real implementation, this would download the actual PDF
                      const link = document.createElement("a");
                      link.href = "/resume.pdf";
                      link.download = "Alex_Chen_Resume.pdf";
                      link.click();
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      // In a real implementation, this would open the PDF in a new tab
                      window.open("/resume.pdf", "_blank");
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    3.9
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    4+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Internship Experiences
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
