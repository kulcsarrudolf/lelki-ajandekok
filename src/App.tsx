import { useState } from "react";
import QuizCard from "./QuizCard";
import { Title } from "./components/Typography";
import Introduction from "./components/Introduction";
import Result from "./components/Result";

enum Step {
  Inroduction,
  Quiz,
  Result,
}

function App() {
  const [step, setStep] = useState<Step>(Step.Inroduction);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-5 bg-white rounded shadow-lg">
        <Title text="Lelki ajándékok" />
        {step === Step.Inroduction && (
          <Introduction
            goForward={() => {
              setStep(Step.Quiz);
            }}
          />
        )}
        {step === Step.Quiz && (
          <QuizCard
            handleNextStep={() => {
              setStep(Step.Result);
            }}
          />
        )}

        {step === Step.Result && (
          <Result
            goToHome={() => {
              setStep(Step.Inroduction);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
