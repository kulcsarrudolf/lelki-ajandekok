interface IData {
  value: string;
  timestamp: Date;
}

export const saveToLocalStorage = (key: string, value: IData) => {
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to local storage", error);
  }
};

export const loadFromLocalStorage = (key: string): IData | undefined => {
  try {
    const serializedValue = window.localStorage.getItem(key);
    if (serializedValue === null) return undefined;
    return JSON.parse(serializedValue) as IData;
  } catch (error) {
    console.error("Error loading from local storage", error);
    return undefined;
  }
};

export const removeFromLocalStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from local storage", error);
  }
};

export const clearLocalStorage = () => {
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error("Error clearing local storage", error);
  }
};

export enum LocalStorageKeys {
  Answers = "answers",
  LastQuestionNumber = "lastQuestionNumber",
  AnswersLastReferal = "answersLastReferal",
  LastQuestionNumberLastReferal = "lastQuestionNumberLastReferal",
  Referrals = "referrals",
}
