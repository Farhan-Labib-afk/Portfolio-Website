import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 260);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#090b0d] px-4 py-12 text-[#f4f1ea] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Farhan Labib</h3>
            <p className="mt-2 text-sm text-[#f4f1ea]/64">
              CS @UCalgary | Data Analytics, ML & Software Engineering
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-[#f4f1ea]/68" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-[#67d8c2]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Farhan-Labib-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-[#f4f1ea]/70 transition-colors hover:border-[#67d8c2] hover:text-[#67d8c2]"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/farhan-labib-edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-[#f4f1ea]/70 transition-colors hover:border-[#67d8c2] hover:text-[#67d8c2]"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="mailto:farhan.labib@ucalgary.ca"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-[#f4f1ea]/70 transition-colors hover:border-[#67d8c2] hover:text-[#67d8c2]"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[#f4f1ea]/54">
          <p>&copy; {currentYear} Farhan Labib</p>
        </div>

        <div
          className={`fixed bottom-4 right-4 z-50 transition-all duration-300 sm:bottom-6 sm:right-6 ${
            showBackToTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-[#090b0d]/90 text-[#f4f1ea] shadow-[0_16px_40px_rgba(0,0,0,0.34)] outline-none backdrop-blur-xl transition-colors hover:border-[#67d8c2] hover:text-[#67d8c2] focus-visible:ring-2 focus-visible:ring-[#67d8c2] sm:size-11"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
