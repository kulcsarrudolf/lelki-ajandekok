import { useNavigate } from "react-router-dom";
import QuizCard from "../QuizCard";
import { getQuizDataForReferral, IQuestionDetails } from "../data/quiz";
import { LocalStorageKeys } from "../utils.js/local-storage";
import { useState } from "react";

const quizData: IQuestionDetails[] = getQuizDataForReferral();

const QuizReferral = () => {
  const navigate = useNavigate();
  const [referralName, setReferralName] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

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
          onChange={(e) => setReferralCode(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={() => {
            setStartQuiz(true);
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
      handleNextStep={() => {
        navigate("/results");
      }}
      quizData={quizData}
      lastQuestionNumberKey={LocalStorageKeys.LastQuestionNumberLastReferal}
      answersKey={LocalStorageKeys.AnswersLastReferal}
    />
  );
};

export default QuizReferral;
