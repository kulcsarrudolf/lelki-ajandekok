import Button from "./Button";

interface IntroductionProps {
  goForward: () => void;
}

const Introduction = ({ goForward }: IntroductionProps) => {
  return (
    <>
      <p>
        Minden hívõnek teremnie kell a Lélek gyümölcsét. Minden újjászületett
        hívõ ember kapott legalább egy lelki ajándékot (karizmát), hogy
        eszközként használva boldogan, eredményesen, harmónikusan végezze
        szolgálatát Isten gyermekeként a gyülekezetben. Isten szeretetének,
        evangéliumának továbbadására, a sötétség visszaszorítására, sebek
        enyhítésére, Isten országa építésére. E közre adott teszt segítség lehet
        Istentõl kapott lelkiajándékaid felismerésére, elfogadására,
        kifejlesztésére, megfelelõ szolgálati terület megtalálásához. Az Úr azt
        akarja, hogy tudjuk, milyen lelki ajándékot kaptunk, s azzal
        sáfárkodjunk örömmel.
      </p>
      <p className="mt-4 font-bold">
        Olvasd el a 180 mondatot, és jelöld meg az öt válasz közül azt, amelyik
        legközelebb áll hozzád. Adj õszinte és spontán választ!
      </p>
      <p className="font-bold italic mt-4">
        Sok örömet kívánunk neked a teszt elkészítése közben!
      </p>
      <div className="w-full mt-10 flex justify-center">
        <Button disabled={false} text="Tovább a teszthez" onClick={goForward} />
      </div>
    </>
  );
};

export default Introduction;
