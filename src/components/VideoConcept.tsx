import React, { useState, useEffect } from "react";
import { STORYBOARD_DATA } from "../data";
import { StoryboardLine } from "../types";
import { Play, Pause, ChevronLeft, ChevronRight, HelpCircle, Film, Sparkles, Smile, MessageCircle } from "lucide-react";

export default function VideoConcept() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlayingSlideshow, setIsPlayingSlideshow] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);

  const getSceneImageUrl = (index: number) => {
    switch (index) {
      case 0:
        return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"; // calm yoga/stretching
      case 1:
        return "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"; // gym band stretching
      case 2:
        return "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"; // gym rehab squat coaching
      case 3:
      default:
        return "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800"; // athletic running recovery
    }
  };

  const activeScene: StoryboardLine = STORYBOARD_DATA[activeIndex];

  // Auto progression for slideshow
  useEffect(() => {
    let timer: any;
    if (isPlayingSlideshow) {
      timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % STORYBOARD_DATA.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlayingSlideshow]);

  const handlePrev = () => {
    setIsPlayingSlideshow(false);
    setActiveIndex((prev) => (prev === 0 ? STORYBOARD_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlayingSlideshow(false);
    setActiveIndex((prev) => (prev + 1) % STORYBOARD_DATA.length);
  };

  return (
    <section id="videokoncept" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-2">
            Rörligt material
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reklamvideo-Koncept (30–45s)
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            För att göra lanseringskampanjen för <strong>PulseForge & Active Rehab</strong> framgångsrik har vi tagit fram ett kort och tryggt reklamkoncept. Klicka dig igenom vår interaktiva storyboard för att upptäcka scenerna och voiceover-manuset.
          </p>
        </div>

        {/* Video Sandbox layout card */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          
          {/* Top Panel controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/60 pb-6 mb-8 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                <Film className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest leading-none">
                  Kampanjidé
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  “Vägen tillbaka till styrka”
                </h4>
              </div>
            </div>

            {/* Slideshow play/pause btn */}
            <button
              onClick={() => setIsPlayingSlideshow(!isPlayingSlideshow)}
              className={`px-5 py-2.5 rounded-2xl font-display font-bold text-xs flex items-center space-x-2 shadow-sm transition-all focus:outline-none cursor-pointer ${
                isPlayingSlideshow
                  ? "bg-emerald-600 text-white shadow-emerald-600/10"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {isPlayingSlideshow ? (
                <>
                  <Pause className="h-3.5 w-3.5 fill-white" />
                  <span>Stoppa bildspel</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-slate-700" />
                  <span>Starta rullande storyboard</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Playback Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screen frame (70% weight on left) */}
            <div className="lg:col-span-6 relative bg-slate-900 text-white rounded-3xl p-6 sm:p-8 aspect-video flex flex-col justify-between shadow-lg overflow-hidden border border-slate-800">
              
              {/* Background video playing for realistic storyboard feels */}
              {videoError ? (
                <img
                  src={getSceneImageUrl(activeIndex)}
                  alt="Sports training and recovery storyboard illustration"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <video
                  key={activeIndex}
                  src={
                    activeIndex === 0 
                      ? "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-stretches-on-a-mat-34244-large.mp4"
                      : activeIndex === 1 
                      ? "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-stretching-exercises-on-a-yoga-mat-34241-large.mp4"
                      : activeIndex === 2
                      ? "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-elastic-band-in-the-gym-42171-large.mp4"
                      : "https://assets.mixkit.co/videos/preview/mixkit-athlete-stretching-on-the-running-track-40118-large.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={() => setVideoError(true)}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none"
                />
              )}

              {/* Overlay elements */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-ping"></div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                  PulseForge Kampanj
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-emerald-400 font-bold font-mono">
                  {activeScene.timePosition}
                </span>
              </div>

              {/* Dynamic visual representation */}
              <div className="my-auto text-center space-y-4 pt-12 z-20">
                <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-1">
                  <Sparkles className="h-4 w-4 text-emerald-400 inline" /> Scen {activeIndex + 1}: {activeScene.title}
                </p>
                <h5 className="font-display font-extrabold text-lg sm:text-2xl text-white tracking-tight leading-tight max-w-md mx-auto">
                  “{activeScene.title}”
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm max-w-prose mx-auto font-sans leading-relaxed">
                  {activeScene.description}
                </p>
              </div>

              {/* Lower visual cue element */}
              <div className="pt-6 border-t border-slate-800 z-20 flex items-center justify-between text-slate-400 text-[10px] sm:text-xs">
                <span className="truncate italic max-w-[280px]">📽️ Kamerainstruktion: {activeScene.visualCue}</span>
                <span className="font-bold text-emerald-400 font-mono shrink-0 uppercase tracking-wider">{activeScene.feeling}</span>
              </div>

              {/* Subtle visual color accent matching scene tone */}
              <div className={`absolute inset-0 opacity-10 transition-colors duration-1000 z-10 ${
                activeIndex === 0 ? "bg-red-500" : activeIndex === 1 ? "bg-sky-500" : activeIndex === 2 ? "bg-emerald-500" : "bg-emerald-500"
              }`}></div>
            </div>

            {/* Script details & Audio Speech controller (6 cols right) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Detailed information */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-2 text-emerald-600 mb-3">
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Voiceover-manus (Röst i klippet)</span>
                </div>
                
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed bg-emerald-50/20 border-l-4 border-emerald-500 pl-4 py-2.5">
                  {activeScene.voiceoverSec}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Känsla i rösten</span>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">{activeScene.feeling}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Tidslängd i scenen</span>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">ca {activeIndex === 3 ? "5s" : activeIndex === 2 ? "15s" : activeIndex === 1 ? "15s" : "10s"}</p>
                  </div>
                </div>
              </div>

              {/* Stepper buttons and timeline dots */}
              <div className="flex items-center justify-between">
                
                {/* Timeline dots */}
                <div className="flex space-x-2">
                  {STORYBOARD_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsPlayingSlideshow(false);
                        setActiveIndex(idx);
                      }}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === idx ? "w-8 bg-emerald-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    ></button>
                  ))}
                </div>

                {/* Left Right Arrows */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                    title="Föregående scen"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition-colors cursor-pointer"
                    title="Nästa scen"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Video aesthetic summaries */}
        <div className="bg-sky-50/40 border border-sky-100 p-6 rounded-3xl mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-sky-950">
            <span className="text-base sm:text-lg">⭐</span>
            <div>
              <p className="text-xs sm:text-sm font-semibold">Konceptkänsla: Lugn, trygg och professionell</p>
              <p className="text-[11px] text-sky-800 mt-0.5">Målet med filmen är inte att verka säljig eller intensiv, utan att utstråla absolut trygghet, helande bättring och ren omtanke.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
