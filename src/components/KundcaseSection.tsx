import React from "react";
import { 
  User, 
  Star, 
  Calendar, 
  TrendingUp, 
  FileText, 
  RefreshCcw, 
  Video, 
  Volume2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  HelpCircle
} from "lucide-react";

export default function KundcaseSection() {
  const testimonials = [
    {
      name: "Marcus Andersson",
      age: 27,
      role: "Fotbollsspelare",
      rating: 5,
      comment: "Jag hade svårt att komma tillbaka efter min knäskada men PulseForge gav mig struktur och tydliga träningspass. Det gjorde rehaben mycket enklare att följa.",
      avatarBg: "bg-gradient-to-tr from-emerald-600 to-green-400 text-white",
      initials: "MA"
    },
    {
      name: "Elin Svensson",
      age: 31,
      role: "Löpare & Kontorsarbetare",
      rating: 5,
      comment: "Veckoschemat gjorde att jag visste exakt vad jag skulle göra varje dag. Väldigt enkelt och motiverande.",
      avatarBg: "bg-gradient-to-tr from-teal-600 to-emerald-400 text-white",
      initials: "ES"
    },
    {
      name: "Lucas Berg",
      age: 24,
      role: "Gymmotionär",
      rating: 5,
      comment: "Jag gillar att allt känns tydligt och modernt. Instruktionerna och träningsplanerna gjorde stor skillnad för mig.",
      avatarBg: "bg-gradient-to-tr from-slate-700 to-slate-900 text-white",
      initials: "LB"
    }
  ];

  return (
    <section id="kundcase-marcus" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="kundcase-header">
          <span className="text-xs font-mono font-black tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
            Praktisk Användning
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Kundcase
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Här visar vi hur idrottare och personer fyllda av ambition kan använda <strong>PulseForge</strong> i verkligheten för att övervinna hinder och bygga upp stark, motiverande struktur igen.
          </p>
        </div>

        {/* Informational Pilot/Prototype Ribbon */}
        <div className="bg-emerald-50/80 border border-emerald-100 p-4 rounded-2xl mb-12 flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-emerald-800 text-xs sm:text-sm leading-relaxed">
            <strong>Exempel & Prototyp:</strong> Det här scenariot och plattformen visar ett levande designexempel på hur vår digitala träningsplattform fungerar i praktiken för en slutkonsument. Det illustrerar samspelet mellan klickbara scheman, motiverande träningskort och lättbegripligt ljud- och bildstöd.
          </p>
        </div>

        {/* Layout container for Marcus Andersson Case */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Card left: Marcus background and issues */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-5">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">
                      Marcus Andersson
                    </h3>
                    <p className="text-xs font-mono text-slate-500">27 år • Aktiv Fotbollsspelare</p>
                  </div>
                </div>
                <span className="bg-rose-50 text-rose-700 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg uppercase">
                  Rehab-fas
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Bakgrund
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Marcus spelade fotboll aktivt och drog på sig en allvarlig knäskada under en match. Efter avslutad grundrehabilitering hos sin fysioterapeut fick han äntligen grönt ljus att börja träna upp sig på egen hand, men möttes omedelbart av ett antal utmaningar.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase font-bold text-rose-500 tracking-wider mb-2 flex items-center gap-1">
                    <HelpCircle className="h-3 w-3 shrink-0" /> Marcus svårigheter inför nystarten:
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      "Svårt att veta exakt vilka övningar han kunde göra utan att skada knäet igen.",
                      "Tufft att hålla motivationen uppe när han saknade ett tydligt slutmål.",
                      "Problem att skapa en rimlig struktur och rutin i sin personliga träning.",
                      "Kände sig ständigt otrygg med hur mycket han vågade belasta det läkta knäet."
                    ].map((issue, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="h-5 w-5 bg-rose-50 border border-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mr-2.5 font-mono mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 bg-slate-50/50 -mx-6 -mb-6 p-6 sm:-mx-8 sm:-mb-8 sm:p-8 rounded-b-3xl">
              <span>Målgrupp: Idrottsrehab</span>
              <span className="font-semibold text-emerald-600">PulseForge Atlet</span>
            </div>
          </div>

          {/* Card right: How the service helped */}
          <div className="lg:col-span-7 bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
            
            <div>
              <div className="flex items-center space-x-2 text-emerald-400 border-b border-slate-800 pb-5 mb-5">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="font-display font-semibold text-lg text-white">
                  Hur PulseForge hjälpte Marcus till framgång
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-display">
                PulseForge skapade den perfekta, digitala bron mellan fysioterapeutens rekommendationer och Marcus personliga träningsvardag. Genom att integrera vetenskap, estetik och pedagogisk spets tog systemet fram ett skräddarsytt stöd:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Aid Item 1 */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Tydligt 4-veckors rehabschema</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      En stringent men skonsam röd tråd som eliminerade osäkerheten vid planering.
                    </p>
                  </div>
                </div>

                {/* Aid Item 2 */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Veckoplaner med progression</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Belastning och krav som ökar i en hälsosam takt anpassat efter knäets tålighet.
                    </p>
                  </div>
                </div>

                {/* Aid Item 3 */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Övningskort med instruktioner</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Pedagogiska punkter som förklarar rörelsen på ren svenska istället för latin.
                    </p>
                  </div>
                </div>

                {/* Aid Item 4 */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <RefreshCcw className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Återhämtningsdagar</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Inlagd vila för att låta leder och muskler läka ordentligt utan att stressa.
                    </p>
                  </div>
                </div>

                {/* Aid Item 5 */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Motiverande träningsinnehåll</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      En peppande ton som vänt motgång till regelbunden träningsglädje.
                    </p>
                  </div>
                </div>

                {/* Aid Item 6 */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Video className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Videoguider & ljudstöd</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Korta digitala demonstrationsfilmer och meditativ röstcoaching.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-3">
              <span className="text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                100% säkert &amp; strukturerat träningsstöd
              </span>
              <a 
                href="#kundcase"
                className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-display font-bold group"
              >
                <span>Prova Marcus 4-veckorsprogram</span>
                <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* ----------------- TESTIMONIALS SUBSECTION ----------------- */}
        <div className="mt-16 border-t border-slate-100 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Vad användarna säger om oss
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Våra fiktiva användare vittnar om PulseForge unika, strukturerade och moderna metod att lägga upp sin träning digitalt.
            </p>
          </div>

          {/* Testimonial Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <div 
                key={i}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-5">
                    {Array.from({ length: testi.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    “{testi.comment}”
                  </blockquote>
                </div>

                {/* Profile Avatar & Info Card */}
                <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-50 mt-auto">
                  <div className={`h-11 w-11 rounded-full flex items-center justify-center font-display font-black text-sm shrink-0 transition-transform group-hover:scale-105 duration-300 ${testi.avatarBg}`}>
                    {testi.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-950 text-sm leading-tight transition-colors group-hover:text-emerald-700">
                      {testi.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-500">
                      {testi.age} år • {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[11px] text-slate-400">
            * PulseForge är en prototyp. Svar och recensioner är fiktiva i utbildningssyfte för gymnasiearbete.
          </div>
        </div>

      </div>
    </section>
  );
}
