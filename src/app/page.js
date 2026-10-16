import About from "@/components/About";
import Achievements from "@/components/Achievements";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Education/>
     <Projects/>
     <Services/>
     <Achievements/>
     <CodingProfiles/>
     <Contact/>
     <Footer/>
    </main>
  );
}