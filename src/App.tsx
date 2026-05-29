import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ClientCase from "./components/ClientCase";
import KundcaseSection from "./components/KundcaseSection";
import AiGenedContent from "./components/AiGenedContent";
import AiGenedImages from "./components/AiGenedImages";
import VideoConcept from "./components/VideoConcept";
import AudioSection from "./components/AudioSection";
import AiUsage from "./components/AiUsage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500/10 selection:text-emerald-800">
      
      {/* Top sticky navigation bar */}
      <Navbar />

      <main className="relative">
        
        {/* Section 1: Startsida */}
        <Hero />

        {/* Section 2: Om oss */}
        <AboutUs />

        {/* Section 3: Tjänster */}
        <Services />

        {/* Section 4: Fiktivt Kundcase (Active Rehab Studio) */}
        <ClientCase />

        {/* Section 4.5: Kundcase & Testimonials (Marcus Andersson) */}
        <KundcaseSection />

        {/* Section 5: AI-genererad text */}
        <AiGenedContent />

        {/* Section 6: AI-genererade bilder */}
        <AiGenedImages />

        {/* Section 7: Video / Videokoncept storyboard */}
        <VideoConcept />

        {/* Section 8: Ljud / Musik & Voiceover players */}
        <AudioSection />

        {/* Section 9: Så använde jag AI metodreflektion */}
        <AiUsage />

      </main>

      {/* Polish footer & disclaimer */}
      <Footer />

    </div>
  );
}
