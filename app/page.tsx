import FloatingNav from "./components/floating-nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Rendered on the server rather than dynamically imported with `ssr: false`, so
// crawlers see the full content in the initial HTML.
export default function Home() {
  return (
    <>
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
