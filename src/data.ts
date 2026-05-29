import { Service, RehabWeek, StoryboardLine, AiTextPreset } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "rehab-programs",
    title: "Rehab & träningsprogram",
    subtitle: "Säker, progressiv och strukturerad träning",
    description: "Vi tar fram individanpassade och motiverande träningsprogram. Genom tydlig struktur och fysiologiskt korrekta övningar skapar vi trygga steg som hjälper dig att komma tillbaka efter skador eller öka din prestation.",
    iconName: "Activity",
    benefits: [
      "Vecka-för-vecka progression",
      "Kombinerar beprövad fysiologi med digital precision",
      "Anpassade säkerhetsinstruktioner"
    ],
    weeklyPlan: {
      durationText: "4-veckors rehabprogram (Aktiv Knärehab)",
      introText: "Genom att kombinera fysiologisk vetenskap med mjuk, personlig progression guidar vi dig genom en säker, smärtfri och funktionell återhämtning dag för dag.",
      schedule: [
        {
          day: "Måndag",
          title: "Lätt uppvärmning & Aktivering",
          description: "Fokus ligger på att lugna ner det skadade knäet och öka blodcirkulationen genom mild fysiologisk stimulering.",
          badge: "Pass 1 • 15 min",
          items: [
            "Sittande lårspänning (Quad Sets): 3 set x 10 repetitioner (håll 5 sek)",
            "Ankelpumpningar för att effektivt transportera bort vätskeansamling (30 reps)",
            "Granska den pedagogiska instruktionsbilden för att säkerställa 100% korrekt vinkel och teknik"
          ]
        },
        {
          day: "Onsdag",
          title: "Stabilitet & Muskelkontakt",
          description: "Vi väcker kroppens djupa stabiliseringsmuskler och tränar balansen under trygga, kontrollerade former.",
          badge: "Pass 2 • 20 min",
          items: [
            "Enbensbalans på stabilt underlag (görs nära vägg/stöd): 3 x 30 sekunder per ben",
            "Sittande knäböj med glidande strumpa på plant, halt golv: 3 set x 10 reps",
            "Mjuk rörlighet: sträck baksidan utan att forcera eller orsaka huggande smärta"
          ]
        },
        {
          day: "Fredag",
          title: "Kombination & Funktionell Belastning",
          description: "Mild, stående teknikträning som bygger upp knäleden inför vardagsaktiviteter.",
          badge: "Pass 3 • 25 min",
          items: [
            "Kroppsvikt knäböj till stabil stol (Box Squats) med fokus på raka knän: 3 set x 8 reps",
            "Liggande musslan (höfthållning och sätesaktivering): 3 set x 12 reps per sida",
            "Skriv in dagens upplevda ansträngning i appen för att kalibrera din nästa progression"
          ]
        },
        {
          day: "Söndag",
          title: "Aktiv återhämtning & Nervsystem",
          description: "Aktiv vila är mjukgörande för knät. Vi fokuserar på återhämtning och djup rörlighet.",
          badge: "Reflektion • 10 min",
          items: [
            "Sittande eller liggande mjuk vad- och baksidastretch: 2 set x 45 sekunder",
            "Andas djupt med magen till vår rofyllda ljudguide 'Rörlighet & återhämtning' (10 min)",
            "Placera benet i högläge på kuddar och svalka vid behov med mjuk gelkompress"
          ]
        }
      ]
    }
  },
  {
    id: "patient-texts",
    title: "Patient- & hälsoinformation",
    subtitle: "Tydliga träningsråd utan svårfångad jargong",
    description: "Svåra medicinska termer om stress, ryggont eller överbelastning översätts till lättlästa och motiverande instruktioner. Det sänker oron och ökar förståelsen inför rehabiliteringsresan.",
    iconName: "FileText",
    benefits: [
      "Fritt från krånglig fackjargong",
      "Strukturerade, enkla punktlistor",
      "Ökar trygghet och följsamhet"
    ],
    weeklyPlan: {
      durationText: "1-veckas återhämtningsplan (Stress & Fysiologisk vila)",
      introText: "Vi hjälper dig att förstå vad som händer i kroppen vid överbelastning och hur du effektivt återhämtar dig med enkla, handfasta råd steg för steg.",
      schedule: [
        {
          day: "Måndag",
          title: "Förståelse: Vad händer i kroppen?",
          description: "Lär dig känna igen kroppens inbyggda larmsystem utan att bli skrämd av symptomen.",
          badge: "Teori • 5 min",
          items: [
            "Läs det förenklade infobladet 'När kroppen går på högvarv' (bortklippt tung fackjargong)",
            "Kartlägg dina tre vanligaste fysiska stressreaktioner (t.ex. spända axlar, snabb andning)",
            "Identifiera underliga termer på din remiss och översätt dem med vår ordlista"
          ]
        },
        {
          day: "Onsdag",
          title: "Andningsteknik för det lugna systemet",
          description: "Hur ett djupt andetag lurar hjärnan att stänga av den akuta tunga stressresponsen och sänka pulsen.",
          badge: "Fysiopass • 8 min",
          items: [
            "Följ instruktionen för 'Andas i fyrkant' (Box breathing) i 4 minuter",
            "Mät pulsen före och efter andningsövningen för att se den svarta-på-vitt effekten",
            "Skapa en påminnelse i mobilen för tre korta mikropauser under morgondagen"
          ]
        },
        {
          day: "Fredag",
          title: "Aktiv vila & Avkoppling av sinnena",
          description: "Sömn och vila är medicinen kroppen behöver. Vi bryter det ständiga informationsflödet.",
          badge: "Praktik • 15 min",
          items: [
            "Skapa en skärmfri 'lugn zon' i sovrummet eller 1 timme före läggdags",
            "Testa att ta en 15 minuters raska promenad helt utan hörlurar eller podcast i öronen",
            "Gör en mild nackavslappning: rulla axlarna bakåt 10 gånger med djupa utandningar"
          ]
        },
        {
          day: "Söndag",
          title: "Reflektion & Planering framåt",
          description: "Befäst goda mönster och planera för en mer balanserad vecka.",
          badge: "Uppföljning • 10 min",
          items: [
            "Fyll i den digitala hälsoskattningen i din profil för att synliggöra din återhämtningsresa",
            "Skriv ner en konkret sak du ska säga 'nej' till nästa vecka för att spara energi",
            "Lyssna på den korta, rogivande andningsjingeln för att mentalt runda av veckan"
          ]
        }
      ]
    }
  },
  {
    id: "gym-beginners",
    title: "Strukturerade veckoplaner för gymnybörjare",
    subtitle: "Sänk tröskeln till en aktiv livsstil",
    description: "Tydliga välkomstguider, maskininstruktioner och uppvärmningsserier speciellt utformade för dig som är ny på gymmet. Vi skapar inbjudande och pedagogiska planer som dämpar osäkerhet.",
    iconName: "Dumbbell",
    benefits: [
      "Inbjudande och icke-dömande tonfall",
      "Lättbegripliga och pedagogiska bilder",
      "Ökar trygghet inför första passet"
    ],
    weeklyPlan: {
      durationText: "1-veckas gymplan (Helkroppsprogram)",
      introText: "Att börja träna ska inte kännas krångligt. Denna veckoplan tar dig i handen och visar hur säkra, guidade maskiner snabbt ger resultat.",
      schedule: [
        {
          day: "Måndag",
          title: "Hälsa på gymmet & Orientera dig",
          description: "Syftet är bara att göra dig bekant med gymmet och sänka eventuell ångest inför det okända.",
          badge: "Sänk tröskeln • 15 min",
          items: [
            "Besök gymmet, häng in jackan och kika var maskiner, toaletter och vattenkranar finns",
            "Sätt dig på en motionscykel och trampa i lugnt tempo i 10 minuter under lätt samtal",
            "Hämta ut ditt välkomstkort i receptionen och känn absolut ingen press att lyfta tungt idag"
          ]
        },
        {
          day: "Onsdag",
          title: "Introduktion till fasta maskiner",
          description: "Vi använder stabila maskiner där slagbanan är förutbestämd vilket gör det helt omöjligt att göra fel.",
          badge: "Pass 1 • 25 min",
          items: [
            "Sittande maskinrodd (stärker rygg och hållning): 3 set x 10 bekväma repetitioner",
            "Sittande bröstpress (bra för armar och axlar): 3 set x 10 repetitioner på låg vikt",
            "Benpress i maskin med brett fotstöd (stärker lår och rumpa): 2 set x 12 bekväma reps"
          ]
        },
        {
          day: "Fredag",
          title: "Bål, balans & Mjuk rörelse",
          description: "Vi tränar kroppens kärna - magen och ryggen - vilket minskar trötthet vid kontorsarbete.",
          badge: "Pass 2 • 20 min",
          items: [
            "Plankan (på knän eller tår, du bestämmer!): Håll 3 gånger så länge du orkar (t.ex. 20 sek)",
            "Stående balanstest: lyft ena foten och försök hålla balansen i 20 sekunder per sida",
            "Skriv ner dina vikter och inställningar i din profil för att enkelt komma ihåg dem till nästa gång"
          ]
        },
        {
          day: "Söndag",
          title: "Aktiv rörlighet & Vardagsmotion",
          description: "Låt musklerna återhämta sig och bli starkare. Träning bygger på balansen mellan aktivitet och vila.",
          badge: "Återhämtning • 30 min",
          items: [
            "Ta en skön utomhuspromenad i ditt eget favorittempo (cirka 20-30 minuter)",
            "Mjuk stretching för nacke, axlar och bröstmuskler efter veckans fina framsteg",
            "Läs igenom nästa veckas maskinguide i lugn och ro i din profil"
          ]
        }
      ]
    }
  },
  {
    id: "dental-campaigns",
    title: "Hälsomaterial & kampanjer för unga",
    subtitle: "Gör borstning och dagliga rutiner till ett äventyr",
    description: "Vi skapar engagerande, pedagogiska borstningsguider och dagliga uppdrag för barn och ungdomar. Den digitala designen paketerar hälsofördelar till spännande äventyr som lockar till hälsosamma vanor.",
    iconName: "Smile",
    benefits: [
      "Anpassat för olika åldersgrupper",
      "Pedagogiska borstningslekar",
      "Förenklad information om socker och hål"
    ],
    weeklyPlan: {
      durationText: "Veckoplan för lekfull tandborstning (små och stora hjältar)",
      introText: "Glöm tjat och tårar vid handfatet. Nu förvandlar vi borstningen till ett färggrant rymdäventyr där varje tand borstas ren med rymdlasers!",
      schedule: [
        {
          day: "Måndag",
          title: "Uppdrag: Rymdlasern laddas!",
          description: "Vi introducerar speltänket (gamification) i badrummet. Tandborsten blir en rymdlaser.",
          badge: "Morgon & Kväll",
          items: [
            "Läs den korta sagan om 'Kapten Karies som flyr rymdlasern' för ditt barn innan borstning",
            "Borsta metodiskt i glada yttre cirklar i cirka 2 minuter med hjälp av det digitala stoppuret",
            "Klistra upp det första glänsande planet-märket på framstegskartan på badrumsspegeln"
          ]
        },
        {
          day: "Onsdag",
          title: "Tandtrådsdetektiven på hemligt spår",
          description: "Gör rent på de dolda ställena där trollen gömmer sig. Lär barnet att undersöka.",
          badge: "Detektivjakt • 5 min",
          items: [
            "Läs kapitel två: 'Tandtrådens hemliga underjordiska kryp-tunnlar'",
            "Låt barnet leka detektiv med en ficklampa och kika på de spegelblanka, rena tänderna",
            "Dra försiktigt tandtråd eller borsta mellan de bakre tänderna med stor försiktighet"
          ]
        },
        {
          day: "Fredag",
          title: "Hitta den gömda sockerfällan",
          description: "Utbilda barnet på ett enkelt sätt om socker, frätande syror och lördagsgodisets guldregler.",
          badge: "Tandsmart val",
          items: [
            "Titta på vår färgglada lista över råd och mat som är tändernas bästa riddare",
            "Förbered helgens godismys genom att prata om varför det är bäst att äta allt på en gång istället för hela dagen",
            "Dansa 'Tandborstdansen' tillsammans under handfatets glada 2-minutersborstning!"
          ]
        },
        {
          day: "Söndag",
          title: "Tandhjältens stora diplomceremoni",
          description: "Befäst vanan genom stor uppmuntran och välförtjänt beröm.",
          badge: "Veckofinal",
          items: [
            "Fira att spegelkartan nu är fylld med glittriga rymdmärken efter en perfekt genomförd vecka",
            "Ladda ner och skriv ut det färgsprakande diplomet 'Certifierad Rymdtandhjälte'",
            "Ta ett glatt familjefoto med era skinande rena leenden"
          ]
        }
      ]
    }
  },
  {
    id: "vet-materials",
    title: "Tränings- & rehabstöd för djurägare",
    subtitle: "Trygga råd till oroliga hund- och kattägare",
    description: "Strukturerad information och fysiologisk återhämtning efter ingrepp eller vid rehabträning för sällskapsdjur. Komplicerade skötselsteg redovisas på ett empatiskt, tryggt och pedagogiskt sätt.",
    iconName: "HeartPulse",
    benefits: [
      "Tydliga doseringar och sårvårdssteg",
      "Svar på vanliga frågor efter ingrepp",
      "Mjukt och professionellt bemötande"
    ],
    weeklyPlan: {
      durationText: "Rehab-stöd: Första kritiska veckan hemma (Efter ingrepp)",
      introText: "När din fyrbenta vän kommer hem efter operation är det viktigt att minimera stress och häftiga rörelser. Här är husses och mattes trygga skötselguide.",
      schedule: [
        {
          day: "Måndag",
          title: "Hemkomst, tystnad & Sårkontroll",
          description: "Dina viktigaste uppgifter vid hemkomst är att ge djuret lugn och ro samt övervaka narkosens avklingning.",
          badge: "Dag 1 • Lugn & ro",
          items: [
            "Bädda i ordning en dragfri, varm och tyst sovplats nära golvet (undvik att djuret hoppar upp i soffor)",
            "Kontrollera sårstygnen snyggt och se till att hunden/katten inte kommer åt att slicka eller naga",
            "Erbjud en mycket liten mängd foder och färskt ljummet vatten först efter att djuret är helt vaket"
          ]
        },
        {
          day: "Onsdag",
          title: "Säker rastning & Kontrollerad rörelse",
          description: "Häftiga rörelser och lek måste undvikas, men korta, lugna koppelpromenader gynnar rörligheten.",
          badge: "Dag 3 • Strikt koppel",
          items: [
            "Rasta hunden uteslutande i kort, stramt koppel för snabba kisspauser (max 5 minuter per gång, inga trappor)",
            "Jämför sårets rodnad och svullnad med klinikens pedagogiska referensbilder på normal läkning",
            "Ge ordinerade smärtlindrande tabletter exakt enligt det färgkodade doseringsschemat"
          ]
        },
        {
          day: "Fredag",
          title: "Hjärngympa utan fysiskt bus",
          description: "Håll djuret mentalt sysselsatt för att dämpar rastlöshet under konvalescensen.",
          badge: "Dag 5 • Nosaktivering",
          items: [
            "Gör en mild nosaktivering: strö foderkulor i en hopvikt handduk för lugnt sökande på marknivå",
            "Se över kragen eller krattan så att den inte orsakat skavsår i ljumskar eller armhålor",
            "Kontakta kliniken via den digitala bocklistan om temperaturen stiger eller såret vätskar sig"
          ]
        },
        {
          day: "Söndag",
          title: "Veckoavstämning & Framstegskontroll",
          description: "Dags att granska veckans rörlighet och lämna statusrapport till din veterinär.",
          badge: "Dag 7 • Sammanfattning",
          items: [
            "Ta ett tydligt foto på operationssåret i bra ljus för att ha redo inför veckans uppföljningssamtal",
            "Fyll i den digitala må-bra-skattningen av din hunds/katts allmäntillstånd, aptit och rörelsemönster",
            "Få en sammanfattning och bekräftelse från vårt rehabstöd för att du har varit en fantastisk djurägare!"
          ]
        }
      ]
    }
  }
];

