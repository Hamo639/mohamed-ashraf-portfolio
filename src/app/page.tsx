import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Project/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (

    <>
      <main>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
      
    </main>
    </>
  
  );
}
