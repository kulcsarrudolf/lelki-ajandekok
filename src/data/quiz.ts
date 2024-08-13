import { Quiz, QuizAnswer } from "../types/Quiz";
import { v4 as uuidv4 } from "uuid";

export const quizDataReferral: Quiz = [
  {
    sectionName: "...-nél el tudom képzelni",
    description:
      "Ha még nincs tapasztalatod ezen a területen, jelöld meg az utolsó opciót.",
    answers: [
      { text: "nagyon jól", value: 5 },
      { text: "jól", value: 4 },
      { text: "adott esetben", value: 2 },
      { text: "nem", value: 1 },
      { text: "egyáltalán nem", value: 0 },
    ],
    questions: [
      {
        value: 181,
        valueLetter: "a",
        text: "...hogy sok örömet jelent neki, ha szervezési kérdésekkel foglalkozhat a gyülekezetben",
      },
      {
        value: 182,
        valueLetter: "b",
        text: "...hogy nagyon örülne annak, ha élete nagy részét egy idegen kultúrában tölthetné",
      },
      {
        value: 183,
        valueLetter: "c",
        text: "...hogy neki kevesebb problémát okozna az, ha nem házasodna meg, mint másoknak (ha házas, jelöld a jobb o.)",
      },
      {
        value: 184,
        valueLetter: "d",
        text: "...hogy jobban felismeri bizonyos viselkedés mögött az igazi motivációt, mint mások",
      },
      {
        value: 185,
        valueLetter: "e",
        text: "...hogy az ő hivatása abban van, hogy a még nemhívőkkel beszéljen a Jézus Krisztusba vetett hitről",
      },
      {
        value: 186,
        valueLetter: "f",
        text: "...hogy tőle távol élő emberek is felkeresik, hogy lelkigondozói segítséget kapjanak",
      },
      {
        value: 187,
        valueLetter: "g",
        text: "...hogy kész személyes nagy rizikót is vállalni célja elérése érdekében",
      },
      {
        value: 188,
        valueLetter: "h",
        text: "...hogy neki fontosabb - összehasonlítva másokkal az -, hogy pénzt szánjon missziós célokra",
      },
      {
        value: 189,
        valueLetter: "i",
        text: "...hogy jobban különbséget tud tenni mint mások aközött, hogy isteni, sátáni, vagy emberi dolog-e az amiről szó van",
      },
      {
        value: 190,
        valueLetter: "j",
        text: "...hogy hozzá többször fordulnak azért, hogy imádkozzon gyógyulásukért",
      },
      {
        value: 191,
        valueLetter: "k",
        text: "...hogy nagy örömét leli mások képzésében, továbbképzésében",
      },
      {
        value: 192,
        valueLetter: "l",
        text: "...hogy a nyelvekenszólás ajándékával rendelkezik",
      },
      {
        value: 193,
        valueLetter: "m",
        text: "...hogy ő könnyebben meg tudja oldani mások bonyolult problémáit",
      },
      {
        value: 194,
        valueLetter: "n",
        text: "...hogy kevés anyagival boldogabb mint a sokkal",
      },
      {
        value: 195,
        valueLetter: "o",
        text: "...jobb kézügyessége, művészi hajlama van, mint másoknak úgy általában",
      },
      {
        value: 196,
        valueLetter: "p",
        text: "...időt igénylő munkákat vesz át másoktól",
      },
      {
        value: 197,
        valueLetter: "q",
        text: "...vendégekkel boldogabb, mint nélkülük",
      },
      {
        value: 198,
        valueLetter: "r",
        text: "...sok örömet jelent neki, ha sok időt tölthet el imádságban",
      },
      {
        value: 199,
        valueLetter: "s",
        text: "...képes valakinek a nyelvekenszólását tolmácsolni",
      },
      {
        value: 200,
        valueLetter: "t",
        text: "...nagyon örül annak, ha háttérbe szorulva, új missziós terveken dolgozhat",
      },
      {
        value: 201,
        valueLetter: "u",
        text: "...az ő speciális feladata, hogy másoknak utat mutasson",
      },
      {
        value: 202,
        valueLetter: "v",
        text: "...könnyebben viseli a szenvedést, mint mások",
      },
      {
        value: 203,
        valueLetter: "w",
        text: "...speciális feladatának látja azt, hogy bajban levő emberekkel törődjön",
      },
      {
        value: 204,
        valueLetter: "x",
        text: "...Isten használja, jelek és csodák megtételében",
      },
      {
        value: 205,
        valueLetter: "y",
        text: "...kikérik a tanácsát, ha vezetőket választanak a gyülekezetben",
      },
      {
        value: 206,
        valueLetter: "z",
        text: "...nagy öröme van abban, ha hosszú ideig vezetheti hívők egy csoportját személyesen",
      },
      {
        value: 207,
        valueLetter: "aa",
        text: "...Isten több üzenetet közöl rajta keresztül a gyülekezetnek, mint mások által",
      },
      {
        value: 208,
        valueLetter: "bb",
        text: "...könnyen végez bármely munkát a gyülekezetben",
      },
      {
        value: 209,
        valueLetter: "cc",
        text: "...nagyon örül annak, ha Istent zenével, énekkel dicsőítheti",
      },
      {
        value: 210,
        valueLetter: "dd",
        text: "...örömet szerez neki, ha művészetét beleviheti a szolgálatba (rajz, festés, játék, pantomin, bábozás, stb.)",
      },
      {
        value: 211,
        valueLetter: "A",
        text: "...hogy sok örömet jelent neki, ha szervezési kérdésekkel foglalkozhat a gyülekezetben",
      },
      {
        value: 212,
        valueLetter: "B",
        text: "...hogy nagyon örülne annak, ha élete nagy részét egy idegen kultúrában tölthetné",
      },
      {
        value: 213,
        valueLetter: "C",
        text: "...hogy neki kevesebb problémát okozna az, ha nem házasodna meg, mint másoknak (ha házas, jelöld a jobb o.)",
      },
      {
        value: 214,
        valueLetter: "D",
        text: "...hogy jobban felismeri bizonyos viselkedés mögött az igazi motivációt, mint mások",
      },
      {
        value: 215,
        valueLetter: "E",
        text: "...hogy az ő hivatása abban van, hogy a még nemhívőkkel beszéljen a Jézus Krisztusba vetett hitről",
      },
      {
        value: 216,
        valueLetter: "F",
        text: "...hogy tőle távol élő emberek is felkeresik, hogy lelkigondozói segítséget kapjanak",
      },
      {
        value: 217,
        valueLetter: "G",
        text: "...hogy kész lenne személyes nagy is rizikót vállalni célja elérése érdekében",
      },
      {
        value: 218,
        valueLetter: "H",
        text: "...hogy neki fontosabb összehasonlítva másokkal az, hogy pénzt szánjon missziós célokra",
      },
      {
        value: 219,
        valueLetter: "I",
        text: "...hogy hozzá többször fordulnak azért, hogy imádkozzon gyógyulásukért",
      },
      {
        value: 220,
        valueLetter: "J",
        text: "...hogy nagy örömét leli mások képzésében, továbbképzésében",
      },
      {
        value: 221,
        valueLetter: "K",
        text: "...hogy jobban különbséget tud tenni mint mások aközött, hogy isteni, sátáni, vagy emberi dolog-e az amiről szó van",
      },
      {
        value: 222,
        valueLetter: "L",
        text: "...hogy a nyelvekenszólás ajándékával rendelkezik",
      },
      {
        value: 223,
        valueLetter: "M",
        text: "...hogy ő könnyebben meg tudja oldani mások bonyolult problémáit",
      },
      {
        value: 224,
        valueLetter: "N",
        text: "...hogy kevés anyagival boldogabb mint a sokkal",
      },
      {
        value: 225,
        valueLetter: "O",
        text: "...jobb kézügyessége, művészi hajlama van, mint másoknak úgy általában",
      },
      {
        value: 226,
        valueLetter: "P",
        text: "...időt igénylő munkákat vesz át másoktól",
      },
      {
        value: 227,
        valueLetter: "Q",
        text: "...vendégekkel boldogabb, mint nélkülük",
      },
      {
        value: 228,
        valueLetter: "R",
        text: "...sok örömet jelent neki, ha sok időt tölthet el imádságban",
      },
      {
        value: 229,
        valueLetter: "S",
        text: "...képes valakinek a nyelvekenszólását tolmácsolni",
      },
      {
        value: 230,
        valueLetter: "T",
        text: "...nagyon örül annak, ha háttérbe szorulva, új missziós terveken dolgozhat",
      },
      {
        value: 231,
        valueLetter: "U",
        text: "...az ő speciális feladata, hogy másoknak utat mutasson",
      },
      {
        value: 232,
        valueLetter: "V",
        text: "...könnyebben viseli a szenvedést, mint mások",
      },
      {
        value: 233,
        valueLetter: "W",
        text: "...speciális feladatának látja azt, hogy bajban levő emberekkel törődjön",
      },
      {
        value: 234,
        valueLetter: "X",
        text: "...Isten használja, jelek és csodák megtételében",
      },
      {
        value: 235,
        valueLetter: "Y",
        text: "...kikérik a tanácsát, ha vezetőket választanak a gyülekezetben",
      },
      {
        value: 236,
        valueLetter: "Z",
        text: "...nagy öröme van abban, ha hosszú ideig vezetheti hívők egy csoportját személyesen",
      },
      {
        value: 237,
        valueLetter: "AA",
        text: "...Isten több üzenetet közöl rajta keresztül a gyülekezetnek, mint mások által",
      },
      {
        value: 238,
        valueLetter: "BB",
        text: "...könnyen végez bármely munkát a gyülekezetben",
      },
      {
        value: 239,
        valueLetter: "CC",
        text: "...nagyon örül annak, ha Istent zenével, énekkel dicsőítheti",
      },
      {
        value: 240,
        valueLetter: "DD",
        text: "...örömet szerez neki, ha művészetét beleviheti a szolgálatba (rajz, festés, játék, pantomin, bábozás, stb.)",
      },
    ],
  },
];

