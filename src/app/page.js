import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
     <Navbar/>
     <Hero/>
    </main>
  );
}