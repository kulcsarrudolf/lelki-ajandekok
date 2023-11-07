import { Fragment, useState, useEffect } from "react";
import { QuizAnswer } from "./types/Quiz";
import Button from "./components/Button";
import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";
import { Description } from "./components/Typography";
import { IQuestionDetails, getQuizData } from "./data/quiz";
import {
  LocalStorageKeys,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./utils.js/local-storage";

const quizData: IQuestionDetails[] = getQuizData();

interface QuizCardProps {
  handleNextStep: () => void;
}
const QuizCard = ({ handleNextStep }: QuizCardProps) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [currentAnswer, setCurrentAnswer] = useState<QuizAnswer | null>(null);
  const [answers, setAnswers] = useState<
    { questionNumber: number; answer: QuizAnswer }[]
  >([]);

  const handleAnswerSelect = (answer: QuizAnswer) => {
    setCurrentAnswer(answer);
  };

  const handlePreviousQuestion = () => {
    saveToLocalStorage(LocalStorageKeys.LastQuestionNumber, {
      value: JSON.stringify(currentQuestionNumber - 1),
      timestamp: new Date(),
    });

    setCurrentQuestionNumber((prev) => prev - 1);
    const answersCopy = [...answers];
    setCurrentAnswer(answersCopy[currentQuestionNumber - 1].answer);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionNumber((prev) => prev + 1);

    const answersCopy = [...answers];

    if (currentAnswer) {
      answersCopy[currentQuestionNumber] = {
        questionNumber: currentQuestionNumber,
        answer: currentAnswer,
      };
    }

    setAnswers(answersCopy);

    saveToLocalStorage(LocalStorageKeys.Answers, {
      value: JSON.stringify(answersCopy),
      timestamp: new Date(),
    });

    saveToLocalStorage(LocalStorageKeys.LastQuestionNumber, {
      value: JSON.stringify(currentQuestionNumber + 1),
      timestamp: new Date(),
    });

    if (answersCopy[currentQuestionNumber + 1]?.answer) {
      setCurrentAnswer(answersCopy[currentQuestionNumber + 1].answer);
    } else {
      setCurrentAnswer(null);
    }
  };

  useEffect(() => {
    const lastQuestionNumber = loadFromLocalStorage(
      LocalStorageKeys.LastQuestionNumber
    );

    if (lastQuestionNumber) {
      setCurrentQuestionNumber(Number(lastQuestionNumber.value));
    }
  }, []);

  return (
    <>
      {quizData.map((question: IQuestionDetails) => {
        if (question.questionNumber !== currentQuestionNumber) return null;

        const {
          id,
          sectionName,
          description,
          questionText,
          questionNumber,
          answers: answerOptions,
        } = question;

        const isLastQuestion = currentQuestionNumber === quizData.length;

        return (
          <Fragment key={id}>
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
                {answerOptions.map((answer: QuizAnswer) => {
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

              {isLastQuestion && currentAnswer && (
                <div className="flex justify-center my-2">
                  <Button
                    onClick={() => {
                      const answersCopy = [...answers];

                      if (currentAnswer) {
                        answersCopy[currentQuestionNumber] = {
                          questionNumber: currentQuestionNumber,
                          answer: currentAnswer,
                        };
                      }

                      setAnswers(answersCopy);

                      saveToLocalStorage(LocalStorageKeys.Answers, {
                        value: JSON.stringify(answersCopy),
                        timestamp: new Date(),
                      });

                      handleNextStep();
                    }}
                    disabled={!currentAnswer}
                    text="Tovább a végeredményhez"
                    fullWidth
                  />
                </div>
              )}

              <div className="flex flex-col-reverse space-y-2 space-y-reverse xs:flex-row xs:space-y-0 xs:space-x-2 justify-center mt-4">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionNumber === 1}
                  text="Előző kérdés"
                  order={1}
                  colorClass="bg-rose-500 hover:bg-rose-600"
                />

                <Button
                  onClick={handleNextQuestion}
                  disabled={!currentAnswer || isLastQuestion}
                  text="Következő kérdés"
                  order={2}
                />
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default QuizCard;
