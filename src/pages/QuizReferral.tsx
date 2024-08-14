import { useNavigate } from "react-router-dom";
import QuizCard from "../QuizCard";
import { getQuizDataForReferral, IQuestionDetails } from "../data/quiz";
import { LocalStorageKeys } from "../utils.js/local-storage";
import { useState } from "react";

const quizData: IQuestionDetails[] = getQuizDataForReferral();

// function determineSuffix(name: string): string {
//   const frontVowels = new Set(["e", "é", "i", "í", "ö", "ő", "ü", "ű"]);
//   const backVowels = new Set(["a", "á", "o", "ó", "u", "ú"]);

//   const lowerName = name.toLowerCase();

//   for (let i = lowerName.length - 1; i >= 0; i--) {
//     const char = lowerName[i];
//     if (frontVowels.has(char)) {
//       return `${name}nél`;
//     }

//     if (backVowels.has(char)) {
//       return `${name}nál`;
//     }
//   }

//   return `${name}nál`;
// }

function formatName(name: string): string {
  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  // if (name.length > 4) {
  //   return determineSuffix(name);
  // }

  return `${name}nál(nél)`;
}

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
