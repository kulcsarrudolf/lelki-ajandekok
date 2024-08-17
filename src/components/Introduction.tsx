import { useEffect, useState } from "react";
import Button from "./Button";
import {
  LocalStorageKeys,
  clearLocalStorage,
  loadFromLocalStorage,
} from "../utils.js/local-storage";
import { useNavigate } from "react-router-dom";

interface IntroductionProps {
  goForward: () => void;
}

const Introduction = ({ goForward }: IntroductionProps) => {
  const [quizButtonText, setQuizButtonText] =
    useState<string>("Tovább a teszthez");
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDeleteLocalStorage = () => {
    clearLocalStorage();
    setShowResetButton(false);
    setQuizButtonText("Tovább a teszthez");
  };

  useEffect(() => {
    const localStorageAnswers = loadFromLocalStorage(LocalStorageKeys.Answers);

    if (localStorageAnswers) {
      const currentAnswers = JSON.parse(localStorageAnswers.value).filter(
        (result: any) => result
      );

      if (currentAnswers.length > 0) {
        setQuizButtonText("A teszt folytatása");
        setShowResetButton(true);
      }

      setIsCompleted(currentAnswers.length === 180);
    }
  }, []);

  return (
    <>
      <p>
        Minden hívőnek teremnie kell a Lélek gyümölcsét. Minden újjászületett
        hívő ember kapott legalább egy lelki ajándékot (karizmát), hogy
        eszközként használva boldogan, eredményesen, harmónikusan végezze
        szolgálatát Isten gyermekeként a gyülekezetben. Isten szeretetének,
        evangéliumának továbbadására, a sötétség visszaszorítására, sebek
        enyhítésére, Isten országa építésére. E közre adott teszt segítség lehet
        Istentől kapott lelkiajándékaid felismerésére, elfogadására,
        kifejlesztésére, megfelelő szolgálati terület megtalálásához. Az Úr azt
        akarja, hogy tudjuk, milyen lelki ajándékot kaptunk, s azzal
        sáfárkodjunk örömmel.
      </p>
      <p className="mt-4 font-bold">
        Olvasd el a 180 mondatot, és jelöld meg az öt válasz közül azt, amelyik
        legközelebb áll hozzád. Adj őszinte és spontán választ!
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
      {!isCompleted && (
        <div className="w-full mt-10 flex justify-center">
          <Button
            disabled={false}
            text={quizButtonText}
            onClick={goForward}
            fullWidth
          />
        </div>
      )}

      {isCompleted && (
        <div className="w-full mt-2 flex justify-center w-108">
          <Button
            disabled={false}
            text="Ajándékaim megtekintése"
            onClick={() => navigate("/results")}
            fullWidth={true}
          />
        </div>
      )}
      {isCompleted && (
        <div className="w-full mt-2 flex justify-center w-108">
          <Button
            disabled={false}
            text="Barátaid meghívása"
            onClick={() => navigate("/invite")}
            fullWidth={true}
          />
        </div>
      )}
      {showResetButton && (
        <div className="w-full mt-2 flex justify-center w-108">
          <Button
            disabled={false}
            text="Teszt újrakezdése"
            onClick={handleDeleteLocalStorage}
            fullWidth={true}
          />
        </div>
      )}
    </>
  );
};

export default Introduction;
