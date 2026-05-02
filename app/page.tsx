import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import Advantage from "@/components/Advantage";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Advantage />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}