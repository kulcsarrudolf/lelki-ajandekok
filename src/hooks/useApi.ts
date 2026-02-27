import { useState } from "react";

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
  const [data, setData] = useState<any>(null);

  const generateReferralCode = async () => {
    setLoading(true);
    try {
      const data = await fetchJSON(
        "https://koszikla-api.fly.dev/api/karizmapp/referral/generate-code",
        { method: 'POST' }
      );

      setData(data);
      return data;
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getReferralCodeStatus = async (code: string) => {
    setLoading(true);
    try {
      const data = await fetchJSON(
        `https://koszikla-api.fly.dev/api/karizmapp/submition/${code}`,
        { method: 'GET' }
      );

      setData(data);
      return data;
    } catch (error: any) {
      console.log(error.message);
      return {
        completed: false,
        answers: [],
      };
    } finally {
      setLoading(false);
    }
  };

  const submitAnswers = async (code: string, answers: any) => {
    setLoading(true);
    try {
      const data = await fetchJSON(
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
    } catch (error: any) {
      console.log(error.message);
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
