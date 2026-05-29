import { Image, Sparkles, Copy, Check } from "lucide-react";
import React, { useState } from "react";

export default function AiGenedImages() {
  const [copiedLogo, setCopiedLogo] = useState(false);
  const [copiedRehab, setCopiedRehab] = useState(false);

  const logoPath = "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800";
  const rehabPath = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800";

  const logoPrompt = "A minimalist, modern and professional brand logo for a wellness and health platform called PulseForge. The logo shows a sleek, elegant abstract icon representing balance, physical recovery, and strength. Serene health-focused colors of deep dark charcoal greys and emerald green on a clean, solid white background, flat vector style.";
  
  const rehabPrompt = "A professional and modern digital illustration showcasing a knee physical rehabilitation exercise. A client is performing a guided gentle squat with support, showing correct technique, and a coach is giving encouraging support. Clean flat-design, modern style with soft gradients, comforting and safe atmosphere. Cool serene emerald, mint green, and light grey color palette, high fidelity.";

  const handleCopy = (text: string, type: "logo" | "rehab") => {
    navigator.clipboard.writeText(text);
    if (type === "logo") {
      setCopiedLogo(true);
      setTimeout(() => setCopiedLogo(false), 2000);
    } else {
      setCopiedRehab(true);
      setTimeout(() => setCopiedRehab(false), 2000);
    }
  };

  return (
    <section id="ai-bilder" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-2">
            Visuellt material
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI-Genererat Bildmaterial (Bilder)
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Här är de två viktigaste bilderna som vi har genererat med det toppmoderna AI-verktyget <strong>Imagen</strong>. De illustrerar hur PulseForge skapar ren, trygg och estetiskt balanserad design för rehabiliterande verksamheter.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* IMAGE 1: LOGOTYP */}
          <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-lg font-bold">
                  BILD #1: RETEGNAD VARUMÄRKESLOGO
                </span>
                <span className="text-xs font-semibold text-slate-400">1:1 Format</span>
              </div>

              {/* Image Frame */}
              <div className="aspect-square bg-white rounded-2xl border border-slate-200/60 p-4 shadow-inner mb-6 flex items-center justify-center">
                <img
                  src={logoPath}
                  alt="PulseForge Brand Logo"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="font-display font-extrabold text-slate-900 text-lg">
                Logotyp: PulseForge
              </h4>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                <strong>Beskrivning:</strong> Loggan består av en minimalistisk och elegant cirkulär symbol som representerar kontinuitet, återhämtning och kroppslig balans. Den mjuka kurvaturen för tankarna till en ryggrad och en knäskål i mjuk böjning. Färgerna kombinerar helande, örtgrön skogston och en sval skymningsblå nyans som skapar vetenskaplig trygghet.
              </p>
            </div>

            {/* Prompt box */}
            <div className="mt-6 pt-4 border-t border-slate-200/60 bg-white p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-wider block">
                ANVÄND BILDPROMPT (IMAGEN):
              </span>
              <p className="text-[11px] text-slate-500 italic leading-snug break-words">
                "{logoPrompt}"
              </p>
              <button
                onClick={() => handleCopy(logoPrompt, "logo")}
                className="w-full py-1.5 bg-slate-50 hover:bg-emerald-50 text-[10px] font-semibold text-slate-600 hover:text-emerald-700 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
              >
                {copiedLogo ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Kopierat prompt!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Kopiera bildprompt</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* IMAGE 2: REHAB ILLUSTRATION */}
          <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase bg-green-100 text-green-800 px-2.5 py-1 rounded-lg font-bold">
                  BILD #2: TEKNISK REHAB-ILLUSTRATION
                </span>
                <span className="text-xs font-semibold text-slate-400">1:1 Format</span>
              </div>

              {/* Image Frame */}
              <div className="aspect-square bg-white rounded-2xl border border-slate-200/60 p-4 shadow-inner mb-6 flex items-center justify-center">
                <img
                  src={rehabPath}
                  alt="Guided physical therapy squat technique rehabilitation illustration"
                  className="w-full h-full object-cover rounded-xl hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="font-display font-extrabold text-slate-900 text-lg">
                Instruktionsbild: Säker Knärehab
              </h4>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                <strong>Beskrivning:</strong> En färgstark digital design ritad med moderna platta kurvor och mjuka, behagliga färgtoner. Bilden fokuserar på en stående klient som i lugnt tempo genomför en knäböjsövning mjukt avlastad mot sitsen av en snygg stol, medan en personlig tränare övervakar och ger tryggande råd. Designen sänker oro och dämpar rädsla för felaktig belastning.
              </p>
            </div>

            {/* Prompt box */}
            <div className="mt-6 pt-4 border-t border-slate-200/60 bg-white p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-wider block">
                ANVÄND BILDPROMPT (IMAGEN):
              </span>
              <p className="text-[11px] text-slate-500 italic leading-snug break-words">
                "{rehabPrompt}"
              </p>
              <button
                onClick={() => handleCopy(rehabPrompt, "rehab")}
                className="w-full py-1.5 bg-slate-50 hover:bg-emerald-50 text-[10px] font-semibold text-slate-600 hover:text-emerald-700 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
              >
                {copiedRehab ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Kopierat prompt!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Kopiera bildprompt</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
