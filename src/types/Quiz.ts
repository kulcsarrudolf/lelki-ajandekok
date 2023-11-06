export type QuizAnswer = {
  id?: string;
  questionNumber?: number;
  value: number;
  text: string;
};

export interface IQuestion {
  id?: string;
  value: number;
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
