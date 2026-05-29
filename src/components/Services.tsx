import React, { useState, useEffect } from "react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";
import { 
  Activity, 
  FileText, 
  Dumbbell, 
  Smile, 
  HeartPulse, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  CalendarRange,
  Clock,
  Check,
  RefreshCw,
  Award,
  Info
} from "lucide-react";

// Helper component to render specific Lucide icons based on dynamic key
const ServiceIcon = ({ iconName, className }: { iconName: string; className?: string }) => {
  switch (iconName) {
    case "Activity":
      return <Activity className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Dumbbell":
      return <Dumbbell className={className} />;
    case "Smile":
      return <Smile className={className} />;
    case "HeartPulse":
      return <HeartPulse className={className} />;
    default:
      return <Activity className={className} />;
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES_DATA[0]);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  
  // State for interactive checkbox progress (keyed by serviceId-dayIndex-itemIndex)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Reset day index when service changes
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setActiveDayIndex(0);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get active week plan details safely
  const plan = selectedService.weeklyPlan;
  const currentDay = plan?.schedule[activeDayIndex];
  const totalItems = currentDay?.items.length || 0;

  // Calculate dynamic progress for current day
  const getCheckedCountForDay = () => {
    if (!currentDay) return 0;
    let count = 0;
    currentDay.items.forEach((_, idx) => {
      const key = `${selectedService.id}-${activeDayIndex}-${idx}`;
      if (checkedItems[key]) count++;
    });
    return count;
  };

  const checkedCount = getCheckedCountForDay();
  const completionPercentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const toggleItem = (itemIdx: number) => {
    const key = `${selectedService.id}-${activeDayIndex}-${itemIdx}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetDayProgress = () => {
    if (!currentDay) return;
    const updated = { ...checkedItems };
    currentDay.items.forEach((_, idx) => {
      const key = `${selectedService.id}-${activeDayIndex}-${idx}`;
      updated[key] = false;
    });
    setCheckedItems(updated);
  };

  return (
    <section id="tjanster" className="py-24 bg-[#f8fafc] relative border-b border-slate-200">
      
      {/* Decorative top pulse block */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#059669] uppercase mb-2 flex items-center justify-center gap-1.5">
            <CalendarRange className="h-4 w-4 animate-pulse" /> Interaktiva program
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Våra Kreativa AI-Tjänster & Veckoplaner
          </p>
          <div className="h-1.5 w-20 bg-[#059669] mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Vi hjälper er att paketera ert kunnande på moderna och interaktiva sätt. Genom att kombinera kraften i generativ AI med mänsklig klinisk expertis skapar vi <strong>individanpassade veckoplaner</strong>. Klicka på en tjänst för att utforska din personliga AI-genererade dashboard:
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Checklist selector of 5 services */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-widest block mb-2 px-1">
              VÄLJ DIREKT:
            </span>
            {SERVICES_DATA.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  id={`btn-${service.id}`}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer focus:outline-none ${
                    isSelected
                      ? "bg-white border-[#059669] shadow-md ring-1 ring-emerald-500/20"
                      : "bg-white/65 hover:bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 transition-all ${
                      isSelected
                        ? "bg-[#059669] text-white shadow-md scale-105"
                        : "bg-emerald-50 text-[#059669]"
                    }`}
                  >
                    <ServiceIcon iconName={service.iconName} className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-slate-900 text-sm sm:text-base truncate">
                        {service.title}
                      </h3>
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-ping mr-1"></span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs mt-1 truncate">
                      {service.subtitle}
                    </p>
                    
                    {/* Tiny micro statistics bar for showing interaction */}
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {service.weeklyPlan ? service.weeklyPlan.durationText.split(" ")[0] : "1 Vecka"}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">• Interaktiv dashboard</span>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Aesthetic disclaimer panel */}
            <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-2xl p-4 flex gap-3 text-xs text-[#065f46]">
              <Sparkles className="h-5 w-5 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">AI-Modell-simulering:</strong> Scheman, texter och instruktioner är fiktiva skolarbetsförslag baserade på avancerade LLM-prompter.
              </div>
            </div>
          </div>

          {/* Right: Rich Interactive Dashboard Week Planner */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
            
            {/* 1. Header and description of target service */}
            <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-emerald-50 text-[#059669] rounded-xl border border-emerald-150">
                    <ServiceIcon iconName={selectedService.iconName} className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#059669] uppercase tracking-widest leading-none">
                      Aktiv AI-Tjänst
                    </span>
                    <h3 className="font-display text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100/80 text-emerald-800 text-xs px-3 py-1.5 rounded-full font-bold self-start sm:self-auto flex items-center space-x-1.5">
                  <CalendarRange className="h-3.5 w-3.5 text-[#059669]" />
                  <span>{plan?.durationText}</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {selectedService.description}
              </p>

              {/* Basic bullet points summary */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedService.benefits.map((benefit, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/50 flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Interactive Week Schedule Tab Navigation */}
            {plan && (
              <div className="bg-slate-50 p-4 border-b border-slate-150">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-wider mb-2 px-1">
                  VÄLJ DAG I PROGRAMMET:
                </div>
                
                {/* Responsive Daily Buttons List */}
                <div className="grid grid-cols-4 gap-2">
                  {plan.schedule.map((dayPlan, idx) => {
                    const isActive = activeDayIndex === idx;
                    return (
                      <button
                        key={dayPlan.day}
                        onClick={() => setActiveDayIndex(idx)}
                        className={`py-2 px-1 sm:px-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer focus:outline-none ${
                          isActive
                            ? "bg-white border-[#059669] text-[#059669] font-black shadow-sm ring-1 ring-emerald-500/10"
                            : "bg-slate-100 hover:bg-slate-200/80 text-slate-600 border-slate-200/70"
                        }`}
                      >
                        <span className="block text-[10px] text-slate-400 font-mono font-medium md:mb-0.5 leading-none">
                          DAG {idx * 2 + 1}
                        </span>
                        <span className="text-[11px] sm:text-xs tracking-tight">{dayPlan.day}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Detailed day program container */}
            {currentDay ? (
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Day Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100/50">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">
                        Fokusprogram
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                      <span className="text-[10px] font-mono text-[#059669] font-bold uppercase leading-none">
                        {currentDay.day}
                      </span>
                    </div>
                    <h4 className="font-display font-black text-slate-900 text-base sm:text-lg mt-1">
                      {currentDay.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {currentDay.description}
                    </p>
                  </div>

                  {currentDay.badge && (
                    <div className="shrink-0 max-w-fit bg-emerald-100/80 text-[#047857] text-[10px] font-mono font-black px-2.5 py-1 rounded-lg border border-emerald-200 uppercase tracking-wider self-start sm:self-auto leading-none flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{currentDay.badge}</span>
                    </div>
                  )}
                </div>

                {/* Day check list with Progress bar */}
                <div className="space-y-4">
                  
                  {/* Progress panel */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 px-1">
                    <span>STEG ATT GENOMFÖRA:</span>
                    <span className="text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      {checkedCount} av {totalItems} klara ({completionPercentage}%)
                    </span>
                  </div>

                  {/* Progress gauge animation bar */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all duration-500 ease-out"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>

                  {/* Checkable Items List */}
                  <div className="space-y-2.5">
                    {currentDay.items.map((item, index) => {
                      const itemKey = `${selectedService.id}-${activeDayIndex}-${index}`;
                      const isChecked = !!checkedItems[itemKey];

                      return (
                        <button
                          key={index}
                          onClick={() => toggleItem(index)}
                          className={`w-full text-left p-3.5 rounded-xl border flex items-start space-x-3 transition-all duration-200 cursor-pointer focus:outline-none ${
                            isChecked
                              ? "bg-slate-50 border-emerald-200 text-slate-500 shadow-inner"
                              : "bg-white hover:bg-slate-55 border-slate-200 text-slate-800 hover:border-slate-300 hover:shadow-sm"
                          }`}
                        >
                          <div
                            className={`h-5 w-5 rounded-md border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                              isChecked
                                ? "bg-[#059669] border-[#059669] text-white"
                                : "border-slate-300 text-transparent hover:border-emerald-400"
                            }`}
                          >
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          
                          <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isChecked ? "line-through opacity-65 text-slate-400" : ""}`}>
                            {item}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Celebration / Snyggt jobbat message when completion is 100% */}
                  {completionPercentage === 100 && (
                    <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl flex items-center justify-between text-xs text-[#065f46] animate-fade-in animate-pulse">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-[#059669] shrink-0" />
                        <div>
                          <strong className="font-bold">🎉 Fantastiskt bra jobbat!</strong>
                          <span className="block text-slate-600 mt-0.5">Dina personliga AI-genererade instruktioner för {currentDay.day} är slutförda.</span>
                        </div>
                      </div>
                      <button 
                        onClick={resetDayProgress}
                        className="p-1 px-2.5 bg-white hover:bg-slate-100 rounded-lg text-[10px] font-bold border border-slate-300 text-slate-600 flex items-center gap-1 transition-all"
                      >
                        <RefreshCw className="h-3 w-3" />
                        Återställ
                      </button>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="p-10 text-center flex flex-col justify-center items-center h-full text-slate-400 space-y-2">
                <Info className="h-8 w-8 text-slate-300" />
                <span>Ingen veckoplan tillgänglig för denna tjänst för tillfället.</span>
              </div>
            )}

            {/* 4. Action bottom segment linking to examples below */}
            <div className="mt-2 pt-5 border-t border-slate-150 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50 p-6 rounded-b-3xl">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-sky-500" />
                <span className="text-[11px] font-semibold text-slate-500">
                  {selectedService.id === "rehab-programs"
                    ? "Vill du se full 4-veckors instruktion? Kolla vårt knäcase längre ner!"
                    : selectedService.id === "patient-texts" || selectedService.id === "gym-beginners"
                    ? "Se färdigt omvandlat textmaterial i vår AI-skrivarsektion!"
                    : "Alla våra program genereras live med anpassningsbara prompter."}
                </span>
              </div>
              
              <button
                onClick={() => {
                  if (selectedService.id === "rehab-programs") {
                    scrollToSection("kundcase");
                  } else if (selectedService.id === "patient-texts" || selectedService.id === "gym-beginners") {
                    scrollToSection("ai-texter");
                  } else {
                    scrollToSection("ai-bilder");
                  }
                }}
                className="px-4 py-2 bg-[#059669] hover:bg-emerald-700 text-white text-xs font-display font-bold rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-all shrink-0 cursor-pointer"
              >
                <span>Gå till tillhörande exempel</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
