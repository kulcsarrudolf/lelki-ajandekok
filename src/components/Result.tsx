import { useEffect, useState } from "react";
import {
  LocalStorageKeys,
  loadFromLocalStorage,
} from "../utils.js/local-storage";
import { QuizAnswer } from "../types/Quiz";
import { v4 as uuidv4 } from "uuid";
import gifts from "../data/gifts";
import { Subtitle } from "./Typography";

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
  let partAResult = calculateScoresForPart(gifts, answers, "partA");
  let partBResult = calculateScoresForPart(gifts, answers, "partB");

  partAResult = sortResultsDesc(partAResult).slice(0, 5);
  partBResult = sortResultsDesc(partBResult).slice(0, 5);

  return { partAResult, partBResult };
};

const Result = () => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const localStorageAnswers = loadFromLocalStorage(LocalStorageKeys.Answers);

    if (localStorageAnswers) {
      const currentAnswers = JSON.parse(localStorageAnswers.value).filter(
        (result: QuizAnswer) => result
      );

      const result = getResults(currentAnswers);

      setResult(result);
    }
  }, []);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Subtitle text="Ajándékaim" />

      {result.partAResult.map((result: any) => (
        <p key={uuidv4()}>{result.gift}</p>
      ))}

      <Subtitle text="Rejtett Ajándékaim" />

      {result.partBResult.map((result: any) => (
        <p key={uuidv4()}>{result.gift}</p>
      ))}
    </div>
  );
};

export default Result;
