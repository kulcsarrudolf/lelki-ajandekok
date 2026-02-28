import { useNavigate } from "react-router-dom";
import QuizCard from "../../components/QuizCard";
import { getQuizDataForReferral, IQuestionDetails } from "../../data/quiz";
import {
  loadFromLocalStorage,
  LocalStorageKeys,
  removeFromLocalStorage,
} from "../../utils/local-storage";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { StoredAnswer } from "../../types/Quiz";

const quizData: IQuestionDetails[] = getQuizDataForReferral();

function formatName(name: string): string {
  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return `${name}nál(nél)`;
}

const QuizReferral = () => {
  const navigate = useNavigate();
  const [referralName, setReferralName] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const { submitAnswers } = useApi();

  const handleAnswersSubmit = async () => {
    const answers = loadFromLocalStorage(LocalStorageKeys.AnswersLastReferal);

    const answerObject: StoredAnswer[] = JSON.parse(answers?.value ?? "[]").filter(
      (answer: StoredAnswer | null) => answer !== null
    );

    await submitAnswers(referralCode!, answerObject);

    removeFromLocalStorage(LocalStorageKeys.AnswersLastReferal);
    removeFromLocalStorage(LocalStorageKeys.LastQuestionNumberLastReferal);

    navigate("/");
  };

  if (!referralName || !referralCode || !startQuiz) {
    return (
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Barátod neve"
          onChange={(e) => setReferralName(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Barátod azonosítója"
          onChange={(e) => setReferralCode(e.target.value.trim().toUpperCase())}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value
              .toLocaleUpperCase()
              .replace(/[^A-Z0-9]/g, "");
          }}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-sm text-gray-500">
          Írd be az azonosítót, amit a barátodtól kaptál.
        </p>
        <button
          onClick={() => {
            setStartQuiz(true);
            removeFromLocalStorage(LocalStorageKeys.AnswersLastReferal);
            removeFromLocalStorage(
              LocalStorageKeys.LastQuestionNumberLastReferal
            );
          }}
          className="block w-full p-2 bg-blue-500 text-white rounded"
        >
          Tovább
        </button>
      </div>
    );
  }

  return (
    <QuizCard
      handleNextStep={handleAnswersSubmit}
      quizData={quizData.map((question) => ({
        ...question,
        sectionName: question.sectionName.replace(
          "{{referralName}}",
          formatName(referralName)
        ),
      }))}
      lastQuestionNumberKey={LocalStorageKeys.LastQuestionNumberLastReferal}
      answersKey={LocalStorageKeys.AnswersLastReferal}
    />
  );
};

export default QuizReferral;
