import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
