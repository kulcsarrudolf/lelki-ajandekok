export type QuizAnswer = {
  id?: string;
  questionNumber?: number;
  value: number;
  text: string;
};

// Type for stored quiz answers in localStorage
export interface StoredAnswer {
  questionNumber: number;
  answer: QuizAnswer;
}

export interface IQuestion {
  id?: string;
  value: number;
  valueLetter?: string;
  text: string;
}

export type QuizSection = {
  id?: string;
  sectionName: string;
  description?: string;
  questions: IQuestion[];
  answers: QuizAnswer[];
  totalQuestions?: number;
};

export type Quiz = QuizSection[];
