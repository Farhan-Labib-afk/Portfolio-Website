import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Farhan Labib</h3>
            <p className="text-gray-400 dark:text-gray-500">
              CS @UofCalgary | ML & Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Farhan-Labib-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/farhan-labib-edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:farhan.labib@ucalgary.ca"
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 dark:text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Farhan Labib. Built with{" "}
            <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            showBackToTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-900/90 text-white hover:bg-gray-900 shadow-lg ring-1 ring-white/10 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
