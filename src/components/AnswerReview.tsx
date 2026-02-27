import React, { useState } from "react";
import { StoredAnswer } from "../types/Quiz";
import Button from "./Button";
import { QUIZ_CONSTANTS } from "../constants/quiz";

interface AnswerReviewProps {
  answers: StoredAnswer[];
  onEditAnswer: (questionNumber: number) => void;
  onRecalculate: () => void;
  onBack: () => void;
}

/**
 * Component for reviewing and editing quiz answers
 */
const AnswerReview: React.FC<AnswerReviewProps> = ({
  answers,
  onEditAnswer,
  onRecalculate,
  onBack,
}) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const validAnswers = answers.filter((a) => a !== null && a !== undefined);
  const totalAnswered = validAnswers.length;
  const expectedTotal = QUIZ_CONSTANTS.STANDARD_QUIZ_LENGTH;

  // Group answers by sections (every 30 questions)
  const groupedAnswers: { [key: number]: StoredAnswer[] } = {};
  validAnswers.forEach((answer) => {
    const section = Math.ceil(answer.questionNumber / 30);
    if (!groupedAnswers[section]) {
      groupedAnswers[section] = [];
    }
    groupedAnswers[section].push(answer);
  });

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Válaszaid áttekintése</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-center text-lg">
          <span className="font-bold">{totalAnswered}</span> / {expectedTotal} kérdés megválaszolva
        </p>
        {totalAnswered < expectedTotal && (
          <p className="text-center text-sm text-red-600 mt-2">
            Még {expectedTotal - totalAnswered} kérdés van hátra
          </p>
        )}
      </div>

      <div className="space-y-3">
        {Object.keys(groupedAnswers)
          .map(Number)
          .sort((a, b) => a - b)
          .map((section) => {
            const sectionAnswers = groupedAnswers[section];
            const isExpanded = expandedSection === section;

            return (
              <div key={section} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                >
                  <span className="font-semibold">
                    Szekció {section} ({sectionAnswers.length} válasz)
                  </span>
                  <span className="text-gray-600">{isExpanded ? "−" : "+"}</span>
                </button>

                {isExpanded && (
                  <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
                    {sectionAnswers
                      .sort((a, b) => a.questionNumber - b.questionNumber)
                      .map((answer) => (
                        <div
                          key={answer.questionNumber}
                          className="flex justify-between items-center p-3 bg-white border rounded hover:bg-gray-50"
                        >
                          <div className="flex-1">
                            <span className="font-medium text-sm text-gray-700">
                              Kérdés {answer.questionNumber}:
                            </span>
                            <span className="ml-2 text-sm">
                              {answer.answer.text} ({answer.answer.value} pont)
                            </span>
                          </div>
                          <button
                            onClick={() => onEditAnswer(answer.questionNumber)}
                            className="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Szerkesztés
                          </button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div className="flex flex-col space-y-3 mt-6">
        <Button
          onClick={onRecalculate}
          text="Eredmény újraszámítása"
          fullWidth
          disabled={totalAnswered < expectedTotal}
          noMargin
        />

        <Button
          onClick={onBack}
          text="Vissza"
          fullWidth
          colorClass="bg-gray-500 hover:bg-gray-600"
          noMargin
        />
      </div>
    </div>
  );
};

export default AnswerReview;
