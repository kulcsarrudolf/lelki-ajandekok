import { useState } from "react";
import quizData from "./data/quiz";
import { Quiz, QuizAnswer, QuizSection } from "./types/Quiz";
import Button from "./components/Button";
import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";
import { Description, Title } from "./components/Typography";

function App() {
  const [quiz, setQuiz] = useState<Quiz>(quizData);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentSection, setCurrentSection] = useState(quizData[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [lastQuestion, setLastQuestion] = useState<number>(
    quizData[0].questions.length
  );

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 > lastQuestion) {
      setCurrentSection(quizData[currentSectionIndex + 1]);
      setCurrentSectionIndex(currentSectionIndex + 1);
      setLastQuestion(
        (prev) => quizData[currentSectionIndex + 1].questions.length + prev
      );
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-5 bg-white rounded shadow-lg">
        <Title text="Lelki ajándékok" />
        {quiz?.map((section: QuizSection) => {
          if (section.sectionName !== currentSection.sectionName) return null;
          return (
            <div key={section.sectionName} className="mb-4">
              <Description text={section.sectionName} />
              {section.questions.map((question: any) => {
                if (question.value === currentQuestion)
                  return (
                    <div key={question.text} className="mb-4 mt-4">
                      <Question question={question} />

                      <div className="mt-2">
                        {section.answers.map((answer: QuizAnswer) => {
                          const isSelected = selectedAnswer === answer.text;
                          return (
                            <AnswerOption
                              key={answer.text}
                              answerText={answer.text}
                              isSelected={isSelected}
                              onSelect={handleAnswerSelect}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
              })}
              <div className="flex justify-center mt-4">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 1}
                  text="Előző kérdés"
                />
                <Button
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                  text="Következő kérdés"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
