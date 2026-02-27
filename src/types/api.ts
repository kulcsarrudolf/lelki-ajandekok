/**
 * API response types for the Koszikla API
 */

export interface ReferralCodeResponse {
  code: string;
}

export interface ReferralStatusResponse {
  completed: boolean;
  answers: unknown[];
}

export interface SubmitAnswersResponse {
  success?: boolean;
  message?: string;
}

/**
 * Referral object stored in localStorage
 */
export interface Referral {
  name: string;
  code: string;
  completed?: boolean;
}

/**
 * API error response
 */
export interface ApiError {
  message: string;
  status?: number;
}
