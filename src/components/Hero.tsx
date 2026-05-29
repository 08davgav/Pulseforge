import { motion } from "motion/react";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";

export default function Hero() {
  const logoUrl = "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="startsida"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-emerald-50/40 via-green-50/20 to-white overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob [animation-delay:2s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Pitch Side */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mx-auto lg:mx-0 w-fit"
            >
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">
                Struktur + Fysiologisk Progression = Resultat
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              PulseForge
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-xl sm:text-2xl font-bold text-emerald-700/90 italic tracking-wide"
            >
              “Bygger styrka, struktur och resultat”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Vi är en modern fysiologisk träningsplattform och digital coach som hjälper personliga tränare, gym, vårdcentraler och rehabkliniker att planera bättre. Genom intelligenta digitala verktyg skapar vi fysiologiskt starka övningsscheman, pedagogiska instruktionskort och interaktiva rehabsystem. Allt innehåll kvalitetssäkras av erfarna instruktörer för trygg progression.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection("tjanster")}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Mina fysiologiska tjänster</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("kundcase")}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-emerald-700 font-display font-semibold rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Visa vårt fiktiva kundcase</span>
              </button>
            </motion.div>

            {/* Micro badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-slate-100"
            >
              <div className="flex items-center space-x-2 text-slate-500">
                <Shield className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-600">Säker rehab</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <Heart className="h-4 w-4 text-rose-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-600">Fysiologiskt fokus</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <Sparkles className="h-4 w-4 text-green-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-600">Digital struktur</span>
              </div>
            </motion.div>
          </div>

          {/* Logo Showcase Side */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Spinning / breathing background ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-green-500/20 rounded-full animate-pulse filter blur-xl"></div>
              
              {/* Main Logo Container */}
              <div className="absolute inset-4 bg-white rounded-[2.5rem] shadow-xl border border-emerald-50/55 p-6 flex flex-col items-center justify-center space-y-4 group">
                <img
                  src={logoUrl}
                  alt="PulseForge Logo"
                  className="w-48 h-48 lg:w-56 lg:h-56 object-contain rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="text-center">
                  <p className="font-display font-black text-2xl tracking-tight text-slate-900 leading-none">
                    PulseForge
                  </p>
                  <p className="font-mono text-xs text-emerald-600 font-extrabold uppercase tracking-widest mt-1">
                    Träningsplattform
                  </p>
                </div>
              </div>

              {/* Floating micro badges */}
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-2.5 shadow-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-green-500 text-white rounded-xl px-3 py-1.5 shadow-lg text-xs font-semibold font-display">
                Gymnasieprojekt Gy2026
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
