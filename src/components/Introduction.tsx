import { useEffect, useState } from "react";
import Button from "./Button";
import {
  LocalStorageKeys,
  clearLocalStorage,
  loadFromLocalStorage,
} from "../utils.js/local-storage";

interface IntroductionProps {
  goForward: () => void;
}

const Introduction = ({ goForward }: IntroductionProps) => {
  const [quizButtonText, setQuizButtonText] =
    useState<string>("Tovább a teszthez");
  const [showResetButton, setShowResetButton] = useState<boolean>(false);

  const handleDeleteLocalStorage = () => {
    clearLocalStorage();
    setShowResetButton(false);
    setQuizButtonText("Tovább a teszthez");
  };

  useEffect(() => {
    console.log("Introduction rendered");
    const localStorageAnswers = loadFromLocalStorage(LocalStorageKeys.Answers);

    if (localStorageAnswers) {
      const currentAnswers = JSON.parse(localStorageAnswers.value).filter(
        (result: any) => result
      );

      if (currentAnswers.length > 0) {
        setQuizButtonText("A teszt folytatása");
        setShowResetButton(true);
      }
    }
  }, []);

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
      <p className="mt-4 font-bold">
        Forrás:{" "}
        <span className="font-normal italic text-blue-800">
          <a
            href="http://www.tavasz56.hu/tp/szolg/20091220-karizma_teszt.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.tavasz56.hu/tp/szolg/20091220-karizma_teszt.pdf
          </a>
        </span>
      </p>
      <div className="w-full mt-10 flex justify-center">
        <Button disabled={false} text={quizButtonText} onClick={goForward} />
      </div>
      {showResetButton && (
        <div className="w-full mt-2 flex justify-center">
          <Button
            disabled={false}
            text="Adatok törlése"
            onClick={handleDeleteLocalStorage}
          />
        </div>
      )}
    </>
  );
};

export default Introduction;
