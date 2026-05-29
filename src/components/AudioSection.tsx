import React, { useState, useRef, useEffect } from "react";
import { Volume2, Play, Pause, Square, Music, Megaphone, CheckCircle, Smartphone } from "lucide-react";

export default function AudioSection() {
  const [isJinglePlaying, setIsJinglePlaying] = useState<boolean>(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState<boolean>(false);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeNodesRef = useRef<any[]>([]);
  const timeoutIdsRef = useRef<any[]>([]);

  // Cleanup audio nodes on unmount
  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, []);

  const stopAllAudio = () => {
    // Stop Web Audio nodes
    activeNodesRef.current.forEach((node) => {
      try {
        node.stop();
      } catch (e) {}
    });
    activeNodesRef.current = [];

    // Clear synthesizers timers
    timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    timeoutIdsRef.current = [];

    if (audioCtxRef.current) {
      audioCtxRef.current.close().then(() => {
        audioCtxRef.current = null;
      });
    }

    // Stop Speech synthesis
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    setIsJinglePlaying(false);
    setIsVoicePlaying(false);
  };

  // Web Audio API Ambient Synthesizer
  const playCalmJingle = () => {
    stopAllAudio();
    setIsJinglePlaying(true);

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) {
        setIsJinglePlaying(false);
        return;
      }

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master output filter (to keep it soft and warm, low pass)
      const biquadFilter = ctx.createBiquadFilter();
      biquadFilter.type = "lowpass";
      biquadFilter.frequency.setValueAtTime(380, ctx.currentTime); // Cut high frequencies for healing vibe
      biquadFilter.Q.setValueAtTime(1, ctx.currentTime);
      biquadFilter.connect(ctx.destination);

      // We will play 3 soft ambient chords in a beautiful 14-second sequence:
      // Chord 1: Cmaj9 (C3, E3, G3, B3, D4) at 0s
      // Chord 2: Fmaj9 (F3, A3, C4, E4, G4) at 4.5s
      // Chord 3: Gsus4 (G3, C4, D4, G4) at 9s

      const chords = [
        {
          time: 0,
          duration: 4.5,
          notes: [130.81, 164.81, 196.00, 246.94, 293.66], // C3, E3, G3, B3, D4
        },
        {
          time: 4.5,
          duration: 4.5,
          notes: [174.61, 220.00, 261.63, 329.63, 392.00], // F3, A3, C4, E4, G4
        },
        {
          time: 9.0,
          duration: 5.0,
          notes: [196.00, 261.63, 293.66, 392.00], // G3, C4, D4, G4
        },
      ];

      chords.forEach((chord) => {
        const playTime = ctx.currentTime + chord.time;

        const chordGain = ctx.createGain();
        chordGain.gain.setValueAtTime(0, playTime);
        // Beautiful calm volume envelope: slow attack, long release
        chordGain.gain.linearRampToValueAtTime(0.12, playTime + 1.8); // 1.8s attack
        chordGain.gain.setValueAtTime(0.12, playTime + chord.duration - 1.5);
        chordGain.gain.linearRampToValueAtTime(0, playTime + chord.duration); // Release

        chordGain.connect(biquadFilter);

        chord.notes.forEach((freq) => {
          const osc = ctx.createOscillator();
          osc.type = "triangle"; // Triangles are gentlere/warmer than sines
          osc.frequency.setValueAtTime(freq, playTime);

          // Add subtle pitch vibration to make it sound cosmic and organic
          const lfoNode = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfoNode.frequency.value = 0.5; // slow vibration
          lfoGain.gain.value = 1.2; // depth
          lfoNode.connect(lfoGain);
          lfoGain.connect(osc.frequency);

          osc.connect(chordGain);
          
          lfoNode.start(playTime);
          osc.start(playTime);
          
          osc.stop(playTime + chord.duration);
          lfoNode.stop(playTime + chord.duration);

          activeNodesRef.current.push(osc);
          activeNodesRef.current.push(lfoNode);
        });
      });

      // Automated stop state when finished
      const totalTimeMs = 14000;
      const timeoutId = setTimeout(() => {
        setIsJinglePlaying(false);
        stopAllAudio();
      }, totalTimeMs);
      timeoutIdsRef.current.push(timeoutId);

    } catch (e: any) {
      console.error("Audio Context initialization failed", e);
      setIsJinglePlaying(false);
    }
  };

  // Speech Synthesis for Swedish voiceover
  const playVoiceoverSpeech = () => {
    stopAllAudio();
    setIsVoicePlaying(true);
    setSpeechError(null);

    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSpeechError("Röstsyntes stöds inte i din webbläsare. Visar ljudvåg simulerat.");
      // Start a mockup simulator sweep as fallback
      simulateVoiceoverFallback();
      return;
    }

    const voiceText = "PulseForge. Vi skapar individanpassat träningsmaterial med hjälp av intelligenta planeringsmetoder. Från pedagogiska rehabträningsprogram till lätthanterliga instruktionstexter. Allt material är anpassat, förfinat och strukturerat för din säkerhet. PulseForge. Bygger styrka, struktur och resultat.";

    const utterance = new SpeechSynthesisUtterance(voiceText);
    utterance.lang = "sv-SE";
    // Calming low pitch and slow rate (meditativt)
    utterance.rate = 0.8; 
    utterance.pitch = 0.85;

    utterance.onend = () => {
      setIsVoicePlaying(false);
    };

    utterance.onerror = (e) => {
      console.error("Speech Error", e);
      // Trigger mockup visual fallback directly
      simulateVoiceoverFallback();
    };

    window.speechSynthesis.speak(utterance);
  };

  const simulateVoiceoverFallback = () => {
    setIsVoicePlaying(true);
    setTimeout(() => {
      setIsVoicePlaying(false);
    }, 12000);
  };

  return (
    <section id="ljud-musik" className="py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-2">
            Auditiva element
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ljudidéer & Voiceover (Meditativt)
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Hälsa handlar om att sänka hjärtfrekvensen och finna trygghet. PulseForge skapar lugnande ljudproduktioner som ska följa övningarna. Prova att spela upp våra fiktiva ljudkomponenter under.
          </p>
        </div>

        {/* Player Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Calming focused synthesizer jingle */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Music className="h-40 w-40 text-emerald-600" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2.5 text-emerald-600 mb-4">
                <Music className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Mjuk Bakgrundsjingel</span>
              </div>

              <h3 className="font-display text-xl font-extrabold text-slate-900">
                10–20 Sekunds Ljudidé
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Genereras live i din webbläsare med äkta <strong>Web Audio API-synthesizer</strong>. Jingeln spelas upp med en mjuk triangelvåg och ett starkt lågpassfilter på under 380Hz för att ge en dämpad, mjuk och behaglig andningston utan skarp diskant.
              </p>

              {/* Animated Equalizer Waveform while Jingle is playing */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 my-6 h-18 flex items-center justify-around gap-1">
                {isJinglePlaying ? (
                  Array.from({ length: 30 }).map((_, i) => {
                    // Random scale height for visualizer effect
                    const heightValue = Math.floor(Math.random() * 32) + 6;
                    return (
                      <span 
                        key={i} 
                        className="w-1 bg-emerald-500 rounded-full transition-all duration-300"
                        style={{ height: `${heightValue}px` }}
                      ></span>
                    );
                  })
                ) : (
                  <div className="text-center w-full text-slate-400 text-xs flex items-center justify-center space-x-2">
                    <Volume2 className="h-4 w-4" />
                    <span>Ljud redo. Tryck på Spela.</span>
                  </div>
                )}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-6 mt-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-black uppercase tracking-wider">
                Melodi: Cmaj9 → Fmaj9 → Gsus4
              </span>

              <div className="flex space-x-2">
                {isJinglePlaying ? (
                  <button
                    onClick={stopAllAudio}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <Square className="h-3 w-3 fill-slate-700" />
                    <span>Stoppa</span>
                  </button>
                ) : (
                  <button
                    onClick={playCalmJingle}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow-md shadow-emerald-500/15 transition-all cursor-pointer"
                  >
                    <Play className="h-3.5 w-3.5 fill-white" />
                    <span>Spela Jingel</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Box 2: Voiceover Speech synthesis */}
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Megaphone className="h-40 w-40 text-emerald-600" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2.5 text-emerald-600 mb-4">
                <Megaphone className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Ljudreklam Voiceover</span>
              </div>

              <h3 className="font-display text-xl font-extrabold text-slate-900">
                Säkerhet & Välmående Voiceover
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Vårt meddelande talar till djupet av kroppen. Om din webbläsare stöder det, läser en trygg och lugn svensk röst upp vårt kvalitetssäkrade manus för <strong>Active Rehab Studio</strong>.
              </p>

              {/* Animated Equalizer Waveform while Speech Voice is playing */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 my-6 h-18 flex items-center justify-around gap-1">
                {isVoicePlaying ? (
                  Array.from({ length: 30 }).map((_, i) => {
                    const h = Math.floor(Math.sin((i / 5) * (Date.now() / 150)) * 18) + 20;
                    return (
                      <span 
                        key={i} 
                        className="w-1 bg-emerald-500 rounded-full transition-all duration-300"
                        style={{ height: `${Math.max(4, h)}px` }}
                      ></span>
                    );
                  })
                ) : (
                  <div className="text-center w-full text-slate-400 text-xs flex items-center justify-center space-x-2">
                    <Megaphone className="h-4 w-4" />
                    <span>Röstmanus klart. Tryck för inläsning.</span>
                  </div>
                )}
              </div>

              {speechError && (
                <p className="text-amber-600 text-[10px] leading-tight mt-1 bg-amber-50 px-2.5 py-1.5 rounded-lg">
                  {speechError}
                </p>
              )}
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-6 mt-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-black uppercase tracking-wider">
                Känsla: Trygg & Mjuk röst
              </span>

              <div className="flex space-x-2">
                {isVoicePlaying ? (
                  <button
                    onClick={stopAllAudio}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <Square className="h-3 w-3 fill-slate-700" />
                    <span>Stoppa</span>
                  </button>
                ) : (
                  <button
                    onClick={playVoiceoverSpeech}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow-md shadow-emerald-500/15 transition-all cursor-pointer"
                  >
                    <Play className="h-3.5 w-3.5 fill-white" />
                    <span>Läs Upp Manus</span>
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Audio design tips */}
        <div className="bg-emerald-50/40 border border-emerald-100 p-6 rounded-3xl mt-8">
          <p className="text-emerald-950 text-xs font-bold font-display uppercase tracking-wider">
            Varför valet av mjukt ljud och röstläge spelar roll under rehab:
          </p>
          <p className="text-slate-600 text-xs leading-relaxed mt-1">
            Många träningsfilmer har hög, energisk musik som ökar adrenalinet. Det fungerar bra för explosiv styrketräning, men under noggrann rehabiliterande knäträning och stresslindring behöver kroppen motsatsen. Genom att integrera lugnt, monotont ljud och en faderslik röst kan patienten lättare hålla fokus, spänna rätt muskelfibrer och sänka sitt allmänna stresspåslag.
          </p>
        </div>

      </div>
    </section>
  );
}
