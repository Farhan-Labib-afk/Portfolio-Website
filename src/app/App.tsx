import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      <Hero />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
      <About />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
      <Experience />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
      <Projects />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
      <Skills />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
      <Resume />
      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-indigo-500/40" />
      <Contact />
      <Footer />
    </div>
  );
}
