import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";

type Theme = "light" | "dark";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "light";
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const openResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume/Farhan.Labib_Resume.pdf`, "_blank");
    setIsMobileMenuOpen(false);
  };

  const navSurface =
    isScrolled || isMobileMenuOpen
      ? "bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] shadow-[0_18px_48px_rgba(17,19,22,0.10)] dark:shadow-[0_18px_48px_rgba(0,0,0,0.36)]"
      : "bg-[color-mix(in_srgb,var(--surface)_46%,transparent)] shadow-none";

  return (
    <div className="pointer-events-none fixed left-1/2 top-5 z-50 w-[94vw] max-w-5xl -translate-x-1/2">
      <nav
        className={`pointer-events-auto rounded-[2rem] border border-[var(--border-soft)] px-3 py-2 backdrop-blur-xl transition-all duration-300 ${navSurface}`}
        aria-label="Primary navigation"
      >
        <div className="grid min-w-0 grid-cols-[1fr_auto] items-center gap-2 md:grid-cols-[1fr_auto_1fr]">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="min-w-0 rounded-full px-3 py-2 text-left text-sm font-semibold text-[var(--text-primary)] outline-none transition-colors hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Scroll to top"
          >
            <span className="hidden sm:inline">Farhan Labib</span>
            <span className="sm:hidden">FL</span>
          </button>

          <div className="hidden items-center justify-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--text-muted)] outline-none transition-colors hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <Button
              onClick={openResume}
              className="hidden h-10 rounded-full bg-[var(--text-primary)] px-5 text-sm text-[var(--bg-primary)] hover:bg-[var(--accent-strong)] focus-visible:ring-[var(--accent)] md:inline-flex"
            >
              Resume
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:hidden"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`pointer-events-auto mt-3 overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "max-h-96 translate-y-0 opacity-100 shadow-[var(--shadow-soft)]"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-full px-4 py-3 text-left text-sm font-medium text-[var(--text-muted)] outline-none transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={openResume}
            className="mt-2 h-11 rounded-full bg-[var(--text-primary)] text-sm text-[var(--bg-primary)] hover:bg-[var(--accent-strong)]"
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
