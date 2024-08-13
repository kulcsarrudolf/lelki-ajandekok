import { useNavigate } from "react-router-dom";
import QuizCard from "../QuizCard";
import { getQuizData, IQuestionDetails } from "../data/quiz";
import { LocalStorageKeys } from "../utils.js/local-storage";

const quizData: IQuestionDetails[] = getQuizData();

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <QuizCard
      handleNextStep={() => {
        navigate("/results");
      }}
      quizData={quizData}
      lastQuestionNumberKey={LocalStorageKeys.LastQuestionNumber}
      answersKey={LocalStorageKeys.Answers}
    />
  );
};

export default Quiz;