export const REHAB_PLAN: RehabWeek[] = [
  {
    week: 1,
    title: "Minska svullnad & aktivera",
    focus: "Smärtlindring & neuromuskulär kontroll",
    summary: "Fokus ligger på att lugna ner det skadade knäet, öka blodcirkulationen och återfå förmågan att spänna lårmuskeln (quadriceps) utan smärta.",
    exercises: [
      {
        name: "Sittande lårspänning (Quad Sets)",
        reps: "10 spänningar x 5 sekunder",
        sets: "3 set",
        tempo: "Statiskt håll i 5 sekunder",
        instructions: "Sitt på golvet med raka ben. Pressa knävecket försiktigt ner mot underlaget genom att spänna framsidan av låret. Håll spänningen.",
        safetyTip: "Övningen ska inte göra ont. Om det smärtar i knäskålen, spänn mjukare."
      },
      {
        name: "Ankelpumpning",
        reps: "30 repetitioner",
        sets: "3-4 set under dagen",
        tempo: "Lugnt och kontrollerat",
        instructions: "Sitt eller ligg ner. Sträck ut foten och dra sedan tårna uppåt mot näsan så långt du kan. Upprepa i ett lugnt tempo.",
        safetyTip: "Hjälper till att transportera bort svullnad från knät."
      },
      {
        name: "Sittande knäböj med glid (glidbräda/strumpa)",
        reps: "10-12 repetitioner",
        sets: "3 set",
        tempo: "3 sekunder ut, 3 sekunder in",
        instructions: "Sitt på en stol med en strumpa på foten på ett halt golv. Glid långsamt foten bakåt under stolen så långt som smärtan tillåter. Glid sedan fram igen.",
        safetyTip: "Forcera aldrig rörelsen om det tar emot kraftigt eller hugger."
      }
    ]
  },
  {
    week: 2,
    title: "Stabilitet & rätt teknik",
    focus: "Balans, proprioception och lätta rörelser",
    summary: "Nu introducerar vi stående övningar där vi övar upp knäets förmåga att hålla sig stabilt och inte falla inåt under belastning.",
    exercises: [
      {
        name: "Kroppsvikt knäböj till låda (Box Squats)",
        reps: "8-10 repetitioner",
        sets: "3 set",
        tempo: "3 sekunder ner, 1 sekund upp",
        instructions: "Stå axelbrett framför en stabil stol eller låda. Skjut bak höften och sätt dig mjukt ner tills du nuddar sitsen, pressa dig sedan direkt upp till stående.",
        safetyTip: "Håll knäna pekande i samma riktning som dina tår under hela rörelsen. Låt dem inte falla inåt!"
      },
      {
        name: "Enbensbalans på stabilt underlag",
        reps: "Håll i 30 sekunder per ben",
        sets: "3 set",
        tempo: "Konstant fokus",
        instructions: "Stå på ett ben med knät mycket lätt böjt (lås inte leden). Hitta balansen och titta på en fast punkt framför dig.",
        safetyTip: "Stå nära en vägg eller bord så att du kan ta stöd om du håller på att tappa balansen."
      },
      {
        name: "Liggande musslan (höftabduktion)",
        reps: "12 repetitioner per sida",
        sets: "3 set",
        tempo: "Mjuk rörelse",
        instructions: "Ligg på sidan med böjda knän (ca 90 grader) och hälarna ihop. Lyft det översta knät uppåt som en öppnande mussla utan att rotera ryggen.",
        safetyTip: "Denna övning stärker sätet vilket är fundamentalt för knästabilitet."
      }
    ]
  },
  {
    week: 3,
    title: "Styrkeuppbyggnad",
    focus: "Excentrisk kontroll och funktionell styrka",
    summary: "Dags att lägga till lätt styrketräning. Vi bygger styrka i lårmusklerna, baksida lår och sätet för att stabilisera knäleden i vardagen.",
    exercises: [
      {
        name: "Utfallssteg bakåt (Reverse Lunges)",
        reps: "8 repetitioner per ben",
        sets: "3 set",
        tempo: "Lugnt och fokuserat",
        instructions: "Stå upprött. Ta ett stort steg bakåt med ena benet och sänk ner det bakre knät mot golvet. Pressa dig upp genom att trycka ifrån med det främre benet.",
        safetyTip: "Främre knäet ska ligga rakt över vristen, inte skjuta långt framför tårna."
      },
      {
        name: "Tåhävningar på ett ben (stöd tillåtet)",
        reps: "12-15 repetitioner per ben",
        sets: "3 set",
        tempo: "2 sekunder upp, 2 sekunder ner",
        instructions: "Stå på ett ben på plan mark eller i en trappa. Pressa dig upp på tå och sänk dig långsamt och kontrollerat ner.",
        safetyTip: "Starka vader avlastar knät vid gång och löpning."
      },
      {
        name: "Höftlyft (Glute Bridges) med gummiband",
        reps: "15 repetitioner",
        sets: "3 set",
        tempo: "Håll 2 sekunder i toppen",
        instructions: "Ligg på rygg med böjda knän. Placera ett gummiband ovanför knäna. Pressa isär knäna lätt mot bandet samtidigt som du lyfter upp höften genom att spänna rumpan.",
        safetyTip: "Undvik att svanka för mycket i ryggraden i toppläget, tänk på att det är rumpan som ska jobba."
      }
    ]
  },
  {
    week: 4,
    title: "Funktionella rörelser & hemgång",
    focus: "Belastningstålighet och rörelsemönster för vardagen",
    summary: "Sista veckans program handlar om att återgå till normala rörelsemönster. Vi integrerar koordination, djupare vinklar och förbereder klienten för vanlig träning.",
    exercises: [
      {
        name: "Knäböj till fullt djup (utan smärta)",
        reps: "10 repetitioner",
        sets: "3 set",
        tempo: "3 sekunder ner, 2 sekunder upp",
        instructions: "Utför en ordentlig knäböj utan stol, så djupt du kan utan att knät smärtar eller ryggen rundas. Pressa upp.",
        safetyTip: "Prioritera en rak, stolt bröstkorg framför att gå extremt djupt."
      },
      {
        name: "Lätta upphopp med landningskontroll",
        reps: "6 repetitioner (mycket kontrollerat)",
        sets: "3 set",
        tempo: "Fokus på landningen",
        instructions: "Gör en kvarts knäböj, hoppa lätt uppåt och landa fjäderlätt med böjda knän. Knäna ska peka rakt fram vid landning.",
        safetyTip: "Om du känner minsta osäkerhet eller känning, byt ut denna mot tysta enbensbalanser."
      },
      {
        name: "Draken (Enbensträning med balans)",
        reps: "8 repetitioner per ben",
        sets: "3 set",
        tempo: "Långsamt och ostadigt (bra!)",
        instructions: "Stå på ett ben. Fäll i höften och sträck ut det fria benet rakt bakåt samtidigt som överkroppen fälls framåt så du bildar en t-form. Återgå med kontroll.",
        safetyTip: "Det är helt okej om det svajar – det är knäets djupa stabiliseringsmuskler som arbetar!"
      }
    ]
  }
];

