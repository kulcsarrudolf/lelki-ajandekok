/**
 * API Configuration
 * Centralizes all API-related configuration including base URLs and endpoints
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://koszikla-api.fly.dev/api/karizmapp';

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  ENDPOINTS: {
    REFERRAL: {
      GENERATE: '/referral/generate-code',
      STATUS: (code: string) => `/submition/${code}`,
      SUBMIT: '/submition',
    },
  },
  TIMEOUT: 30000, // 30 seconds
} as const;

export default API_CONFIG;
