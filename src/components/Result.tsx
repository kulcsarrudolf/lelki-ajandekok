import { useEffect, useState } from "react";
import {
  LocalStorageKeys,
  loadFromLocalStorage,
} from "../utils.js/local-storage";
import { QuizAnswer } from "../types/Quiz";
import { v4 as uuidv4 } from "uuid";
import gifts from "../data/gifts";
import Button from "./Button";
import { Navigate } from "react-router-dom";
import { QUIZ_CONSTANTS } from "../constants/quiz";

type Gift = {
  name: string;
  partA: number[];
  partB: number[];
};

const calculateScoresForPart = (
  gifts: Gift[],
  answers: any[],
  part: "partA" | "partB"
) =>
  gifts.map((gift) => {
    const score = gift[part].reduce((total, questionNumber) => {
      const answer = answers.find(
        (answer) => answer.questionNumber === questionNumber
      );

      return total + (answer ? answer.answer.value : 0);
    }, 0);

    return {
      gift: gift.name,
      score: score,
    };
  });

const sortResultsDesc = (results: { gift: string; score: number }[]) =>
  results.sort((a, b) => b.score - a.score);

const getResults = (answers: any[]) => {
  const answersCopy = JSON.parse(JSON.stringify(answers));
  let partAResult = calculateScoresForPart(gifts, answersCopy, "partA");
  let partBResult = calculateScoresForPart(gifts, answersCopy, "partB");

  partAResult = sortResultsDesc(partAResult).slice(0, QUIZ_CONSTANTS.TOP_GIFTS_COUNT);
  const partAGifts = partAResult.map((result: any) => result.gift);

  partBResult = sortResultsDesc(partBResult)
    .filter((item) => !partAGifts.includes(item.gift))
    .slice(0, QUIZ_CONSTANTS.TOP_GIFTS_COUNT);
  return { partAResult, partBResult };
};

interface ResultProps {
  goToHome: () => void;
}
const Result = ({ goToHome }: ResultProps) => {
  const [result, setResult] = useState<any>(null);
  const [isComplete, setIsComplete] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const localStorageAnswers = loadFromLocalStorage(LocalStorageKeys.Answers);

    if (localStorageAnswers) {
      const currentAnswers = JSON.parse(localStorageAnswers.value).filter(
        (result: QuizAnswer) => result
      );

      setIsComplete(currentAnswers.length === 180);

      const result = getResults(currentAnswers);

      setResult(result);
    }
  }, []);

  if (!result) {
    return <div>Loading...</div>;
  }

  if (isComplete === undefined) {
    return <div>Loading...</div>;
  }

  if (isComplete === false) {
    return <Navigate to="/" />;
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold mb-2">AJÁNDÉKAIM</h3>
        <ul className="list-disc space-y-2 pl-5">
          {result.partAResult.map((result: any) => (
            <li key={uuidv4()}>{result.gift}</li>
          ))}
        </ul>
      </div>

      <hr className="my-6 border-gray-200" />

      <div>
        <h3 className="text-xl font-semibold mb-2">REJTETT AJÁNDÉKAIM</h3>
        <ul className="list-disc space-y-2 pl-5">
          {result.partBResult.map((result: any) => (
            <li key={uuidv4()}>{result.gift}</li>
          ))}
        </ul>
        <p className="my-4 font-semibold ">
          A <span className="text-blue-600">rejett ajándékok</span> további
          lehetséges karizmákat jelölnek. Kérd Istent, hogy gerjessze fel benned
          őket!
        </p>
      </div>

      <div className="flex justify-center my-2">
        <Button
          onClick={goToHome}
          disabled={false}
          text="Vissza a kezdőlapra"
          fullWidth
        />
      </div>
    </div>
  );
};

export default Result;
