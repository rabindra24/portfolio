import AboutComponent from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import Performance from "@/components/Performance";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import ContactComponent from "@/components/Contact";
import Social from "@/components/Social";
export default function Home() {
  return (
    <main className="min-h-screen relative top-0 bg-primary pb-10">
      <Hero />
      <AboutComponent />
      <Skills />
      <Performance />
      <HorizontalScroll />
      <Experience />
      <Projects />
      <ContactComponent />
      <Social />

      
    </main>
  );
}
