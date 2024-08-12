import { useNavigate } from "react-router-dom";
import QuizCard from "../QuizCard";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <QuizCard
      handleNextStep={() => {
        navigate("/results");
      }}
    />
  );
};

export default Quiz;
