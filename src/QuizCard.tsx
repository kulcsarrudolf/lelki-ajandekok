import { useState } from "react";
import { QuizAnswer } from "./types/Quiz";
import Button from "./components/Button";
import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";
import { Description } from "./components/Typography";
import { IQuestionDetails, getQuizData } from "./data/quiz";

const quizData: IQuestionDetails[] = getQuizData();

const QuizCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(30);
  const [currentAnswer, setCurrentAnswer] = useState<QuizAnswer | null>(null);

  const handleAnswerSelect = (answer: QuizAnswer) => {
    setCurrentAnswer(answer);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
    setCurrentAnswer(null);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setCurrentAnswer(null);
  };

  return (
    <>
      {quizData.map((question: IQuestionDetails) => {
        if (question.questionNumber !== currentQuestion) return null;

        const { id, sectionName, questionText, questionNumber, answers } =
          question;

        return (
          <>
            <Description key={id} text={sectionName} />
            <div className="mb-4 mt-4">
              <Question
                question={{
                  text: questionText,
                  value: questionNumber,
                }}
              />
              <div className="mt-2">
                {answers.map((answer: QuizAnswer) => {
                  return (
                    <AnswerOption
                      key={answer.id}
                      answer={answer}
                      isSelected={currentAnswer?.text === answer.text}
                      onSelect={handleAnswerSelect}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 1}
                  text="Előző kérdés"
                />
                <Button
                  onClick={handleNextQuestion}
                  disabled={!currentAnswer}
                  text="Következő kérdés"
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default QuizCard;
