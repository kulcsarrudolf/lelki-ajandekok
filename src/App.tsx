import { useState } from "react";
import quizData from "./data/quiz";
import { Quiz, QuizAnswer, QuizSection } from "./types/Quiz";

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
        <h1 className="text-center uppercase my-10 text-5xl font-bold">
          Lelki ajándékok
        </h1>
        {quiz?.map((section: QuizSection) => {
          if (section.sectionName !== currentSection.sectionName) return null;
          return (
            <div key={section.sectionName} className="mb-4">
              <p className="font-bold text-lg mb-2">{section.sectionName}</p>
              {section.questions.map((question: any) => {
                if (question.value === currentQuestion)
                  return (
                    <div key={question.text} className="mb-4 mt-4">
                      <div className="min-h-[7rem]">
                        <p className="italic text-md">
                          <span className="font-bold">{question.value}.</span>{" "}
                          {question.text}
                        </p>
                      </div>

                      <div className="mt-2">
                        {section.answers.map((answer: QuizAnswer) => {
                          const isSelected = selectedAnswer === answer.text;
                          return (
                            <div
                              key={answer.text}
                              className={`flex items-center mb-2 p-2 rounded cursor-pointer ${
                                isSelected ? "bg-blue-300" : "bg-gray-200"
                              }`}
                              onClick={() => handleAnswerSelect(answer.text)}
                            >
                              <label
                                htmlFor={answer.text}
                                className="select-none ml-2 p-1 rounded w-full"
                              >
                                <input
                                  type="radio"
                                  id={answer.text}
                                  name={question.text}
                                  value={answer.text}
                                  checked={isSelected}
                                  onChange={() =>
                                    handleAnswerSelect(answer.text)
                                  }
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
                        })}
                      </div>
                    </div>
                  );
              })}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 1}
                  className={`mx-5 min-w-[150px] h-12 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    currentQuestion !== 1
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-blue-200 cursor-not-allowed"
                  }`}
                >
                  Előző kérdés
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                  className={`mx-5 min-w-[150px] h-12 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    selectedAnswer
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-blue-200 cursor-not-allowed"
                  }`}
                >
                  Következő kérdés
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