export const STORYBOARD_DATA: StoryboardLine[] = [
  {
    timePosition: "0:00 - 0:10",
    title: "Frustrationen",
    description: "Kameran fokuserar på en löpare som sitter på en bänk med en hand över sitt skadade knä. En tung pappersbunt med otydliga svartvita streckgubbe-instruktioner ligger slängd på marken.",
    visualCue: "Utsuddad, mörkgrå färgton, dämpat ljus som symboliserar vilsenhet.",
    voiceoverSec: "“Ett skadat knä är mer än bara fysisk smärta. Det handlar om förlorad frihet. Att mötas av krångliga, svårförståeliga pappersinstruktioner gör vägen tillbaka ännu längre...”",
    feeling: "Nedstämt, frustrerat, igenkänning"
  },
  {
    timePosition: "0:10 - 0:25",
    title: "Vändpunkten",
    description: "En surfplatta tänds upp och lyser upp skärmen med en klar, rofylld skogsgrön layout. Det är det digitala rehabiliteringsprogrammet från PulseForge. Vi ser logotypen och en animerad fysiologisk vecka-för-vecka-guide.",
    visualCue: "Ljuset skiftar till levande skogsgröna och svarta toner. Skärmen skiner upp i hög kontrast.",
    voiceoverSec: "“Därför skapade vi PulseForge. Vi ger gamla instruktioner nytt liv med digital struktur och stark pedagogik. Vi hjälper dig att träna med rätt teknik och tydligare progression.”",
    feeling: "Hoppfullt, innovativt, spännande"
  },
  {
    timePosition: "0:25 - 0:40",
    title: "Lösningen & Tryggheten",
    description: "Löparen visas nu göra en kontrollerad knäböj med ett leende, guidad av ett enkelt och vackert övningskort på skärmen. En personlig tränare nickar uppmuntrande bredvid.",
    visualCue: "Hela scenen badar i naturligt solljus, gröna växter i bakgrunden, modern gym-miljö.",
    voiceoverSec: "“Tydliga övningsfilmer, fysiologiskt korrekta instruktioner och mjuk progression framtagen med digital precision – alltid kvalitetssäkrad av legitimerade coacher.”",
    feeling: "Starkt, tryggt, inspirerande"
  },
  {
    timePosition: "0:40 - 0:45",
    title: "Call to Action",
    description: "PulseForge-logotypen visas centrerad på en ren, mörk, modern bakgrund med slogans och en webbadress under.",
    visualCue: "Snygg, stilren varumärkespresentation med rörlig mjuk glöd.",
    voiceoverSec: "“PulseForge. Bygger styrka, struktur och resultat.”",
    feeling: "Professionellt, nystartat, välkomnande"
  }
];

