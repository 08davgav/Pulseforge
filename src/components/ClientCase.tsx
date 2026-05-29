import React, { useState, useEffect, useRef } from "react";
import { REHAB_PLAN } from "../data";
import { RehabWeek, Exercise } from "../types";
import { 
  Building2, 
  ChevronRight, 
  Flame, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckSquare, 
  Square, 
  Sparkles, 
  ShieldAlert, 
  Gauge, 
  ArrowUpRight 
} from "lucide-react";

export default function ClientCase() {
  const [activeWeekNum, setActiveWeekNum] = useState<number>(1);
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  
  // Video player mockup state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoStep, setVideoStep] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const getFallbackImageUrl = (weekNum: number) => {
    switch (weekNum) {
      case 1:
        return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"; // stretching
      case 2:
        return "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"; // band training
      case 3:
        return "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"; // gym rehab squat
      case 4:
      default:
        return "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800"; // recovery/running/athlete stretching
    }
  };

  const activeWeek: RehabWeek = REHAB_PLAN.find(w => w.week === activeWeekNum) || REHAB_PLAN[0];
  const rehabIllustrationUrl = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800";

  const videoRef = useRef<HTMLVideoElement>(null);

  const getWeekVideoUrl = (weekNum: number) => {
    switch (weekNum) {
      case 1:
        return "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-stretching-exercises-on-a-yoga-mat-34241-large.mp4";
      case 2:
      case 3:
        return "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-elastic-band-in-the-gym-42171-large.mp4";
      case 4:
      default:
        return "https://assets.mixkit.co/videos/preview/mixkit-athlete-stretching-on-the-running-track-40118-large.mp4";
    }
  };

  const videoUrl = getWeekVideoUrl(activeWeekNum);

  // Auto-reset player when the active week changes
  useEffect(() => {
    handleResetVideo();
  }, [activeWeekNum]);

  // Fallback progression timer if video fails to load
  useEffect(() => {
    let interval: any;
    if (isVideoPlaying && (videoError || !videoRef.current)) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsVideoPlaying(false);
            setVideoStep(0);
            return 0;
          }
          const nextProg = prev + 2; 
          const currentStep = Math.min(Math.floor((nextProg / 100) * 4), 3);
          setVideoStep(currentStep);
          return nextProg;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isVideoPlaying, videoError]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 30;
      const progress = (current / duration) * 100;
      setVideoProgress(progress);

      const currentStep = Math.min(Math.floor((current / duration) * 4), 3);
      setVideoStep(currentStep);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setVideoProgress(0);
    setVideoStep(0);
  };

  const toggleVideoPlay = () => {
    if (videoRef.current && !videoError) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch((err) => {
          console.log("Playback interrupted, switching to interactive simulator", err);
          setVideoError(true);
          setIsVideoPlaying(true);
        });
        setIsVideoPlaying(true);
      }
    } else {
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleResetVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    setIsVideoPlaying(false);
    setVideoProgress(0);
    setVideoStep(0);
  };

  const toggleExercise = (name: string) => {
    setCompletedExercises(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const videoScenes = [
    { title: "Uppvärmning & cirkulation", instruction: "Gör lätta cirkulära ankelpumpar för att väcka leden." },
    { title: "Aktivera lårfokus", instruction: "Spänn låret mot underlaget, håll i 5 sekunder per repetition." },
    { title: "Teknik vid knäböj", instruction: "Använd stolen som stöd. Håll ryggen rak och höften bakåt." },
    { title: "Styrkekontroll i landning", instruction: "Landa mjukt på tå och rulla bak på hälen. Håll balansen." }
  ];

  // Calculate completion percentage for the active week's exercises
  const activeWeekExercises = activeWeek.exercises;
  const completedCount = activeWeekExercises.filter(ex => completedExercises[ex.name]).length;
  const completionPercentage = Math.round((completedCount / activeWeekExercises.length) * 100);

  return (
    <section id="kundcase" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-2">
            Verkligt scenario (Fiktivt)
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fiktivt Kundcase: Active Rehab Studio & PulseForge
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Här visar vi hur PulseForge-systemet hjälpte en lokal rehabcoach, <strong>Active Rehab Studio</strong>, att ta fram ett skräddarsytt rehabiliteringsmaterial för en klient som kommit tillbaka från en knäskada.
          </p>
        </div>

        {/* Case Meta Box */}
        <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-6 sm:p-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-r border-slate-200/60 last:border-0 pr-4">
            <div className="flex items-center space-x-2 text-emerald-600 mb-2">
              <Building2 className="h-4 w-4" />
              <span className="text-xs uppercase font-mono font-bold tracking-wider">Klienten</span>
            </div>
            <h4 className="font-display font-bold text-slate-900 text-lg">Active Rehab Studio</h4>
            <p className="text-slate-500 text-xs mt-1">Personlig träning & medicinsk rehabträning.</p>
          </div>
          
          <div className="border-r border-slate-200/60 last:border-0 pr-4 md:pl-4">
            <div className="flex items-center space-x-2 text-amber-600 mb-2">
              <ShieldAlert className="h-4 w-4" />
              <span className="text-xs uppercase font-mono font-bold tracking-wider">Utmaningen</span>
            </div>
            <h4 className="font-display font-bold text-slate-900 text-lg">Långdragen knäskada</h4>
            <p className="text-slate-500 text-xs mt-1">Svårt med krångliga medicinska instruktioner; behöver ett enkelt, visuellt 4-veckorsprogram.</p>
          </div>

          <div className="md:pl-4">
            <div className="flex items-center space-x-2 text-emerald-600 mb-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs uppercase font-mono font-bold tracking-wider">PulseForge Lösning</span>
            </div>
            <h4 className="font-display font-bold text-slate-900 text-lg">Pedagogiska Planer</h4>
            <p className="text-slate-500 text-xs mt-1">Vecka-för-vecka-struktur, förenklade övningskort med instruktioner, teknikfilm och digital fotorapport på sekunder.</p>
          </div>
        </div>

        {/* Weeks Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          {REHAB_PLAN.map((weekData) => (
            <button
               key={weekData.week}
               onClick={() => setActiveWeekNum(weekData.week)}
               className={`px-5 py-3 rounded-2xl font-display font-bold text-sm tracking-tight transition-all cursor-pointer focus:outline-none ${
                activeWeekNum === weekData.week
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/15 scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Vecka {weekData.week}: {weekData.title}
            </button>
          ))}
        </div>

        {/* Core content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Week Detail & Exercises (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8">
              
              {/* Header inside week panel */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/60 pb-6 mb-6 gap-4">
                <div>
                  <div className="inline-flex items-center space-x-1 px-2.5 py-1 bg-emerald-100/50 rounded-lg text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest">
                    <span>Vecka {activeWeek.week}</span>
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-2">
                    {activeWeek.title}
                  </h3>
                  <p className="text-slate-500 font-mono text-xs mt-1.5 flex items-center">
                    <Flame className="h-3 w-3 inline mr-1 text-emerald-505" /> Fokus: {activeWeek.focus}
                  </p>
                </div>

                {/* Micro tracker component */}
                <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200/60 flex items-center space-x-4">
                  <div className="relative h-10 w-10 shrink-0 flex items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full transform -rotate-95">
                      <circle cx="20" cy="20" r="16" fill="transparent" stroke="#f1f5f9" strokeWidth="4" />
                      <circle cx="20" cy="20" r="16" fill="transparent" stroke="#059669" strokeWidth="4" 
                        strokeDasharray={`${2 * Math.PI * 16}`}
                        strokeDashoffset={`${2 * Math.PI * 16 * (1 - completionPercentage / 100)}`}
                        className="transition-all duration-500"
                      />
                    </svg>
                    <span className="text-[10px] font-mono font-bold text-slate-800">{completionPercentage}%</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase font-bold text-emerald-600 tracking-wider">Rehab-Tracker</p>
                    <p className="text-[11px] text-slate-500 leading-none mt-1">
                      {completedCount} av {activeWeekExercises.length} klara
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-display italic">
                “{activeWeek.summary}”
              </p>

              {/* Dynamic exercises list */}
              <div className="space-y-4">
                <p className="text-slate-900 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">
                  Övningskort i programmet:
                </p>

                {activeWeek.exercises.map((exercise: Exercise) => {
                  const isDone = !!completedExercises[exercise.name];
                  return (
                    <div
                      key={exercise.name}
                      onClick={() => toggleExercise(exercise.name)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isDone
                          ? "bg-emerald-500/5 border-emerald-500/50 shadow-sm"
                          : "bg-white border-slate-100 hover:border-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3.5">
                          <button className="text-emerald-600 mt-1 focus:outline-none">
                            {isDone ? (
                              <CheckSquare className="h-5 w-5 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <Square className="h-5 w-5 text-slate-400 hover:text-emerald-600 transition-colors" />
                            )}
                          </button>
                          <div>
                            <h4 className={`font-display font-extrabold text-slate-900 text-base ${isDone ? 'line-through text-slate-500' : ''}`}>
                              {exercise.name}
                            </h4>
                            <div className="flex flex-wrap gap-2 sm:gap-4 font-mono text-[11px] text-emerald-700 font-bold mt-1 bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                              <span>Set: {exercise.sets}</span>
                              <span className="text-slate-300">•</span>
                              <span>Reps: {exercise.reps}</span>
                              <span className="text-slate-300">•</span>
                              <span>Tempo: {exercise.tempo}</span>
                            </div>
                            
                            <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                              {exercise.instructions}
                            </p>

                            <div className="mt-2.5 flex items-start space-x-2 bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-[11px] text-slate-700">
                              <span className="font-mono font-bold text-amber-800 uppercase shrink-0">Säkerhetstips:</span>
                              <p className="leading-snug">{exercise.safetyTip}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Why safe and easy to understand explanations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-emerald-50/40 border border-emerald-100 p-6 rounded-3xl space-y-2">
                <h4 className="font-display font-bold text-emerald-900 text-sm uppercase tracking-wider">
                  Hur programmet görs säkert:
                </h4>
                <ul className="text-emerald-800 space-y-2 text-xs leading-relaxed">
                  <li>✔ Fysioterapeutiska grundmallar matas in i systemet.</li>
                  <li>✔ Tydliga ordningstal och strukturer utan komplicerad latin.</li>
                  <li>✔ Manuellt godkända säkerhetsinstruktioner på varje övningskort.</li>
                  <li>✔ Inga medicinska luddiga förkortningar som förvirrar klienten.</li>
                </ul>
              </div>

              <div className="bg-sky-50/40 border border-sky-100 p-6 rounded-3xl space-y-2">
                <h4 className="font-display font-bold text-sky-900 text-sm uppercase tracking-wider">
                  Nybörjaranpassat:
                </h4>
                <ul className="text-sky-800 space-y-2 text-xs leading-relaxed">
                  <li>✔ Övningsvalen startar liggande eller sittande för avlastning.</li>
                  <li>✔ Steg-för-steg progression vecka för vecka så knäet hinner anpassa sig.</li>
                  <li>✔ Alldeles förslag på enklare alternativ vid eventuell irritation eller smärta.</li>
                  <li>✔ Pedagogisk visuell träningsvideo visar rätt teknik enkelt.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Media Showcase (4 Cols: Illustration + Interactive Video Player) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Rehabilitation Illustration Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm overflow-hidden">
              <p className="font-mono text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-3">
                Teknikbild från PulseForge
              </p>
              
              <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-slate-200/60 p-2 shadow-sm mb-4 relative flex items-center justify-center">
                <img
                  src={rehabIllustrationUrl}
                  alt="Knee rehabilitation training exercise illustration"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 right-2.5 bg-emerald-500 text-white rounded-lg px-2 py-1 text-[9px] font-mono tracking-wider font-bold shadow-md">
                  DEMOBILD (PROVA)
                </div>
              </div>

              <h4 className="font-display font-bold text-slate-900 text-base">
                Anpassad övningsgrafik
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Denna färgkodade bild är genererad speciellt för <strong>Active Rehab Studio</strong>. Den visar en säker knäböjsvinkel med stol som stöd och en instruktörs placering, vilket minimerar oron hos nybörjare.
              </p>
            </div>

            {/* 2. Interactive Video Player Mockup */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    SäkerTeknik Video
                  </span>
                </div>
                <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 rounded text-emerald-400 font-bold">
                  30 sek demo
                </span>
              </div>

              {/* Video Screen Screen */}
              <div className="aspect-video bg-black rounded-2xl relative flex flex-col items-center justify-center border border-white/10 overflow-hidden mb-4">
                {/* Real HTML5 Video element or Fallback Image */}
                {videoError ? (
                  <>
                    <img
                      src={getFallbackImageUrl(activeWeekNum)}
                      alt="Rehab and workout training simulation"
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 brightness-75"
                      referrerPolicy="no-referrer"
                    />
                    {/* Futuristic skeletal biomechanics biomechanic tracker overlays */}
                    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-60" viewBox="0 0 400 225">
                      <line x1="130" y1="60" x2="210" y2="125" stroke="#10b981" strokeWidth="3" />
                      <line x1="210" y1="125" x2="170" y2="195" stroke="#10b981" strokeWidth="3" />
                      <circle cx="130" cy="60" r="5" fill="#34d399" />
                      <circle cx="210" cy="125" r="7" fill="#10b981" />
                      <circle cx="210" cy="125" r="14" fill="#10b981" stroke="#10b981" strokeWidth="1" className="animate-ping opacity-40" />
                      <circle cx="170" cy="195" r="5" fill="#34d399" />
                      <text x="230" y="130" fill="#34d399" className="text-[9px] font-mono font-bold tracking-tight">Vinkel: {Math.round(85 + Math.sin((videoProgress === 0 ? 0 : videoProgress) / 8) * 20)}°</text>
                    </svg>
                  </>
                ) : (
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleVideoEnded}
                    onError={() => {
                      console.log("Video source errored, auto-activating interactive storyboard mode.");
                      setVideoError(true);
                    }}
                    playsInline
                    muted
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Cover overlay when not playing or step details info */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                
                {/* Visualizer screen based on video Step */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-20">
                  {videoProgress > 0 ? (
                    <div className="space-y-1.5 pt-4">
                      <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest animate-pulse font-bold">
                        Spelar scen {videoStep + 1}
                      </p>
                      <h5 className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white leading-tight">
                        {videoScenes[videoStep].title}
                      </h5>
                      <p className="text-[10px] text-slate-300 leading-snug px-3 max-w-[240px] mx-auto">
                        {videoScenes[videoStep].instruction}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 flex flex-col items-center">
                      <div className="p-3.5 bg-emerald-500/20 text-emerald-400 hover:scale-105 active:scale-95 duration-200 rounded-full border border-emerald-500/40 cursor-pointer" onClick={toggleVideoPlay}>
                        <Play className="h-6 w-6 fill-emerald-400" />
                      </div>
                      <p className="text-xs font-semibold text-slate-200">Klicka för att spela träningsfilm</p>
                      <p className="text-[10px] text-slate-400 text-center max-w-[200px]">Lugn röst guidar och visar rätt vinkel steg-för-steg</p>
                    </div>
                  )}
                </div>

                {/* Waveform indicator only when playing */}
                {isVideoPlaying && (
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-0.5 h-6 opacity-60 pointer-events-none">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const randHeight = Math.floor(Math.random() * 14) + 4;
                      return (
                        <span 
                          key={i} 
                          className="w-1 bg-emerald-400 rounded-full transition-all duration-300"
                          style={{ height: `${randHeight}px` }}
                        ></span>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 mb-4">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${videoProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>0:{(Math.floor((videoProgress / 100) * 30)).toString().padStart(2, '0')}</span>
                  <span>0:30 sekund</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleResetVideo}
                  className="p-2 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Återställ video"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <button
                  onClick={toggleVideoPlay}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-display font-bold flex items-center space-x-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  {isVideoPlaying ? (
                    <>
                      <Pause className="h-3 w-3 fill-white" />
                      <span>Pausa video</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-white" />
                      <span>Starta video</span>
                    </>
                  )}
                </button>
              </div>

              {/* Audio and Music concept summary inside this player */}
              <p className="text-[10px] text-slate-400 leading-normal mt-4 pt-4 border-t border-slate-800">
                ⭐ <strong>Ljudfilosofi:</strong> Filmen ackompanjeras av vår genererade lugna bakgrundsmusik för fokus (se ljuddel längre ner på sidan). Det lugnar ned klintens andning och optimerar återhämtningsfokus.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
