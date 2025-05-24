// app/page.tsx or wherever your home component is

"use client";

import dynamic from "next/dynamic";
import FloatingNav from "./components/floating-nav";
import Hero from "./components/Hero"; // Above the fold

const About = dynamic(() => import("./components/About"), { ssr: false });
const Experience = dynamic(() => import("./components/Experience"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const Services = dynamic(() => import("./components/Services"), { ssr: false });
const Education = dynamic(() => import("./components/Education"), {
  ssr: false,
});
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </main>
  );
}
