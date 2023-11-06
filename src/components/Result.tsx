import { useEffect, useState } from "react";
import {
  LocalStorageKeys,
  loadFromLocalStorage,
} from "../utils.js/local-storage";
import { QuizAnswer } from "../types/Quiz";
import { v4 as uuidv4 } from "uuid";

const Result = () => {
  const [answers, setAnswers] = useState<
    { questionNumber: number; answer: QuizAnswer }[]
  >([]);

  useEffect(() => {
    const localStorageAnswers = loadFromLocalStorage(LocalStorageKeys.Answers);

    if (localStorageAnswers) {
      const currentAnswers = JSON.parse(localStorageAnswers.value).filter(
        (result: QuizAnswer) => result
      );

      setAnswers(currentAnswers);
    }
  }, []);

  return (
    <div>
      <p>Result</p>

      {answers.map((answer) => (
        <p key={uuidv4()}>
          {answer.questionNumber} - {answer.answer.text} ({answer.answer.value})
        </p>
      ))}
    </div>
  );
};

export default Result;
