export type QuizAnswer = {
  value: number;
  text: string;
};

export type QuizSection = {
  sectionName: string;
  description?: string;
  questions: {
    value: number;
    text: string;
    answer?: {
      value: number;
      text: string;
    };
  }[];
  answers: QuizAnswer[];
};

export type Quiz = QuizSection[];
