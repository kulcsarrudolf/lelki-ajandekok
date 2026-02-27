import { useState, useEffect, useCallback } from "react";
import { QuizAnswer, StoredAnswer } from "../types/Quiz";
import {
  LocalStorageKeys,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/local-storage";

interface UseQuizStateProps {
  answersKey: LocalStorageKeys;
  lastQuestionNumberKey: LocalStorageKeys;
}

/**
 * Custom hook to manage quiz state (answers and current question)
 * Handles localStorage persistence automatically
 */
export const useQuizState = ({
  answersKey,
  lastQuestionNumberKey,
}: UseQuizStateProps) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [answers, setAnswers] = useState<StoredAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<QuizAnswer | null>(null);

  // Load saved state from localStorage on mount
  useEffect(() => {
    const lastQuestionNumber = loadFromLocalStorage(lastQuestionNumberKey);

    if (lastQuestionNumber) {
      setCurrentQuestionNumber(Number(lastQuestionNumber.value));
    }

    const savedAnswers = loadFromLocalStorage(answersKey);

    if (savedAnswers) {
      const parsedAnswers: StoredAnswer[] = JSON.parse(savedAnswers.value);
      setAnswers(parsedAnswers);

      // Set current answer if it exists
      if (parsedAnswers[currentQuestionNumber]?.answer) {
        setCurrentAnswer(parsedAnswers[currentQuestionNumber].answer);
      }
    }
  }, [answersKey, lastQuestionNumberKey]);

  // Save answer and progress to localStorage
  const saveAnswer = useCallback(
    (questionNumber: number, answer: QuizAnswer) => {
      const answersCopy = [...answers];

      answersCopy[questionNumber] = {
        questionNumber,
        answer,
      };

      setAnswers(answersCopy);

      saveToLocalStorage(answersKey, {
        value: JSON.stringify(answersCopy),
        timestamp: new Date(),
      });

      saveToLocalStorage(lastQuestionNumberKey, {
        value: JSON.stringify(questionNumber + 1),
        timestamp: new Date(),
      });

      // Set next answer if it exists
      if (answersCopy[questionNumber + 1]?.answer) {
        setCurrentAnswer(answersCopy[questionNumber + 1].answer);
      } else {
        setCurrentAnswer(null);
      }
    },
    [answers, answersKey, lastQuestionNumberKey]
  );

  // Navigate to specific question
  const goToQuestion = useCallback(
    (questionNumber: number) => {
      setCurrentQuestionNumber(questionNumber);

      if (answers[questionNumber]?.answer) {
        setCurrentAnswer(answers[questionNumber].answer);
      } else {
        setCurrentAnswer(null);
      }

      saveToLocalStorage(lastQuestionNumberKey, {
        value: JSON.stringify(questionNumber),
        timestamp: new Date(),
      });
    },
    [answers, lastQuestionNumberKey]
  );

  return {
    currentQuestionNumber,
    answers,
    currentAnswer,
    setCurrentAnswer,
    saveAnswer,
    goToQuestion,
  };
};