export const quizData: Quiz = [
  {
    sectionName: "Örömöt okoz nekem....",
    description:
      "Ha még nincs tapasztalatod ezen a területen, jelöld meg az utolsó opciót.",
    answers: [
      { text: "nagyon sokat", value: 11 },
      { text: "sokat", value: 9 },
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
        text: "...hogy házastárs és család nélkül éljek (házasok jelöljék az utolsó opciót)",
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
        text: "...ha közreműködhetek abban, hogy emberek megszabaduljanak démonikus megkötözöttségeikből",
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
        text: "...ha dolgokat megjavíthatok, karban tarthatok (eszközök a misszióban)",
      },
      {
        text: '...ha a háttérben dolgozva támogathatom a "reflektorfényben" szolgáló testvéreimet',
        value: 16,
      },
      {
        text: "...ha bejelentkezés nélkül érkező vendégeknek élelmet és szállást adhatok",
        value: 17,
      },
      {
        text: "...ha egy órát, vagy többet, imádságban tölthetek",
        value: 18,
      },
      {
        text: "...ha valakinek a nyelveken szólásából kihallhatom Isten üzenetét számunkra",
        value: 19,
      },
      {
        text: "...ha sok időt tölthetek tanulással azért, hogy több ismeretre tegyek szert",
        value: 20,
      },
      {
        text: "...ha embereket vezethetek, akik közös cél felé haladnak együtt",
        value: 21,
      },
      {
        text: "...ha szenvedéseim közepette, bizonyságot tehetek a helyes életszemléletről",
        value: 22,
      },
      {
        text: "...ha emberekkel törődhetek, akik a társadalom peremén élnek",
        value: 23,
      },
      {
        text: "...ha olyan dolgokért imádkozhatok, melyek áttörik a természeti törvényeket (Isten csodás beavatkozásáért)",
        value: 24,
      },
      {
        text: "...ha más gyülekezetek problémáival úgy foglalkozhatok, hogy segíthetek a megoldásukban",
        value: 25,
      },
      {
        text: "...ha törődhetek mások lelki szükségeivel, és hosszasan kísérhetem őket",
        value: 26,
      },
      {
        text: "...ha szócső lehetek abban, hogy Isten konkrét üzenetet adhasson a gyülekezetnek, adott helyzetükben",
        value: 27,
      },
      {
        text: "...ha a gyülekezetben átvehetek jelentéktelennek tűnő feladatokat",
        value: 28,
      },
      {
        text: "...ha egyedül, vagy másokkal együtt énekelhetek, zenélhetek",
        value: 29,
      },
      {
        text: "...ha gondolataimat művészi eszközökkel fejezhetem ki (festés, grafika, pantomim stb.)",
        value: 30,
      },
    ],
  },
  {
    sectionName: "Jobban szeretnék mint eddig...",
    answers: [
      { text: "kimondottan szívesen", value: 8 },
      { text: "nagyon szívesen", value: 6 },
      { text: "szívesen", value: 4 },
      { text: "nem szívesen", value: 2 },
      { text: "nem", value: 0 },
    ],
    questions: [
      {
        text: "...gyülekezeti projekteket megtervezni, megszervezni, és alkalmas emberekkel megvalósítani",
        value: 31,
      },
      {
        text: "...hogy legyen kapcsolatom más kultúrában élő emberekkel",
        value: 32,
      },
      {
        text: "...azzal foglalkozni, hogy Isten akarata-e velem kapcsolatban az, hogy megházasodjak-e vagy sem",
        value: 33,
      },
      {
        text: "...mások szavaival, tanításaival foglalkozni, és összemérni a Biblia tanításával",
        value: 34,
      },
      {
        text: "...nem hívőkkel szóbaelegyedni az Úr Jézus Krisztusba vetett hitről beszélgetni",
        value: 35,
      },
      {
        text: "...a baráti körömön kívül élőknek személyesen segíteni, őket támogatni",
        value: 36,
      },
      {
        text: "...odafigyelni arra, hogy látással rendelkező testvérek adják meg a gyülekezetben a hangot",
        value: 37,
      },
      {
        text: "...hogy kapcsolatba kerüljek a projektért felelősökkel, hogy támogathassam őket adományommal",
        value: 38,
      },
      {
        text: "...hogy Isten használhasson, a démonikus erők elleni harcban",
        value: 39,
      },
      {
        text: "...hogy eszközként szolgálhassak úgy, hogy Isten természetfeletti gyógyulást adhasson",
        value: 40,
      },
      {
        text: "...időt befektetni arra, hogy tesvéreimhez információkat, felismeréseket juttassak",
        value: 41,
      },
      {
        text: "...hogy Istennel való beszélgetésben, áttörve a racionálison, új nyelveken szólhassak",
        value: 42,
      },
      {
        text: "...embereknek, vagy szervezeteknek segíteni szeretnék, hogy találjanak hatásos utat céljuk elérésére",
        value: 43,
      },
      { text: "...hogy életnívómat lejjebb szállítsam", value: 44 },
      {
        text: "...kezeimet használva, valami egészen gyakorlatit szeretnék Istenért tenni",
        value: 45,
      },
      {
        text: "...más keresztyéneket úgy támogatni, hogy az én ajándékaimat az ő szolgálatukba fektetem be",
        value: 46,
      },
      {
        text: "...otthonomban olyan légkört teremteni embereknek, hogy jól érezzék magukat",
        value: 47,
      },
      { text: "...több időt imádságra szánni", value: 48 },
      {
        text: "...eszköz lenni abban, hogy ha valaki nyelveken szól, én érthető nyelven adjam tovább",
        value: 49,
      },
      {
        text: "...missziós elképzeléseket összegyüjteni, és kiértékelni",
        value: 50,
      },
      {
        text: "...rendelkezésre állni, a vezetési kérdések megoldásában",
        value: 51,
      },
      {
        text: "...olyan helyzetekben megállni, ahol a hit, személyes áldozattal jár",
        value: 52,
      },
      {
        text: "...olyan emberekkel foglalkozni, akiket a társadalom elhanyagolt, vagy kiközösített",
        value: 53,
      },
      {
        text: "...megtapasztalni, hogy Isten használ jelek és csodák tételében",
        value: 54,
      },
      {
        text: "...új gyülekezetek létrejöttén fáradni, és így olyan embereket elérni, akikhez másként nem jut el az örömhír",
        value: 55,
      },
      { text: "...hívőket segíteni, hitük növekedésében", value: 56 },
      {
        text: "...hívőknek segíteni felismeni, hogy mi Isten akarata, az adott helyzetben",
        value: 57,
      },
      {
        text: "...rendelkezésre állni, ha a gyülekezetben valamilyen feladatot meg kell oldani",
        value: 58,
      },
      { text: "...istent zenével szolgálni", value: 59 },
      {
        text: "...érzelmeimet kreatív módon kifejezni (jelenet, festészet, kerámia, stb)",
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
        text: "...hogy olyan terveket dolgozhattam ki, ami által, a gyülekezet munkáját, racionálisabban lehet végezni",
        value: 61,
      },
      {
        text: "...hogy más kultúrkörhöz tartozó emberek vonzódtak hozzám",
        value: 62,
      },
      {
        text: "...hogy egyedülállóként több erőm van Isten szolgálatára (házasok jelöljék az utolsó opciót)",
        value: 63,
      },
      {
        text: "...hogy felismertem a rossz motivációt, a kegyesen hangzó mondatok mögött",
        value: 64,
      },
      {
        text: "...hogy Isten használt engem, mások Jézus Krisztusban való hitre segítésére",
        value: 65,
      },
      {
        text: "...hogy némelyek azt mondják, hogy a vigasztalásom, bíztatásom, nagyon sokat jelentett nekik",
        value: 66,
      },
      {
        text: "...hogy némelyek álmodozónak tartanak, mert szerintük utópisztikus célokat tűzök magam elé",
        value: 67,
      },
      {
        text: "...hogy egy jelentős pénzmennyiség odaadásával, másokon segíthettem",
        value: 68,
      },
      {
        text: "...hogy emberek imádságom által szabadok lettek démonikus megkötözöttségeikből",
        value: 69,
      },
      {
        text: "...hogy Isten meggyógyított testi-lelki betegeket, imádságom meghallgatásaként",
        value: 70,
      },
      {
        text: "...hogy azt mondták némelyek, hogy az ismereteimet jól át tudtam nekik adni",
        value: 71,
      },
      {
        text: "...hogy egy számomra ismeretlen nyelven imádkoztam Istenhez",
        value: 72,
      },
      {
        text: "...hogy némelyek bonyolult probléma megoldásában tanácsot kértek tőlem, és ez segített nekik",
        value: 73,
      },
      {
        text: "...hogy jobban hozzá tudok férkőzni egyszerű emberekhez, mert úgy döntöttem, hogy nagyon egyszerű életet élek",
        value: 74,
      },
      {
        text: "...hogy gyakorlati képességeimmel segíthettem másoknak",
        value: 75,
      },
      {
        text: "...felelős pozicíóban levő testvérek jobban végezhették feladatukat, mert átvettem tőlük részfeladatokat",
        value: 76,
      },
      {
        text: "...sokan találkoznak nálam, mert jól érzik magukat",
        value: 77,
      },
      {
        text: "...Isten egyértelműen avatkozott be, amikor bizonyos dolgok megoldásáért imádkoztam",
        value: 78,
      },
      {
        text: "...a nyelveken szóló értelmezésem beleillett a szituációba",
        value: 79,
      },
      {
        text: "...elsőként általam hozott javaslatok később beváltak",
        value: 80,
      },
      {
        text: "...más keresztyéneket motiválhattam, hogy dolgozzanak bizonyos célok elérése érdekében",
        value: 81,
      },
      { text: "...szenvedésem másokat megerősített", value: 82 },
      {
        text: "...embereken akik szükségben voltak, segíthettem a gyakorlatban",
        value: 83,
      },
      {
        text: "...Isten eszközül használt, jelek és csodák tételében",
        value: 84,
      },
      {
        text: "...más gyülekezetek vezetői figyelembe vették, alkalmazták tanácsaimat",
        value: 85,
      },
      {
        text: "...hívőket hosszú távú személyes kapcsolatápolással segíthettem a lelki fejlődésben",
        value: 86,
      },
      {
        text: "...némelyek azt mondják, hogy amit én mondtam nekik, az Istentől való üzenet volt az életükben",
        value: 87,
      },
      {
        text: "...gyorsabban meglátom a gyülekezetben a feladatot, mint mások, és meg is teszem",
        value: 88,
      },
      {
        text: "...muzikális képességeimmel másoknak szolgáltam, erősítettem őket",
        value: 89,
      },
      {
        text: "...kreatív képességeimet Isten dicsőítésére használhattam",
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
        text: "...megtervezem a napomat, és nem bízom a dolgokat a véletlenre",
        value: 91,
      },
      {
        text: "...örömet jelent, ha tanulhatok más kultúrákról",
        value: 92,
      },
      {
        text: "...azonosulni tudok Pál azon mondatával, hogy mások is maradjanak házasság nélkül, mint ő",
        value: 93,
      },
      {
        text: "...nagyon nyugtalanít, ha valaki valami jó dolgot mond, a motivációja azonban nem tiszta",
        value: 94,
      },
      {
        text: "...nagy problémát jelent nekem, hogy nagyon sokan nem tesznek bizonyságot hitükről",
        value: 95,
      },
      {
        text: "...ha emberek a problémákról beszélnek nekem, több eggyüttérzés van bennem (mint talán másokban)",
        value: 96,
      },
      {
        text: "...számomra teljesen világos, hogy Isten akkor is megtartja szavát, ha a körülmények mást mutatnak",
        value: 97,
      },
      {
        text: "...személyes megszólítottságot érzek, ha mások anyagi problémáiról hallok",
        value: 98,
      },
      {
        text: "...engem nagyon zavar, ha vannak hívők, akik nem is hiszik, hogy léteznek démonok",
        value: 99,
      },
      {
        text: "...engem nagyon zavar, ha a gyülekezetben keveset imádkozunk betegekért",
        value: 100,
      },
      {
        text: "...szenvedek attól, hogy csak nagyon kevés hívő tudja ismeretét, érthetően, élvezhetően előadni",
        value: 101,
      },
      {
        text: "...jól érzem magam olyan csoportban, ahol nyelveken imádkoznak",
        value: 102,
      },
      {
        text: "...fontosnak tartom, hogy a gyülekezet tapasztalt szakemberektől tanácsot fogadjon el",
        value: 103,
      },
      {
        text: "...nekem problémát okoz az, hogy nagyon sok hívő ember anyagilag túlzottan jó körülmények között él",
        value: 104,
      },
      {
        text: "...engem zavar, ha épületek, eszközök, stb. rossz állapotban vannak, nem használják őket rendeltetésszerűen",
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
        text: "...nekem jólesik olyan szolgálatot is elvégezni, amit mások nem tartanak elég látványosnak",
        value: 106,
      },
      {
        text: "...akkor is tudok örülni előre nem jelzett vendégeknek, ha nincs rendben a lakásom",
        value: 107,
      },
      {
        text: "...másoktól hallott imatémákat komolyan veszem, és rendszeresen imádkozom értük",
        value: 108,
      },
      {
        text: "...ha valaki nyelveken szól, azért imádkozom, hogy megmagyarázhassam",
        value: 109,
      },
      {
        text: "...szívesen foglalkozom bibliai összefüggésekkel, és ezek alkalmazásával a mindennapi életben",
        value: 110,
      },
      {
        text: "...fontosnak tartom, hogy egy keresztyén csoportot jóképességű vezető vezessen",
        value: 111,
      },
      {
        text: "...keresztyén mártírokról szóló beszámolók elbűvölnek engem",
        value: 112,
      },
      {
        text: "...ha szükséget látok, legszívesebben azonnal segítenék",
        value: 113,
      },
      {
        text: "...imádkozom azért, hogy Isten általam is tegyen csodát, mint tette ezt az első keresztyének idejében",
        value: 114,
      },
      {
        text: "...nagyon fontosnak tartom, hogy legyen egység a gyülekezetek között",
        value: 115,
      },
      {
        text: "...nagyon nyomaszt, hogy keresztyének, testileg és lelkileg sem részesülnek elégséges gondozásban, támogatásban",
        value: 116,
      },
      {
        text: "...imádkozom azért, hogy Isten még közvetlenebbül szóljon hozzám, mint ahogyan ma tapasztalom",
        value: 117,
      },
      {
        text: "...észreveszem, ha másoknak gyakorlati segítségre van szüksége, kész is vagyok segíteni",
        value: 118,
      },
      {
        text: "...elszomorít, ha kevés hangsúlyt helyeznek a gyülekezetben a zenére",
        value: 119,
      },
      {
        text: "...az a vágyam, hogy a hívők tartsák szép rendben környezetüket",
        value: 120,
      },
    ],
  },
  {
    sectionName: "Kedvemre van...",
    description:
      "Ha még nincs tapasztalatod ezen a területen, jelöld meg az utolsó opciót.",
    answers: [
      { text: "nagyon erősen", value: 9 },
      { text: "erősen", value: 7 },
      { text: "kevésbé", value: 4 },
      { text: "gyengén", value: 2 },
      { text: "nem", value: 0 },
    ],
    questions: [
      {
        text: "...üzleti, és szervezési kérdéseket önállóan megvalósítani",
        value: 121,
      },
      {
        text: "...megtalálni emberekhez az utat, akiknek egészen más életstílusuk van, mint nekem",
        value: 122,
      },
      {
        text: "...hogy figyelmen kívül hagyjam a családalapítást (házasok jelöljék az utolsó opciót)",
        value: 123,
      },
      {
        text: "...hogy megvizsgáljam, hogy az adott szavak, isteni, emberi, vagy sátáni eredetűek-e",
        value: 124,
      },
      {
        text: "...hogy figyeljek másokra, és segítő módon viselkedjek",
        value: 125,
      },
      {
        text: "...hogy egy beszélgetésben pontosan megtudjam, hogy mi játszódik le a másikban, és segítő módon viselkedjek",
        value: 126,
      },
      {
        text: "...hogy olyan dolgokért imádkozzam és dolgozzam, melyeket mások lehetetlennek tartanak",
        value: 127,
      },
      {
        text: "...hogy jövedelmem egy fontos hányadát, rendszeresen Isten ügyére fordíthatom",
        value: 128,
      },
      {
        text: "...ha észrevehetem, hogy van-e valakinek az életében démonikus befolyás, terület",
        value: 129,
      },
      {
        text: "...ha személyesen és konkrétan imádkozhatok betegek gyógyulásáért",
        value: 130,
      },
      {
        text: "...ha információkat logikusan, érdekesen és érthetően adhatok tovább a hallgatóságnak",
        value: 131,
      },
      { text: "...ha nyelveken imádkozhatok", value: 132 },
      {
        text: "...ha elméleti ismeretet, konkrét helyzetben alkalmazhatok",
        value: 133,
      },
      { text: "...ha anyagilag alacsonyabb életnívón élhetek", value: 134 },
      {
        text: "...ha teljesen gyakorlati munkát végezhetek a két kezemmel",
        value: 135,
      },
      {
        text: "...hogy más hívőktől szolgálatot vegyek át, hogy ők jobban végezhessék az ő szolgálatukat",
        value: 136,
      },
      {
        text: "...ha ismeretlen látogatóknak az otthon érzését nyújthatom",
        value: 137,
      },
      {
        text: "...ha bizonyos dolgokért hetekig, hónapokig imádkozhatok",
        value: 138,
      },
      {
        text: "...ha megérezhetem, hogy mit akar Isten mondani, nyelveken",
        value: 139,
      },
      {
        text: "...ha tényeket fedezhetek fel, és szisztematikusan megfogalmazhatok, melyek a gyülekezet építésére vannak",
        value: 140,
      },
      { text: "...ha másokat feladattal bízhatok meg", value: 141 },
      {
        text: "...ha Krisztusért szenvedést vállalhatok magamra",
        value: 142,
      },
      {
        text: "...ha kifejezhetem együttérzésemet, szükségben levő embereknek",
        value: 143,
      },
      {
        text: "...ha természetfeletti jelekért, csodákért imádkozhatok",
        value: 144,
      },
      {
        text: "...ha csoportokat, gyülekezeteket tanácsolhatok szellemi állapotukat illetően",
        value: 145,
      },
      {
        text: "...ha keresztyének csoportját személyesen kísérhetem, és ha dolgozhatok egységükért",
        value: 146,
      },
      {
        text: "...ha Istentől felvilágosítást kapok arra, hogy bizonyos helyzetben mi az ő akarata",
        value: 147,
      },
      {
        text: "...hogy komolyan vegyek olyan szolgálatot, amit mások nem tartanak elég látványosnak",
        value: 148,
      },
      {
        text: "...ha mások jelenlétében Isten dicsőségére zenélhetek, énekelhetek",
        value: 149,
      },
      {
        text: "...ha kreatív lehetek, és így kommunikálhatok (festés, rajz, pantomim, színdarab, bábjáték stb. )",
        value: 150,
      },
    ],
  },
  {
    sectionName: "Készen lennék arra, hogy...",
    answers: [
      { text: "nagyon szívesen", value: 7 },
      { text: "szívesen", value: 5 },
      { text: "adott esetben", value: 2 },
      { text: "szükség esetén", value: 1 },
      { text: "semmi esetre sem", value: 0 },
    ],
    questions: [
      {
        text: "...képzéseken vegyek részt, melyek segítenek abban, hogy a tervezésben, szervezésben és mások bevonásában fejlődjek",
        value: 151,
      },
      {
        text: "...egy idegen kultúrában dolgozzak, ha erre lehetőség nyílik",
        value: 152,
      },
      {
        text: "...hajadon, vagy nőtlen maradjak, hogy ezáltal többet dolgozhassak Isten országáért (házasok jelöljék az utolsó opciót)",
        value: 153,
      },
      {
        text: "...hogy sok időt töltsek a Biblia, és más irodalom alapos tanulmányozásával, tisztább látásért, a különbségtételre",
        value: 154,
      },
      {
        text: "...olyan tanfolyamon vegyek részt, ahol abban segíthetek, hogy hogyan lehet valakit hitre segíteni",
        value: 155,
      },
      {
        text: "...hogy tanuljak arról, hogyan tudok másoknak rendszeres beszélgetés által segíteni",
        value: 156,
      },
      {
        text: "...akkor is elkezdjek egy feladatot, ha nagy a kockázata",
        value: 157,
      },
      {
        text: "...jól munkálkodó testvéreket, rendszeresen támogassak",
        value: 158,
      },
      {
        text: "...hogy szembeszáljak démonikus erőkkel, ha mások is segítenek ebben nekem",
        value: 159,
      },
      {
        text: "...hogy betegekért végzett imaszolgálatban vegyek részt",
        value: 160,
      },
      {
        text: "...több irodalmat olvassak a kommunikációról, hogy képességeimet növeljem ezen a területen",
        value: 161,
      },
      {
        text: "...hogy nyelveken szóljak, ha Isten megadja nekem ezt az ajándékot",
        value: 162,
      },
      {
        text: "...sok időt szenteljek annak, hogy embereket, csoportokat tanácsoljak nehéz döntéseikben",
        value: 163,
      },
      {
        text: "...szükség szerint lemondjak jó ételről, kényelmes otthonról, drága ruháról",
        value: 164,
      },
      {
        text: "...szükség esetén a gyülekezetben előforduló munkában részt vegyek, segítsek",
        value: 165,
      },
      {
        text: "...túlterhelt keresztyének munkáján könnyítsek úgy, hogy támogatom őket szolgálatukban",
        value: 166,
      },
      {
        text: "...otthonomat jobban megosszam barátaimmal, mint eddig",
        value: 167,
      },
      {
        text: "...egy gyülekezeti csoportban dolgozzak, akik folyamatos imaszolgálatot végeznek",
        value: 168,
      },
      {
        text: "...a nyelveken szólást megmagyarázzam, ha Isten megadja a jelentést",
        value: 169,
      },
      {
        text: "...sok időt szánjak annak kutatására, hogy mik azok a dolgok, melyek elősegítik a gyülekezet egészséges fejlődését",
        value: 170,
      },
      {
        text: "...vezessek rám bízott nagyobb létszámú közösséget",
        value: 171,
      },
      {
        text: "...életemet kockára tegyem, ha ezt kivánná Isten országa",
        value: 172,
      },
      {
        text: "...olyan gyülekezeti szolgálatban vegyek részt, akik törődnek a társadalom peremén élőkkel",
        value: 173,
      },
      {
        text: "...imádságban, olyan esetekre koncentráljak, melyek emberi számítás szerint kilátástalanok",
        value: 174,
      },
      {
        text: "...gyülekezetek között fennálló konfliktusok megoldásában segítsek",
        value: 175,
      },
      {
        text: "...átvegyem a felelősségét, egy hívőkből álló csoport vezetésének",
        value: 176,
      },
      {
        text: "...gyülekezeti tagoknak Istentől vett üzeneteket közvetítsek, akkor is, ha ez kényelmetlen néha",
        value: 177,
      },
      {
        text: "...időt szánjak a gyülekezetben olyan dolgokra, melyek a legsürgősebben elvégzendők",
        value: 178,
      },
      {
        text: "...hozzájáruljak a gyülekezet zenei életéhez",
        value: 179,
      },
      {
        text: "...olyan gyülekezeti csoportban dolgozzam, ahol lehetőség van a művészi képességek kifejlesztésére",
        value: 180,
      },
    ],
  },
];

