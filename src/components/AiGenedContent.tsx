import React, { useState } from "react";
import { AI_TEXT_PRESETS } from "../data";
import { AiTextPreset } from "../types";
import { Copy, Check, FileText, Instagram, Heart, MessageCircle, Send, Bookmark, Info, Sparkles, Sliders } from "lucide-react";

export default function AiGenedContent() {
  const [activePresetId, setActivePresetId] = useState<string>("stress-info");
  const [showOriginal, setShowOriginal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const activePreset = AI_TEXT_PRESETS.find(p => p.id === activePresetId) || AI_TEXT_PRESETS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="ai-texter" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-2">
            Praktiska exempel
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Digitala träningsguider & material
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Här visar vi två skarpa materialexempel från PulseForge. Vi tar svårförståelig, komplicerad text och omvandlar den till lättbegripligt material som motiverar och vägleder.
          </p>
        </div>

        {/* Content Choice Toggle */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => {
              setActivePresetId("stress-info");
              setShowOriginal(false);
            }}
            className={`px-5 py-3 rounded-2xl font-display font-bold text-sm flex items-center space-x-2 border transition-all cursor-pointer focus:outline-none ${
              activePresetId === "stress-info"
                ? "bg-white border-emerald-500 text-emerald-700 shadow-md ring-1 ring-emerald-500/10"
                : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-transparent"
            }`}
          >
            <FileText className="h-4 w-4 text-emerald-600" />
            <span>1. Patientinfo (Stress & Sömn)</span>
          </button>

          <button
            onClick={() => {
              setActivePresetId("insta-post");
              setShowOriginal(false);
            }}
            className={`px-5 py-3 rounded-2xl font-display font-bold text-sm flex items-center space-x-2 border transition-all cursor-pointer focus:outline-none ${
              activePresetId === "insta-post"
                ? "bg-white border-emerald-500 text-emerald-700 shadow-md ring-1 ring-emerald-500/10"
                : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-transparent"
            }`}
          >
            <Instagram className="h-4 w-4 text-rose-500" />
            <span>2. Instagram-Inlägg (Nybörjare)</span>
          </button>
        </div>

        {/* Before / After Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Block: The Interactive control and comparison breakdown (5 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
            <div>
              <div className="inline-flex items-center space-x-1 px-2.5 py-1 bg-emerald-100/50 rounded-lg text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest mb-4">
                <Sparkles className="h-3 w-3 inline text-emerald-600" />
                <span>Fysiologiskt lyft</span>
              </div>
              
              <h3 className="font-display text-2xl font-extrabold text-slate-900 leading-tight">
                {activePreset.title}
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4">
                Många fysiologiska anvisningar är krångliga eller opersonliga. Klicka nedan för att se mervärdet i PulseForge pedagogiska digitala träningsguider.
              </p>

              {/* Toggle controls */}
              <div className="space-y-3 mt-8">
                <button
                  onClick={() => setShowOriginal(true)}
                  className={`w-full p-4 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                    showOriginal 
                      ? "bg-amber-500/5 border-amber-300 text-amber-900" 
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200/60 text-slate-700"
                  }`}
                >
                  <span className="flex items-center gap-2">⚠️ Krångligt original (Fackuttryck)</span>
                  <Sliders className="h-4 w-4 text-slate-400" />
                </button>
                
                <button
                  onClick={() => setShowOriginal(false)}
                  className={`w-full p-4 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                    !showOriginal 
                      ? "bg-emerald-500/5 border-emerald-500 text-emerald-900" 
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200/60 text-slate-700"
                  }`}
                >
                  <span className="flex items-center gap-2">✨ PulseForge Edition (Pedagogisk)</span>
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                </button>
              </div>
            </div>

            {/* Explanatory footer bubble */}
            <div className="mt-8 p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-start space-x-3">
              <Info className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block font-display">Varför detta fungerar</span>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  {activePreset.explanation}
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: The Display Mockup (8 columns) */}
          <div className="lg:col-span-8 flex items-center justify-center">
            
            {/* Condition A: Rendering Patient Info Flyer */}
            {activePreset.category === "patient_info" && (
              <div className="w-full bg-white border-2 border-slate-200 shadow-xl rounded-3xl overflow-hidden max-w-2xl transform hover:scale-[1.01] transition-transform duration-300">
                
                {/* PDF Header accent bar */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 h-3 w-full"></div>
                
                {/* PDF Paper Content */}
                <div className="p-8 sm:p-12 relative min-h-[450px] flex flex-col justify-between">
                  <div>
                    {/* Flyer Header */}
                    <div className="flex justify-between items-start border-b border-slate-100 pb-5 mb-6">
                      <div>
                        <p className="text-[10px] font-mono tracking-widest font-bold uppercase text-emerald-600 leading-none">
                          Hälsorådgivning och information
                        </p>
                        <h4 className="font-display font-black text-slate-900 text-xl sm:text-2xl mt-2 tracking-tight">
                          {showOriginal ? "KLINISKT UTKAST: SYMPATISKA STRUKTURER" : "Att förstå och hantera din stress"}
                        </h4>
                      </div>
                      <div className="flex flex-col items-end text-right">
                        <span className="text-[9px] font-mono font-bold text-slate-400">DOKUMENT: #RE-902</span>
                        <span className="text-[9px] font-mono uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold mt-1">
                          {showOriginal ? "FRÅN VÅRDEN" : "MÄNNISKOVITNESST"}
                        </span>
                      </div>
                    </div>

                    {/* Flyer Body */}
                    <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-serif italic max-w-prose">
                      {showOriginal ? activePreset.originalText : activePreset.generatedText}
                    </div>
                  </div>

                  {/* Copy & Footer inside sheet */}
                  <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs">
                    <span>© PulseForge / Active Rehab 2026. Trygg fysiologisk guide.</span>
                    
                    <button
                      onClick={() => handleCopy(showOriginal ? activePreset.originalText : activePreset.generatedText)}
                      className="px-3.5 py-1.5 bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-500" />
                          <span className="text-emerald-500">Kopierat!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Kopiera text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* Condition B: Rendering Instagram Smartphone mockup */}
            {activePreset.category === "social_media" && (
              <div className="w-full max-w-sm bg-slate-900 p-3 rounded-[3rem] shadow-2xl border-4 border-slate-800 relative">
                
                {/* Speaker pill layout */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full z-25"></div>

                {/* Simulated Screen inside phone */}
                <div className="bg-white rounded-[2.2rem] overflow-hidden border border-slate-800 relative">
                  
                  {/* Instagram App Header */}
                  <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white text-slate-900 pt-6">
                    <span className="font-display font-black text-lg tracking-tight">Instagram</span>
                    <Sparkles className="h-5 w-5 text-emerald-600" />
                  </div>

                  {/* Feed post user info */}
                  <div className="px-4 py-2.5 flex items-center justify-between bg-white">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center p-0.5 shadow">
                        <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
                          <span className="text-[10px] font-mono font-bold text-emerald-700">PF</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">pulseforge_coaching</p>
                        <p className="text-[10px] text-slate-400">Active Gym Promo (Fiktiv)</p>
                      </div>
                    </div>
                    <span className="text-slate-400 font-extrabold text-xs">•••</span>
                  </div>

                  {/* Post Image Container */}
                  <div className="aspect-square bg-gradient-to-tr from-emerald-50 via-green-100 to-emerald-50 relative flex items-center justify-center text-center p-6 border-y border-slate-100">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-emerald-600 text-white font-black px-2.5 py-1 rounded-full shadow">
                        {showOriginal ? "TRÅKIGT ORIGINAL" : "VÄLKOMMEN NYBÖRJARE"}
                      </span>
                      <h5 className="font-display font-bold text-slate-900 text-base max-w-xs mt-2 px-4 italic leading-tight">
                        {showOriginal ? "Klinisk registrering sker under kontorstid" : "Träning på dina villkor. Inga krav. Bara glädje. 👋💛"}
                      </h5>
                      <p className="text-[10px] text-slate-500">Klicka på knappen bredvid för att se rullande text</p>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/70 backdrop-blur text-[9px] text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
                      1/1
                    </div>
                  </div>

                  {/* Action row (Likes, Comments...) */}
                  <div className="px-4 py-3 flex items-center justify-between text-slate-800 bg-white">
                    <div className="flex items-center space-x-3.5">
                      <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />
                      <MessageCircle className="h-5 w-5 hover:text-emerald-600 cursor-pointer" />
                      <Send className="h-5 w-5 transform -rotate-15 hover:text-emerald-600 cursor-pointer" />
                    </div>
                    <Bookmark className="h-5 w-5 hover:text-emerald-600 cursor-pointer" />
                  </div>

                  {/* Description scrolling box inside Smartphone */}
                  <div className="px-4 pb-6 bg-white text-slate-800 max-h-48 overflow-y-auto text-xs space-y-1 scrollbar-none">
                    <p className="font-bold">148 gilla-markeringar</p>
                    <p className="leading-relaxed">
                      <span className="font-bold mr-1.5">pulseforge_coaching</span>
                      <span className="whitespace-pre-line text-slate-700">
                        {showOriginal ? activePreset.originalText : activePreset.generatedText}
                      </span>
                    </p>
                    
                    {/* Simulated comment */}
                    <p className="text-[10px] text-slate-400 pt-2">Visa alla 23 kommentarer</p>
                  </div>

                  {/* Copy floating button inside mobile mockup */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <button
                      onClick={() => handleCopy(showOriginal ? activePreset.originalText : activePreset.generatedText)}
                      className="p-3 bg-slate-900 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-colors flex items-center justify-center cursor-pointer"
                      title="Kopiera Instagram-text"
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
