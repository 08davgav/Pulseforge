import { 
  HelpCircle, 
  Brain, 
  Sparkles, 
  Users, 
  Heart, 
  Activity,
  Compass, 
  ArrowRight, 
  CheckCircle,
  FileText,
  Calendar,
  Layers,
  Video,
  Volume2,
  Bookmark
} from "lucide-react";

export default function AboutUs() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const overviewItems = [
    {
      title: "Träningstjänster",
      desc: "Våra fysiologiska och kliniska träningstjänster anpassade för digital spridning.",
      target: "tjanster",
      icon: Compass,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100/50"
    },
    {
      title: "Veckoscheman",
      desc: "Interaktiva klickbara rehabiliteringsscheman med inbyggt progressionsfokus.",
      target: "kundcase",
      icon: Calendar,
      color: "bg-green-50 text-green-600 border-green-100/50"
    },
    {
      title: "Fiktivt Kundscenarion",
      desc: "Fullständigt scenario kring hur plattformen hjälpte repatrierade idrottare (t.ex. Marcus, 27 år).",
      target: "kundcase-marcus",
      icon: Users,
      color: "bg-teal-50 text-teal-600 border-teal-100/50"
    },
    {
      title: "Kundrecensioner",
      desc: "Professionellt presenterade omdömen med stjärnbetyg, profilavatarer och hover-effekt.",
      target: "kundcase-marcus",
      icon: Sparkles,
      color: "bg-amber-50 text-amber-500 border-amber-100/50"
    },
    {
      title: "AI-genererade Texter",
      desc: "Hur facktexter översätts pedagogiskt till mjuka, lätthanterliga instruktionsskrifter.",
      target: "ai-texter",
      icon: FileText,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100/50"
    },
    {
      title: "AI-genererade Bilder",
      desc: "Vår logotyp och tekniska illustrationer genererade med Google Imagen.",
      target: "ai-bilder",
      icon: Layers,
      color: "bg-sky-50 text-sky-600 border-sky-100/50"
    },
    {
      title: "Videokoncept Slider",
      desc: "Storyboard-mockup av vår 30 sekunders reklamkampanj med röstmanus.",
      target: "videokoncept",
      icon: Video,
      color: "bg-rose-50 text-rose-600 border-rose-100/50"
    },
    {
      title: "Ljud & Musikidéer",
      desc: "Live-synthesizer jingle och svensk teströst för lugnande voiceover i webbläsaren.",
      target: "ljud-musik",
      icon: Volume2,
      color: "bg-violet-50 text-violet-600 border-violet-100/50"
    },
    {
      title: "Rapport: 'Så gjorde jag'",
      desc: "Den examinerande reflektionen om processen, val av verktyg, reflektion och kritik.",
      target: "sa-anvande-jag-ai",
      icon: Bookmark,
      color: "bg-slate-50 text-slate-600 border-slate-100/50"
    }
  ];

  return (
    <section id="om-oss" className="py-24 bg-white relative overflow-hidden">
      
      {/* Visual top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= Vad är PulseForge Section ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-black tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
              Om plattformen
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Vad är PulseForge?
            </h2>
            <div className="h-1.5 w-20 bg-emerald-600 rounded-full"></div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>PulseForge</strong> är en komplett digital tränings- och rehabiliteringsplattform som fungerar som en länk mellan terapeutens kompetens och atletens träningsvardag. Vi utvecklade tjänsten för att överbrygga kommunikationsklyftan inom hälsosektorn.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex gap-3.5">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Vem vi hjälper (Målgrupp)</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    Målgruppen är personer som vill träna säkert och strukturerat – från idrottare som rehabiliterar en skada till motionärer som söker en trygg väg tillbaka till stark hälsa.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Hur vi stöttar (Våra tre grundpelare)</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    Plattformen stöttar genom kliniskt anpassad progression, lätthanterlig och motiverande träningsplanering samt skräddarsydd teknikfeedback för trygg belastning.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Digital integration & AI i processen</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    Vi använder digitala AI-verktyg för att visualisera komplex träning med precision, strukturera personliga veckoplaner och skapa lättbegripliga instruktioner utan svåra latinska ordvängningar.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right box: Quick Statistics summary card */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-100 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Activity className="h-44 w-44 text-slate-900" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-display font-bold text-slate-900 text-lg">Hälsa, teknik & pedagogik förenat</h3>
                <p className="text-slate-500 text-xs mt-1">Ett skolprojekt fyllt med fiktiv data för att visa hur en modern tjänst kan designas.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-white border border-slate-200/50 p-6 rounded-2xl">
                  <span className="text-3xl font-extrabold text-emerald-600 tracking-tight font-display">100%</span>
                  <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">Självständig inlämning</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Alla delar ligger samlade interaktivt på denna sida.</p>
                </div>
                <div className="bg-white border border-slate-200/50 p-6 rounded-2xl">
                  <span className="text-3xl font-extrabold text-emerald-600 tracking-tight font-display">4 Veckor</span>
                  <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">Rehabiliteringsschema</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Progressioner skapade med avlastande metodik.</p>
                </div>
                <div className="bg-white border border-slate-200/50 p-6 rounded-2xl">
                  <span className="text-3xl font-extrabold text-emerald-600 tracking-tight font-display">Playable</span>
                  <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">Ljud- & Videosupport</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Spelbar synthesizer och svensk voiceover online.</p>
                </div>
                <div className="bg-white border border-slate-200/50 p-6 rounded-2xl">
                  <span className="text-3xl font-extrabold text-emerald-600 tracking-tight font-display">Imagen</span>
                  <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">Grafiska resurser</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Logotyp och tekniska rehabillustrationer inbäddat.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= På denna sida finns (ÖVERSIKT) ================= */}
        <div className="border-t border-slate-100 pt-20">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-black text-emerald-600 tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Hitta på sidan
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Översikt över inlämningen
            </h3>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Denna sida fungerar som ett **komplett och fristående inlämningsmaterial** för gymnasiearbetet. Använd länkarna nedan för att hoppa direkt till olika delar av vårt design- och textkoncept.
            </p>
          </div>

          {/* Overview dynamic cards grid with smooth hover effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.target)}
                  className="bg-slate-50/50 border border-slate-100 hover:border-emerald-500/20 hover:bg-white rounded-2xl p-5 text-left transition-all duration-300 hover:shadow-md group focus:outline-none flex gap-4 cursor-pointer"
                >
                  <div className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 shadow-inner transition-transform group-hover:scale-105 ${item.color}`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-slate-900 text-sm leading-tight flex items-center gap-1.5 group-hover:text-emerald-700 transition-colors">
                      <span>{item.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-600" />
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
