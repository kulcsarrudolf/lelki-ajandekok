import { useEffect, useState } from "react";
import Button, { TextButton } from "../../design-system/Button";
import {
  LocalStorageKeys,
  clearLocalStorage,
  loadFromLocalStorage,
} from "../../utils/local-storage";
import { useNavigate } from "react-router-dom";
import { StoredAnswer } from "../../types/Quiz";

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
      const currentAnswers: StoredAnswer[] = JSON.parse(localStorageAnswers.value).filter(
        (result: StoredAnswer | null) => result !== null
      );

      if (currentAnswers.length > 0) {
        setQuizButtonText("A teszt folytatása");
        setShowResetButton(true);
      }

      setIsCompleted(currentAnswers.length === 180);
    }
  }, []);

  return (
    <div className="space-y-4 text-foreground/80 font-body text-base leading-relaxed">
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
      <p className="font-semibold text-foreground">
        Olvasd el a 180 mondatot, és jelöld meg az öt válasz közül azt, amelyik
        legközelebb áll hozzád. Adj őszinte és spontán választ!
      </p>
      <p className="font-semibold italic text-primary">
        Sok örömet kívánunk neked a teszt elkészítése közben!
      </p>
      <p className="text-sm text-muted-foreground">
        Forrás:{" "}
        <a
          href="http://www.tavasz56.hu/tp/szolg/20091220-karizma_teszt.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80"
        >
          karizma_teszt.pdf
        </a>
      </p>

      <div className="space-y-3 pt-4">
        {!isCompleted && (
          <Button
            disabled={false}
            text={quizButtonText}
            onClick={goForward}
            fullWidth
          />
        )}

        {isCompleted && (
          <Button
            disabled={false}
            text="Ajándékaim megtekintése"
            onClick={() => navigate("/results")}
            fullWidth
          />
        )}
        {isCompleted && (
          <Button
            disabled={false}
            text="Barátaid meghívása"
            onClick={() => navigate("/invite")}
            fullWidth
          />
        )}

        <Button
          disabled={false}
          text="Teszt kitöltése egy barátom számára"
          onClick={() => navigate("/quiz-referral")}
          fullWidth
          variant="outline"
        />

        {showResetButton && (
          <Button
            disabled={false}
            text="Teszt újrakezdése"
            onClick={handleDeleteLocalStorage}
            fullWidth
            variant="outline"
          />
        )}

        <div className="text-center pt-2">
          <TextButton
            text="Adatvédelmi és Biztonsági Tájékoztató"
            onClick={() => navigate("/privacy")}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
