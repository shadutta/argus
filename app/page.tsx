import { About } from "@/components/About";
import { DashboardSection } from "@/components/DashboardSection";
import { FinalCTA } from "@/components/FinalCTA";
import { ForecastLab } from "@/components/ForecastLab";
import { GlobalMarkets } from "@/components/GlobalMarkets";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyArgus } from "@/components/WhyArgus";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <DashboardSection />
      <ProjectsSection />
      <ForecastLab />
      <GlobalMarkets />
      <WhyArgus />
      <FinalCTA />
    </main>
  );
}