export const AI_TEXT_PRESETS: AiTextPreset[] = [
  {
    id: "stress-info",
    title: "Patientinfo: Stress och återhämtning",
    category: "patient_info",
    originalText: "Sympatiska nervsystemet är hyperaktivt under långvarig psykologisk stressbelastning vilket inducerar förhöjd cortisolsekretion, vasokonstriktion, ökad frekvens av myokardkontraktioner samt inhibering av gastrointestinal rörlighet. Patienter åläggs härmed att omedelbart initiary parasympatisk stimulering via diafragmal andning och upphöra med kognitiva stressorer för att undvika utmattningssyndrom.",
    generatedText: "Känner du dig ständigt uppe i varv? När vi är stressade under lång tid går kroppen på högvarv. Det beror på att vårt inbyggda 'larmsystem' är igång dygnet runt. \n\nFör att ge din kropp en chans att återhämta sig och må bra igen kan du göra ett par enkla saker på egen hand:\n\n1. Ta djupa andetag med magen: Lägg en hand på bröstet och en på magen. Andas in djupt genom näsan så att magen lyfter sig, och andas långsamt ut. Detta lugnar ner nervsystemet direkt.\n2. Ta korta, regelbundna mikropauser: Lägg undan mobilen i 5 minuter under dagen och bara låt tankarna vila.\n3. Dra ner på kraven: Prioritera bara det absolut viktigaste just nu. Sömn och vila är medicinen kroppen behöver.",
    explanation: "Vår fysiologiskt pedagogiska anpassning översätter de täta, medicinska facktermerna (som 'parasympatisk stimulering' och 'vasokonstriktion') till ett konkret och lugnande språk. Vi använder klara instruktioner och tar bort text som skapar oro."
  },
  {
    id: "insta-post",
    title: "Instagram-inlägg: Gymnybörjare",
    category: "social_media",
    originalText: "Vårt gym erbjuder gymortopediska maskiner och fria vikter för målgrupper med nedsatt muskelkapacitet. Registrering sker i receptionen under kontorstid. Medlemsavgift debiteras månadsvis via autogiro. Välkommen.",
    generatedText: "Känns tröskeln till gymmet hög? 🌸 Du är inte ensam om att tycka det!\n\nAtt ta första steget kan kännas pirrigt och nästan lite skrämmande. Men hos oss finns inga krav på att du redan ska vara stark eller veta hur alla maskiner fungerar. Vi är ett gym byggt för helt vanliga människor.\n\nHär får du:\n✨ Ett varmt och välkomnade bemötande från första sekunden.\n✨ Enkla, guidade maskiner perfekta för nybörjare.\n✨ Hjälp av personliga tränare som förklarar allt i din egen takt.\n\nFunderar du fortfarande? Kom in och drick en kopp kaffe med oss och bara titta runt! Ingen press – bara rörelseglädje på dina villkor. 👋\n\n#HälsaFörAlla #GymNybörjare #Träningsglädje #PulseForge #MåBra #KomSomDuÄr",
    explanation: "Från en torr och byråkratisk informationstext skapade vi en varm, känsloladdad och inbjudande sociala medier-post. Tonen är peppande, fri från skrämmande villkor och bjuder in nybörjaren på ett behagligt och tryggt sätt."
  }
];
