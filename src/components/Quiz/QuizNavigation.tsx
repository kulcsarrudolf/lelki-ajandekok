import React from "react";
import Button from "../Button";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  isAnswerSelected: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit?: () => void;
  submitButtonText?: string;
}

/**
 * Navigation controls for quiz (Previous, Next, Submit buttons)
 */
const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  isAnswerSelected,
  onPrevious,
  onNext,
  onSubmit,
  submitButtonText = "Válaszok elküldése",
}) => {
  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === totalQuestions;

  return (
    <div className="space-y-2 mt-4">
      {/* Submit button (only shown on last question) */}
      {isLastQuestion && isAnswerSelected && onSubmit && (
        <div className="flex justify-center my-2">
          <Button
            onClick={onSubmit}
            disabled={!isAnswerSelected}
            text={submitButtonText}
            fullWidth
          />
        </div>
      )}

      {/* Previous/Next navigation */}
      <div className="flex flex-col-reverse space-y-2 space-y-reverse xs:flex-row xs:space-y-0 xs:space-x-2 justify-center">
        <Button
          onClick={onPrevious}
          disabled={isFirstQuestion}
          text="Előző kérdés"
          order={1}
          colorClass="bg-rose-500 hover:bg-rose-600"
        />

        <Button
          onClick={onNext}
          disabled={!isAnswerSelected || isLastQuestion}
          text="Következő kérdés"
          order={2}
        />
      </div>
    </div>
  );
};

export default QuizNavigation;
