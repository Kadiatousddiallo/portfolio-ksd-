import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Diplomas from "@/components/Diplomas";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Certifications />
      </Reveal>
      <Reveal>
        <Diplomas />
      </Reveal>
      <Reveal>
        <CV />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}