import React from "react";

interface AnswerOptionProps {
  answerText: string;
  isSelected: boolean;
  onSelect: (answer: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answerText,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`flex items-center mb-2 p-2 rounded cursor-pointer ${
        isSelected ? "bg-blue-300" : "bg-gray-200"
      }`}
      onClick={() => onSelect(answerText)}
    >
      <label
        htmlFor={answerText}
        className="select-none ml-2 p-1 rounded w-full"
      >
        <input
          type="radio"
          id={answerText}
          name="question"
          value={answerText}
          checked={isSelected}
          onChange={() => onSelect(answerText)}
          className="mr-2 h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
          style={{
            opacity: 0,
            position: "absolute",
            margin: 0,
          }}
        />
        {answerText}
      </label>
    </div>
  );
};

export default AnswerOption;