export interface IQuestionDetails {
  id: string;
  questionNumber: number;
  questionText: string;
  sectionName: string;
  description?: string;
  answers: QuizAnswer[];
}

export const getQuizData = (): IQuestionDetails[] => {
  const result: IQuestionDetails[] = [];

  quizData.forEach((section) => {
    section.questions.forEach((question: { text: string; value: number }) => {
      const currentQuestion = {
        id: uuidv4(),
        questionNumber: question.value,
        questionText: question.text,
        sectionName: section.sectionName,
        description: section.description,
        answers: section.answers.map((answer) => ({
          id: uuidv4(),
          text: answer.text,
          value: answer.value,
        })),
      };

      result.push(currentQuestion);
    });
  });

  return result;
};

export const getQuizDataForReferral = (): IQuestionDetails[] => {
  const result: IQuestionDetails[] = [];

  quizDataReferral.forEach((section) => {
    section.questions.forEach((question: { text: string; value: number }) => {
      const currentQuestion = {
        id: uuidv4(),
        questionNumber: question.value - 180,
        questionText: question.text,
        sectionName: section.sectionName,
        description: section.description,
        answers: section.answers.map((answer) => ({
          id: uuidv4(),
          text: answer.text,
          value: answer.value,
        })),
      };

      result.push(currentQuestion);
    });
  });

  return result;
};
