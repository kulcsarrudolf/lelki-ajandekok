/**
 * Quiz-related constants
 */

export const QUIZ_CONSTANTS = {
  /** Total number of questions in the standard quiz */
  STANDARD_QUIZ_LENGTH: 180,

  /** Total number of questions in the referral quiz */
  REFERRAL_QUIZ_LENGTH: 60,

  /** Number of top gifts to display in results */
  TOP_GIFTS_COUNT: 5,

  /** Offset value for referral question numbering */
  REFERRAL_QUESTION_OFFSET: 180,
} as const;

/**
 * UI text constants for quiz navigation
 */
export const QUIZ_MESSAGES = {
  SUBMIT_SHORT: 'Válaszok elküldése',
  SUBMIT_LONG: 'Tovább a végeredményhez',
  NEXT_QUESTION: 'Következő kérdés',
  PREVIOUS_QUESTION: 'Előző kérdés',
} as const;
