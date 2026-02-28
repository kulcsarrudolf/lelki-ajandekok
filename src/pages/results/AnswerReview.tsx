import React, { useState } from "react";
import { StoredAnswer } from "../../types/Quiz";
import Button from "../../design-system/Button";
import { QUIZ_CONSTANTS } from "../../constants/quiz";
import { quizData } from "../../data/quiz";

// Build lookup maps from static quiz data
const sectionNameMap: Record<number, string> = {};
const questionTextMap: Record<number, string> = {};

quizData.forEach((section) => {
  section.questions.forEach((q) => {
    const sectionNum = Math.ceil(q.value / 30);
    if (!sectionNameMap[sectionNum]) {
      sectionNameMap[sectionNum] = section.sectionName;
    }
    questionTextMap[q.value] = q.text;
  });
});

interface AnswerReviewProps {
  answers: StoredAnswer[];
  onRecalculate: () => void;
  onBack: () => void;
}

/**
 * Component for reviewing and editing quiz answers
 */
const AnswerReview: React.FC<AnswerReviewProps> = ({
  answers,
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

      <div className="bg-muted/30 p-4 rounded-lg mb-6">
        <p className="text-center text-lg">
          <span className="font-bold">{totalAnswered}</span> / {expectedTotal} kérdés megválaszolva
        </p>
        {totalAnswered < expectedTotal && (
          <p className="text-center text-sm text-destructive mt-2">
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
              <div key={section} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 bg-muted/50 hover:bg-muted flex justify-between items-center"
                >
                  <span className="font-semibold">
                    {sectionNameMap[section] ?? `Szekció ${section}`} ({sectionAnswers.length} válasz)
                  </span>
                  <span className="text-muted-foreground">{isExpanded ? "−" : "+"}</span>
                </button>

                {isExpanded && (
                  <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
                    {sectionAnswers
                      .sort((a, b) => a.questionNumber - b.questionNumber)
                      .map((answer) => (
                        <div
                          key={answer.questionNumber}
                          className="p-3 bg-card border border-border rounded"
                        >
                          <p className="font-medium text-sm text-foreground">
                            {answer.questionNumber}. {questionTextMap[answer.questionNumber] ?? ""}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {answer.answer.text} ({answer.answer.value} pont)
                          </p>
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
          variant="outline"
          noMargin
        />
      </div>
    </div>
  );
};

export default AnswerReview;
