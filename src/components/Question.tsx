import React from "react";

interface QuestionProps {
  question: {
    text: number;
    value: string;
  };
}

const Question: React.FC<QuestionProps> = ({ question: { text, value } }) => {
  return (
    <div className="min-h-[7rem]">
      <p className="italic text-md">
        <span className="font-bold">{value}.</span> {text}
      </p>
    </div>
  );
};

export default Question;
