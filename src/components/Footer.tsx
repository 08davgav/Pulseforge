import { Heart, Mail, MapPin, Phone, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12 mb-10">
          
          {/* Col 1: Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-tr from-emerald-600 to-green-500 text-white p-2 rounded-xl flex items-center justify-center">
                <span className="font-mono text-sm font-bold uppercase">PF</span>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white">
                  PulseForge
                </span>
                <span className="text-[9px] font-mono leading-none tracking-widest text-emerald-400 font-bold uppercase block">
                  Träningsplattform
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Vi bygger sportig fysiologisk struktur och träningsplanering som hjälper människor tillbaka till styrka, balans och resultat, stöttat av moderna digitala verktyg.
            </p>

            <div className="flex items-center space-x-1 py-1 bg-emerald-500/10 rounded-lg px-3 border border-emerald-500/20 w-fit text-[11px] text-emerald-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
              <span>Gymnasie Slutprojekt Gy2026</span>
            </div>
          </div>

          {/* Col 2: Contact Info (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Kontakt & Ort
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Borås, Sverige (Gymnasieskola)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>08davgav@skola.boras.se</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>+46 (0)70-123 45 67 (Fiktivt)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Om Slutprojektet
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Detta är ett tvärvetenskapligt slutprojekt på gymnasienivå som undersöker gränssnittet mellan modern idrottsfysiologi, träningslära och digitalt stöd. 
            </p>
            <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
              <span>Fokus på hälsa, träning & digital spets</span>
              <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            </div>
          </div>

        </div>

        {/* Disclaimer row */}
        <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-800/60 mb-8 space-y-2">
          <p className="text-amber-500 font-mono text-[10px] uppercase font-bold tracking-widest leading-none flex items-center gap-1">
            ⚠️ Medicinsk ansvarsfriskrivning (Disclaimer)
          </p>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            PulseForge är en <strong>fiktiv träningsplattform</strong> och detta webbgränssnitt fungerar enbart som en visuell prototyp för mitt gymnasieprojekt. Inget av innehållet, träningsförslagen, texterna eller ljudklippen ska betraktas som riktiga medicinska råd eller rehabiliterande behandlingar. Vid verkliga skador eller smärta bör du alltid vända dig till legitimerad sjukgymnast, fysioterapeut eller läkare för en personlig utvärdering.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs border-t border-slate-800/80 pt-6">
          <p>© 2026 PulseForge Portfolio. Alla rättigheter förbehållna.</p>
          <div className="flex flex-col sm:items-end gap-1">
            <span className="text-slate-400 text-[10px]">Detta är ett skolprojekt och en prototyp som visar hur tjänsten skulle kunna fungera. Ingen riktig app, databas eller backend används.</span>
            <span className="text-slate-500 text-[9px]">Utvecklad med omsorg för Gy26</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
