import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Education/>
     <Contact/>
     <Footer/>
    </main>
  );
}