import About from "@/components/About";
import Education from "@/components/Education";
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
    </main>
  );
}