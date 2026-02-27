import React from "react";
import { QuizAnswer } from "../../types/Quiz";
import AnswerOption from "../AnswerOption";
import Question from "../Question";
import { Description } from "../Typography";

interface QuestionDisplayProps {
  sectionName: string;
  description?: string;
  questionText: string;
  questionNumber: number;
  answerOptions: QuizAnswer[];
  selectedAnswer: QuizAnswer | null;
  onAnswerSelect: (answer: QuizAnswer) => void;
}

/**
 * Displays a quiz question with its section name, description, and answer options
 */
const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  sectionName,
  description,
  questionText,
  questionNumber,
  answerOptions,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div>
      <Description text={sectionName} />
      {description && <Description small text={`(${description})`} />}

      <div className="mb-4 mt-4">
        <Question
          question={{
            text: questionText,
            value: questionNumber,
          }}
        />

        <div className="mt-2">
          {answerOptions.map((answer: QuizAnswer) => (
            <AnswerOption
              key={answer.id}
              answer={answer}
              isSelected={selectedAnswer?.text === answer.text}
              onSelect={onAnswerSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDisplay;
