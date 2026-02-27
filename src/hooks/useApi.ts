import { useState } from "react";
import {
  ReferralCodeResponse,
  ReferralStatusResponse,
  SubmitAnswersResponse,
} from "../types/api";

// Helper function for fetch requests with proper error handling
async function fetchJSON<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ReferralCodeResponse | ReferralStatusResponse | SubmitAnswersResponse | null>(null);

  const generateReferralCode = async (): Promise<ReferralCodeResponse | undefined> => {
    setLoading(true);
    try {
      const data = await fetchJSON<ReferralCodeResponse>(
        "https://koszikla-api.fly.dev/api/karizmapp/referral/generate-code",
        { method: 'POST' }
      );

      setData(data);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getReferralCodeStatus = async (code: string): Promise<ReferralStatusResponse> => {
    setLoading(true);
    try {
      const data = await fetchJSON<ReferralStatusResponse>(
        `https://koszikla-api.fly.dev/api/karizmapp/submition/${code}`,
        { method: 'GET' }
      );

      setData(data);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.log(errorMessage);
      return {
        completed: false,
        answers: [],
      };
    } finally {
      setLoading(false);
    }
  };

  const submitAnswers = async (code: string, answers: unknown): Promise<SubmitAnswersResponse | undefined> => {
    setLoading(true);
    try {
      const data = await fetchJSON<SubmitAnswersResponse>(
        "https://koszikla-api.fly.dev/api/karizmapp/submition",
        {
          method: 'POST',
          body: JSON.stringify({
            code: code,
            answers: answers,
          }),
        }
      );

      setData(data);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    generateReferralCode,
    getReferralCodeStatus,
    submitAnswers,
  };
};

export default useApi;
