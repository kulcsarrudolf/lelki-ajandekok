type QuizSection = {
  sectionName: string;
  description?: string;
  questions: {
    value: number;
    text: string;
  }[];
  answers: {
    value: number;
    text: string;
  }[];
};

export const quiz: QuizSection[] = [
  {
    sectionName: "Örömöt okoz nekem....",
    description:
      "Ha még nincs tapasztalatod a következõ területeken, jelöld be a jobb szélsõ oszlopot.",
    answers: [
      { text: "nagyon sokat", value: 11 },
      { text: "sokat", value: 19 },
      { text: "közepest", value: 4 },
      { text: "keveset", value: 2 },
      { text: "egyáltalán nem", value: 0 },
    ],
    questions: [
      {
        value: 1,
        text: "...meghatározott terveket kidolgozni, lépésről lépésre meghatározni, hogy hogyan érhető el a cél",
      },
      {
        value: 2,
        text: "...hogy más kultúrában élő emberek életformájához igazodjak",
      },
      {
        value: 3,
        text: "...hogy házastárs. és család nélkül éljek (házasok jelöljék a jobb oldalt.)",
      },
      {
        value: 4,
        text: "...hogy megvizsgálhatom mások gyülekezettel kapcsolatos kijelentését, hogy nem viszik-e rossz irányba a gyülekezetet",
      },
      {
        value: 5,
        text: "...ha nem keresztyénekkel beszélhetek Jézusról és vele való kapcsolatomról",
      },
      {
        value: 6,
        text: "...ha olyan embereken is segíthetek nehéz helyzetükben, akik nem a barátaim",
      },
      {
        value: 7,
        text: "...ha célokat, melyek másoknak irreálisnak tűnnek, megvalósíthatok",
      },
      {
        value: 8,
        text: "...ha pénzemet, tulajdonomat, nagyvonalúan Isten országa építésére adhatom",
      },
      {
        value: 9,
        text: "...ha közreműködhetek abban, hogy emberek megszabaduljanak démonikus kötöttségüktől",
      },
      {
        value: 10,
        text: "...ha rendszeresen imádkozhatok betegek gyógyulásáért",
      },
      {
        value: 11,
        text: "...ha segédeszközt fejleszthetek ki, ami megkönnyíti másoknak a tanulást",
      },
      { value: 12, text: "...ha nyelveken imádkozhatok" },
      {
        value: 13,
        text: "...ha egyéneknek és csoportoknak segíthetek analizálni helyzetüket, és segítséget nyújthatok a változtatásra",
      },
      { value: 14, text: "...ha rendelkezem a léthez szükséges javakkal" },
      {
        value: 15,
        text: "...ha dolgokat megjavíthatok, karban tarthatok ( eszközök a misszióban )",
      },
      {
        text: '...ha a háttérben dolgozva támogathatom a "reflektorfényben" szolgáló testvéreimet',
        value: 16,
      },
      {
        text: "...ha bejelentkezés nélkül érkezõ vendégeknek élelmet ésszállást adhatok",
        value: 17,
      },
      {
        text: "...ha egy órát, vagy többet, imádságban tölthetek",
        value: 18,
      },
      {
        text: "...ha valakinek a nyelvekenszólásból kihallhatom Istenüzenetét számunkra",
        value: 19,
      },
      {
        text: "...ha sok idõt tölthetek tanulással azért, hogy többismeretre tegyek szert",
        value: 20,
      },
      {
        text: "...ha embereket vezethetek, akik közös cél felé haladnakegyütt",
        value: 21,
      },
      {
        text: "...ha szenvedéseim közepette, bizonyságot tehetek, ahelyes életszemléletrõl",
        value: 22,
      },
      {
        text: "...ha emberekkel törõdhetek, akik a társadalom pereménélnek",
        value: 23,
      },
      {
        text: "...ha olyan dolgokért imádkozhatok, melyek áttörik atermészeti törvényeket (Isten csodás beavatkozásáért )",
        value: 24,
      },
      {
        text: "...ha más gyülekezetek problémáival úgy foglalkozhatok,hogy segíthetek a megoldásukban",
        value: 25,
      },
      {
        text: "...ha törõdhetek mások lelki szükségeivel, és hosszankísérhetem õket",
        value: 26,
      },
      {
        text: "...ha szócsõ lehetek abban, hogy Isten konkrét üzenetetadhasson a gyülekezetnek, adott helyzetükben",
        value: 27,
      },
      {
        text: "...ha a gyülekezetben átvehetek jelentéktelennek tûnõfeladatokat",
        value: 28,
      },
      {
        text: "...ha egyedül, vagy másokkal együtt énekelhetek,muzsikálhatok",
        value: 29,
      },
      {
        text: "...ha gondolataimat mûvészi eszközökkel fejezhetem ki( festés, grafika, pantomim stb. )",
        value: 30,
      },
    ],
  },
  {
    sectionName: "Jobban szeretnék mint eddig...",
    answers: [
      { text: "kimondottan", value: 8 },
      { text: "szívesen", value: 6 },
      { text: "nagyon szívesen", value: 4 },
      { text: "nem szívesen", value: 2 },
      { text: "nem", value: 0 },
    ],
    questions: [
      {
        text: "...gyülekezeti projekteket megtervezni, megszervezni, ésalkalmas emberekkel megvalósítani",
        value: 31,
      },
      {
        text: "...hogy legyen kapcsolatom más kultúrában élõ emberekkel",
        value: 32,
      },
      {
        text: "...azzal foglalkozni, hogy Isten akarata-e velemkapcsolatban az, hogy megházasodjak-e vagy sem",
        value: 33,
      },
      {
        text: "...mások szavaival, tanításaival foglalkozni, és összemérnia Biblia tanításával",
        value: 34,
      },
      {
        text: "...nem hívõkkel szóbaelegyedni az Úr Jézus Krisztusbavetett hitrõl beszélgetni",
        value: 35,
      },
      {
        text: "...a baráti körömön kívül élõknek személyesen segíteni,õket támogatni",
        value: 36,
      },
      {
        text: "...odafigyelni arra, hogy látással rendelkezõ testvérek adjákmeg a gyülekezetben a hangot",
        value: 37,
      },
      {
        text: "...hogy kapcsolatba kerüljek a projektért felelõsökkel, hogytámogathassam õket adományommal",
        value: 38,
      },
      {
        text: "...hogy Isten használhasson, a démonikus erõk elleniharcban",
        value: 39,
      },
      {
        text: "...hogy eszközként szolgálhassak úgy, hogy Istentermészetfeletti gyógyulást adhasson",
        value: 40,
      },
      {
        text: "...idõt befektetni arra, hogy tesvéreimhez információkat,felismeréseket juttassak",
        value: 41,
      },
      {
        text: "...hogy Istennel való beszélgetésben áttörve a racionálison,új nyelveken szólhassak",
        value: 42,
      },
      {
        text: "...Embereknek, vagy szervezeteknek segíteni szeretnék,hogy találjanak hatásos utat céljuk elérésére",
        value: 43,
      },
      { text: "...hogy életnívómat lejjebb szállítsam", value: 44 },
      {
        text: "...kezeimet használva, valami egészen gyakorlatit szeretnékIstenért tenni",
        value: 45,
      },
      {
        text: "...Más keresztyéneket úgy támogatni, hogy az énajándékaimat az õ szolgálatukba fektetem be",
        value: 46,
      },
      {
        text: "...Otthonomban olyan légkört teremteni embereknek, hogyjól érezzék magukat",
        value: 47,
      },
      { text: "...Több idõt imádságra szánni", value: 48 },
      {
        text: "...Eszköz lenni abban, hogy ha valaki nyelveken szól, énérthetõ nyelven adjam tovább",
        value: 49,
      },
      {
        text: "...Missziós elképzeléseket összegyüjteni, és kiértékelni",
        value: 50,
      },
      {
        text: "...Rendelkezésre állni, a vezetési kérdések megoldásában",
        value: 51,
      },
      {
        text: "...Olyan helyzetekben megállni, ahol a hit, személyesáldozattal jár",
        value: 52,
      },
      {
        text: "...Olyan emberekkel foglalkozni, akiket a társadalomelhanyagolt, vagy kiközösített",
        value: 53,
      },
      {
        text: "...megtapasztalni, hogy Isten használ jelek és csodáktételében",
        value: 54,
      },
      {
        text: "...Új gyülekezetek létrejöttén fáradni, és így olyanembereket elérni, akikhez másként nem jut el az örömhír",
        value: 55,
      },
      { text: "...Hívõket segíteni, hitük növekedésében", value: 56 },
      {
        text: "...Hívõknek segíteni felismeni, hogy mi Isten akarata, azadott helyzetben",
        value: 57,
      },
      {
        text: "...Rendelkezésre állni, ha a gyülekezetben valamilyenfeladatot meg kell oldani",
        value: 58,
      },
      { text: "...Istent muzsikával szolgálni", value: 59 },
      {
        text: "...Érzelmeimet kreatív módon kifejezni ( jelenet, festészet,kerámia, stb )",
        value: 60,
      },
    ],
  },
  {
    sectionName: "Az a tapasztalatom, hogy...",
    answers: [
      { text: "nagyon gyakran", value: 13 },
      { text: "gyakran", value: 10 },
      { text: "néha", value: 5 },
      { text: "ritkán", value: 2 },
      { text: "soha", value: 0 },
    ],
    questions: [
      {
        text: "...Hogy olyan terveket dolgozhattam ki, ami által, agyülekezet munkáját, racionálisabban lehet végezni",
        value: 61,
      },
      {
        text: "...Hogy más kultúrkörhöz tartozó emberek vonzódtakhozzám",
        value: 62,
      },
      {
        text: "...Hogy egyedülállóként több erõm van Isten szolgálatára( Házasok, a jobb szélsõt jelöljék )",
        value: 63,
      },
      {
        text: "...Hogy felismertem a rossz motivációt, a kegyesen hangzómondatok mögött",
        value: 64,
      },
      {
        text: "...Hogy Isten használt engem, mások Jézus Krisztusbanvaló hitre segítésére",
        value: 65,
      },
      {
        text: "...Hogy némelyek azt mondják, hogy a vígasztalásom,bíztatásom, nagyon sokat jelentett nekik",
        value: 66,
      },
      {
        text: "...Hogy némelyek álmodozónak tartanak, mert szerintükutópisztikus célokat tûzök magam elé",
        value: 67,
      },
      {
        text: "...Hogy egy jelentõs pénzmennyiség odaadásával, másokonsegíthettem",
        value: 68,
      },
      {
        text: "...Hogy emberek imádságom által szabadok lettekdémonikus kötöttségüktõl",
        value: 69,
      },
      {
        text: "...Hogy Isten meggyógyított testi-lelki betegeket,imádságom meghallgatásaként",
        value: 70,
      },
      {
        text: "...Hogy azt mondták némelyek, hogy az ismereteimet jól áttudtam nekik adni",
        value: 71,
      },
      {
        text: "...Hogy egy számomra ismeretlen nyelven imádkoztamIstenhez",
        value: 72,
      },
      {
        text: "...Hogy némelyek bonyolult probléma megoldásábantanácsot kértek tõlem, és ez segített nekik",
        value: 73,
      },
      {
        text: "...Hogy jobban hozzá tudok férkõzni egyszerû emberekhez,mert úgy döntöttem, hogy nagyon egyszerû életet élek",
        value: 74,
      },
      {
        text: "...Hogy gyakorlati képességeimmel segíthettem másoknak",
        value: 75,
      },
      {
        text: "...felelõs pozicíóban levõ testvérek jobban végezhetnékfeladatukat, mert átvettem tõlük részfeladatokat",
        value: 76,
      },
      {
        text: "...sokan találkoznak nálam, mert jól érzik magukat",
        value: 77,
      },
      {
        text: "...Isten egyértelmûen avatkozott be, amikor bizonyosdolgok megoldásáért imádkoztam",
        value: 78,
      },
      {
        text: "...a nyelvekenszóló értelmezésem beleillett a szituációba",
        value: 79,
      },
      {
        text: "...elsõként általam hozott javaslatok késõbb beváltak",
        value: 80,
      },
      {
        text: "...más keresztyéneket motiválhattam, hogy dolgozzanakbizonyos célok elérése érdekében",
        value: 81,
      },
      { text: "...szenvedésem másokat megerõsített", value: 82 },
      {
        text: "...embereken akik szükségben voltak, segíthettem agyakorlatban",
        value: 83,
      },
      {
        text: "...Isten eszközül használt, jelek és csodák tételében",
        value: 84,
      },
      {
        text: "...más gyülekezetek vezetõi figyelembe vették, alkalmaztáktanácsaimat",
        value: 85,
      },
      {
        text: "...hívõket hosszútávú személyes kapcsolatápolássalsegíthettem a lelki fejlõdésben",
        value: 86,
      },
      {
        text: "...némelyek azt mondják, hogy amit én mondtam nekik, azIstentõl való üzenet volt az életükben",
        value: 87,
      },
      {
        text: "...gyorsabban meglátom a gyülekezetben a feladatot, mintmások, és meg is teszem",
        value: 88,
      },
      {
        text: "...muzikális képességeimmel másoknak szolgáltam,erõsítettem õket",
        value: 89,
      },
      {
        text: "...kreatív lépességeimet Isten dicsõítésére használhattam",
        value: 90,
      },
    ],
  },
  {
    sectionName: "A következő kejelentés rám vonatkozik...",
    answers: [
      { text: "nagyon erősen", value: 13 },
      { text: "erősen", value: 10 },
      { text: "kevésbé", value: 5 },
      { text: "gyengén", value: 2 },
      { text: "nem", value: 0 },
    ],
    questions: [
      {
        text: "...Megtervezem a napomat, és nem bízom a dolgokata véletlenre",
        value: 91,
      },
      {
        text: "...Örömet jelent, ha tanulhatok más kultúrákról",
        value: 92,
      },
      {
        text: "...Azonosulni tudok Pál azon mondatával, hogy mások ismaradjanak házasság nélkül, mint õ",
        value: 93,
      },
      {
        text: "...Nagyon nyugtalanít, ha valaki valami jó dolgot mond,a motivációja azonban nem tiszta",
        value: 94,
      },
      {
        text: "...Nagy problémát jelent nekem, hogy nagyon sokan nemtesznek bizonyságot hitükrõl",
        value: 95,
      },
      {
        text: "...Ha emberek a problémákról beszélnek nekem, többeggyüttérzés van bennem ( mint talán másokban )",
        value: 96,
      },
      {
        text: "...Számomra teljesen világos, hogy Isten akkor is megtartjaszavát, ha a körülmények mást mutatnak",
        value: 97,
      },
      {
        text: "...Személyes megszólítottságot érzek, ha mások anyagiproblémáiról hallok",
        value: 98,
      },
      {
        text: "...Engem nagyon zavar, ha vannak hívõk, akik nem ishiszik, hogy léteznek démonok",
        value: 99,
      },
      {
        text: "...Engem nagyon zavar, ha a gyülekezetben kevesetimádkozunk betegekért",
        value: 100,
      },
      {
        text: "...Szenvedek attól, hogy csak nagyon kevés hívõ tudjaismeretét, érthetõen, élvezhetõen elõadni",
        value: 101,
      },
      {
        text: "...Jól érzem magam olyan csoportban, ahol nyelvekenimádkoznak",
        value: 102,
      },
      {
        text: "...Fontosnak tartom, hogy a gyülekezet tapasztaltszakemberektõl tanácsot fogadjon el",
        value: 103,
      },
      {
        text: "...Nekem problémát okoz az, hogy nagyon sok hívõ emberanyagilag túlzottan jó körülmények között él",
        value: 104,
      },
      {
        text: "...Engem zavar, ha épületek, eszközök, stb. rossz állapotbanvannak, nem használják õket rendeltetésszerûen",
        value: 105,
      },
    ],
  },
  {
    sectionName: "A következő kejelentés rám vonatkozik...",
    answers: [
      { text: "nagyon erősen", value: 5 },
      { text: "erősen", value: 4 },
      { text: "kevésbé", value: 2 },
      { text: "gyengén", value: 1 },
      { text: "nem", value: 0 },
    ],
    questions: [
      {
        text: "...Nekem jólesik olyan szolgálatot is elvégezni, amit másoknem tartanak elég látványosnak",
        value: 106,
      },
      {
        text: "...Akkor is tudok örülni elõre nem jelzett vendégeknek, hanincs rendben a lakásom",
        value: 107,
      },
      {
        text: "...Másoktól hallott imatémákat komolyan veszem, ésrendszeresen imádkozom értük",
        value: 108,
      },
      {
        text: "...Ha valaki nyelveken szól, azért imádkozom, hogymegmagyarázhassam",
        value: 109,
      },
      {
        text: "...Szívesen foglalkozom bibliai összefüggésekkel, és ezekalkalmazásával a mindennapi életben",
        value: 110,
      },
      {
        text: "...Fontosnak tartom, hogy egy keresztyén csoportot jóképességû vezetõ vezessen",
        value: 111,
      },
      {
        text: "...Keresztyén mártírokról szóló beszámolók elbûvölnekengem",
        value: 112,
      },
      {
        text: "...Ha szükséget látok, legszívesebben azonnal segítenék",
        value: 113,
      },
      {
        text: "...Imádkozom azért, hogy Isten általam is tegyen csodát,mint tette ezt az elsõ keresztyének idejében",
        value: 114,
      },
      {
        text: "...Nagyon fontosnak tartom, hogy legyen egység agyülekezetek között",
        value: 115,
      },
      {
        text: "...Nagyon nyomaszt, hogy keresztyének, testileg és lelkilegsem részesülnek elégséges gondozásban, támogatásban",
        value: 116,
      },
      {
        text: "...Imádkozom azért, hogy Isten még közvetlenebbül szóljonhozzám, mint ahogyan ma tapasztalom",
        value: 117,
      },
      {
        text: "...Észreveszem, ha másoknak gyakorlati segítségre vanszüksége, kész is vagyok segíteni",
        value: 118,
      },
      {
        text: "....Elszomorít, ha kevés hangsúlyt helyezneka gyülekezetben a muzsikára",
        value: 119,
      },
      {
        text: "...Az a vágyam, hogy a hívõk tartsák szép rendbenkörnyezetüket",
        value: 120,
      },
    ],
  },
];

export default quiz;

// questions text and value
