import { useState } from "react";
import {
  ReferralCodeResponse,
  ReferralStatusResponse,
  SubmitAnswersResponse,
} from "../types/api";
import { apiClient, ApiError } from "../api/client";
import { API_CONFIG } from "../config/api";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ReferralCodeResponse | ReferralStatusResponse | SubmitAnswersResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateReferralCode = async (): Promise<ReferralCodeResponse | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post<ReferralCodeResponse>(
        API_CONFIG.ENDPOINTS.REFERRAL.GENERATE
      );

      setData(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof ApiError
        ? err.message
        : err instanceof Error
        ? err.message
        : 'Unknown error';

      setError(errorMessage);
      console.error('Generate referral code error:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getReferralCodeStatus = async (code: string): Promise<ReferralStatusResponse> => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.get<ReferralStatusResponse>(
        API_CONFIG.ENDPOINTS.REFERRAL.STATUS(code)
      );

      setData(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof ApiError
        ? err.message
        : err instanceof Error
        ? err.message
        : 'Unknown error';

      setError(errorMessage);
      console.error('Get referral status error:', errorMessage);

      // Return default fallback
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
    setError(null);

    try {
      const response = await apiClient.post<SubmitAnswersResponse>(
        API_CONFIG.ENDPOINTS.REFERRAL.SUBMIT,
        {
          code,
          answers,
        }
      );

      setData(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof ApiError
        ? err.message
        : err instanceof Error
        ? err.message
        : 'Unknown error';

      setError(errorMessage);
      console.error('Submit answers error:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
    generateReferralCode,
    getReferralCodeStatus,
    submitAnswers,
  };
};

export default useApi;
