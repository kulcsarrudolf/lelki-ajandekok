import React from "react";
import { QuizAnswer } from "../types/Quiz";
import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  answer: QuizAnswer;
  isSelected: boolean;
  onSelect: (answer: QuizAnswer) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ answer, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(answer)}
      className={cn(
        "w-full text-left px-5 py-4 rounded-lg font-body text-base transition-all duration-200 border",
        isSelected
          ? "bg-option-selected text-option-selected-foreground border-primary shadow-option-hover scale-[1.02]"
          : "bg-option text-option-foreground border-transparent shadow-option hover:shadow-option-hover hover:border-primary/30 hover:scale-[1.01]"
      )}
    >
      {answer.text}
    </button>
  );
};

export default AnswerOption;
