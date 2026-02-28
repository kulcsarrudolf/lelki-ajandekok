import React from "react";
import { IQuestion } from "../types/Quiz";

interface QuestionProps {
  question: IQuestion;
}

const Question: React.FC<QuestionProps> = ({ question: { text, value } }) => {
  return (
    <div className="min-h-[7rem]">
      <p className="font-body text-base text-foreground">
        <span className="font-bold">{value}.</span> {text}
      </p>
    </div>
  );
};

export default Question;
