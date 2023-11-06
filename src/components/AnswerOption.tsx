import React from "react";
import { QuizAnswer } from "../types/Quiz";

interface AnswerOptionProps {
  // answerText: string;
  answer: QuizAnswer;
  isSelected: boolean;
  onSelect: (answer: QuizAnswer) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  // answerText,
  answer,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`flex items-center mb-2 p-2 rounded cursor-pointer ${
        isSelected ? "bg-blue-300" : "bg-gray-200"
      }`}
      onClick={() => onSelect(answer)}
    >
      <label
        htmlFor={answer.text}
        className="select-none ml-2 p-1 rounded w-full"
      >
        <input
          type="radio"
          id={answer.text}
          name="question"
          value={answer.text}
          checked={isSelected}
          onChange={() => onSelect(answer)}
          className="mr-2 h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
          style={{
            opacity: 0,
            position: "absolute",
            margin: 0,
          }}
        />
        {answer.text}
      </label>
    </div>
  );
};

export default AnswerOption;
