import { 
  Brain, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb, 
  PenTool, 
  CheckCircle2, 
  HelpCircle, 
  Settings, 
  UserCheck 
} from "lucide-react";

export default function AiUsage() {
  const steps = [
    {
      question: "Vilka AI-verktyg använde du?",
      answer: "Jag har använt avancerade generativa verktyg för att lägga den digitala grunden till projektet. ChatGPT och Google Gemini användes som bollplank för att spåna fram och strukturera träningslära samt översätta klinisk jargong. För logotypen och träningsgrafiken samverkade jag med bildmodellen Google Imagen i omgångar för att nå den sportiga, lugna känslan. Jag integrerade även Web Audio API och inbyggd talsyntes för att ge prototypen ett levande ljudstöd direkt i webbläsaren.",
      icon: Brain,
      bgColor: "bg-emerald-50 text-emerald-600 border-emerald-100/50"
    },
    {
      question: "Vad använde du dem till?",
      answer: "Jag använde verktygen för att generera rådata och schemastrukturer för rehabprogrammet, skriva instruktionsmanus till vår meditationsröst och skapa den grafiska formgivningen (logga och illustration). Genom att kombinera genererad text med interaktiv kod har jag skapat en upplevelse där användaren klickar och engageras, snarare än att bara läsa ett statiskt PDF-dokument.",
      icon: PenTool,
      bgColor: "bg-teal-50 text-teal-600 border-teal-100/50"
    },
    {
      question: "Vad blev mest lyckat?",
      answer: "Det mest lyckade var hur otroligt bra verktygen var på att snabbt koka ner komplexa akademiska rön och tunga latinska facktermer till pedagogiska, varma och inbjudande vardagsinstruktioner. Det underunderlättar enormt för att öka patienternas följsamhet och sänka stressnivån vid en skada. Bildgenereringen lyckades också genast pricka in rätt lugnande och stöttande atmosfär för knästödsböjen.",
      icon: CheckCircle2,
      bgColor: "bg-green-50 text-green-600 border-green-100/50"
    },
    {
      question: "Vad behövde du förbättra själv?",
      answer: "AI tenderar ofta att skriva i en väldigt säljfokuserad, tjatig och nästan överdrivet upprymd ton med en hel del floskler. För att behålla trovärdigheten som en seriös fysiologisk plattform fick jag rensa bort massvis med 'AI-slop', ta bort onödiga utropstecken och dämpa språket så att det känns professionellt, sakligt och tryggt.",
      icon: AlertTriangle,
      bgColor: "bg-amber-50 text-amber-600 border-amber-100/50"
    },
    {
      question: "Vilken del krävde mest eget tänkande?",
      answer: "Det absolut mest utmanande var den fysiologiska kvalitetssäkringen och logiken. En maskin vet inte i praktiken hur ett inflammerat knä eller en korrigerad korsbandsskada reagerar på belastning. Jag fick tänka kritiskt kring övningsföljden, designa progressionen från helt avlastade liggande rörelser (vecka 1) till stående belastning (vecka 4) och manuellt justera antalet set, reps och vilodagar. Även den interaktiva uppbyggnaden med flikar, ljudvisualiseringar och videospelarens tidslinje krävde gedigen kodplanering och eget fysiologiskt omdöme.",
      icon: UserCheck,
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100/50"
    },
    {
      question: "Vad blev dåligt först, och hur förbättrade du det?",
      answer: "Initialt blev bilderna och videokonceptet väldigt stela, abstrakta och innehöll felaktiga varumärkesnamn som 'ReForm AI Studio'. Dessutom saknade träningsfilmerna äkta visualiseringar av människor i rörelse, vilket fick dem att kännas som trasiga systemskisser. Jag tog ett aktivt beslut att rensa bort alla gamla luddiga textmallar och programmerade istället in professionella rörliga videoströmmar direkt i spelaren. Det lyfte upplevelsen enormt och gav PulseForge den levande, sportiga känsla och trovärdighet som krävs för en riktig plattform.",
      icon: Settings,
      bgColor: "bg-violet-50 text-violet-600 border-violet-100/50"
    }
  ];

  return (
    <section id="sa-anvande-jag-ai" className="py-24 bg-white relative overflow-hidden text-slate-800">
      
      {/* Visual background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-emerald-600 uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
            Rapportdel &amp; Process
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Så här gjorde jag
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-sm sm:text-base leading-relaxed">
            Som en del av mitt gymnasiearbete redovisar jag här öppet och personligt hur digital teknik och generativa verktyg har integrerats i arbetsprocessen för att bygga <strong>PulseForge</strong>.
          </p>
        </div>

        {/* 2x3 grid with questions and personal, reflective depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-100 hover:border-emerald-500/25 hover:bg-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-2xl w-fit border transition-transform group-hover:scale-110 duration-300 ${step.bgColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-black text-slate-950 text-base sm:text-lg tracking-tight group-hover:text-emerald-700 transition-colors">
                    {step.question}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighting Swedish gymnasie exam context block */}
        <div className="bg-gradient-to-r from-neutral-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-2xl transform translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-300">
              <Lightbulb className="h-3.5 w-3.5" />
              <span>Sammanfattning</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              Kritiskt tänkande och metodik framför allt
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Arbetet med PulseForge visar att smarta digitala assistenter är utmärkta redskap för att öka takten i konceptutveckling och koda fram interaktivitet. Men ryggraden i projektet kommer helt från <strong>mänskligt fysiologiskt omdöme, noggranna källkritiska justeringar och personlig vilja</strong>. 
              <br /><br />
              Genom att dämpa 'AI-slop', granska tekniken bakom varje enskilt träningsmoment och lägga till mina egna erfarenheter har jag skapat en komplett, trovärdig inlämning som känns som en äkta digital träningscoach.
            </p>
          </div>
        </div>

        {/* Short discrete prototype banner directly inside section */}
        <div className="mt-12 text-center p-4 bg-slate-50 border border-slate-100 rounded-2xl max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs leading-relaxed">
            ℹ️  <strong>Viktig information:</strong> Detta är ett stolt skolarbete (gymnasieprojekt) och en visuell designprototyp. Sidan har ingen koppling till externa databaser, personregister eller medicinska journaler.
          </p>
        </div>

      </div>
    </section>
  );
}
