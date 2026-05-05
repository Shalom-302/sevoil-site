import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import PortCoverage from "@/components/PortCoverage";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <MissionVision />
      <Services />
      <PortCoverage />
      <Process />
      <CTA />
      <ProjectForm />
      <Footer />
    </main>
  );
}
