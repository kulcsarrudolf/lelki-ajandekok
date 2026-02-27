import { Fragment } from "react";
import { IQuestionDetails } from "./data/quiz";
import { LocalStorageKeys, saveToLocalStorage } from "./utils/local-storage";
import { QUIZ_CONSTANTS, QUIZ_MESSAGES } from "./constants/quiz";
import { useQuizState } from "./hooks/useQuizState";
import QuestionDisplay from "./components/Quiz/QuestionDisplay";
import QuizNavigation from "./components/Quiz/QuizNavigation";
import ProgressBar from "./components/Quiz/ProgressBar";

interface QuizCardProps {
  handleNextStep: () => void;
  quizData: IQuestionDetails[];
  lastQuestionNumberKey: LocalStorageKeys;
  answersKey: LocalStorageKeys;
  isReferral?: boolean;
}

const QuizCard = ({
  handleNextStep,
  quizData,
  lastQuestionNumberKey,
  answersKey,
}: QuizCardProps) => {
  const {
    currentQuestionNumber,
    answers,
    currentAnswer,
    setCurrentAnswer,
    saveAnswer,
    goToQuestion,
  } = useQuizState({
    answersKey,
    lastQuestionNumberKey,
  });

  const handlePreviousQuestion = () => {
    goToQuestion(currentQuestionNumber - 1);
  };

  const handleNextQuestion = () => {
    if (currentAnswer) {
      saveAnswer(currentQuestionNumber, currentAnswer);
    }
  };

  const handleSubmit = () => {
    if (currentAnswer) {
      const answersCopy = [...answers];

      answersCopy[currentQuestionNumber] = {
        questionNumber: currentQuestionNumber,
        answer: currentAnswer,
      };

      saveToLocalStorage(answersKey, {
        value: JSON.stringify(answersCopy),
        timestamp: new Date(),
      });

      handleNextStep();
    }
  };

  const submitButtonText =
    quizData.length > QUIZ_CONSTANTS.REFERRAL_QUIZ_LENGTH
      ? QUIZ_MESSAGES.SUBMIT_LONG
      : QUIZ_MESSAGES.SUBMIT_SHORT;

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

        return (
          <Fragment key={id}>
            <ProgressBar
              current={currentQuestionNumber}
              total={quizData.length}
              className="mb-6"
            />

            <QuestionDisplay
              sectionName={sectionName}
              description={description}
              questionText={questionText}
              questionNumber={questionNumber}
              answerOptions={answerOptions}
              selectedAnswer={currentAnswer}
              onAnswerSelect={setCurrentAnswer}
            />

            <QuizNavigation
              currentQuestion={currentQuestionNumber}
              totalQuestions={quizData.length}
              isAnswerSelected={!!currentAnswer}
              onPrevious={handlePreviousQuestion}
              onNext={handleNextQuestion}
              onSubmit={handleSubmit}
              submitButtonText={submitButtonText}
            />
          </Fragment>
        );
      })}
    </>
  );
};

export default QuizCard;
