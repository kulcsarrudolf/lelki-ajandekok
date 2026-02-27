import { useState, useCallback } from "react";
import { Referral } from "../types/api";
import {
  LocalStorageKeys,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/local-storage";
import useApi from "./useApi";

/**
 * Custom hook to manage referral state
 * Handles localStorage persistence and API calls for referrals
 */
export const useReferralState = () => {
  const { generateReferralCode, getReferralCodeStatus } = useApi();

  const getCurrentReferrals = useCallback((): Referral[] => {
    const currentReferrals = loadFromLocalStorage(LocalStorageKeys.Referrals);
    const referrals: Referral[] = JSON.parse(currentReferrals?.value ?? "[]") || [];
    return referrals;
  }, []);

  const [referrals, setReferrals] = useState<Referral[]>(getCurrentReferrals());

  /**
   * Load referrals from localStorage and fetch their status from API
   */
  const loadReferralsWithStatus = useCallback(async () => {
    const storedReferrals = getCurrentReferrals();

    if (storedReferrals.length === 0) {
      setReferrals([]);
      return;
    }

    const referralCodes = storedReferrals.map((referral) => referral.code);

    const responses = await Promise.all(
      referralCodes.map((code: string) => getReferralCodeStatus(code))
    );

    const updatedReferrals: Referral[] = storedReferrals.map((referral, index) => ({
      ...referral,
      completed: responses[index].completed,
    }));

    setReferrals(updatedReferrals);
  }, [getCurrentReferrals, getReferralCodeStatus]);

  /**
   * Generate a new referral code and add it to localStorage
   */
  const addReferral = useCallback(
    async (name: string): Promise<boolean> => {
      const response = await generateReferralCode();

      if (!response?.code) {
        console.error("Failed to generate referral code");
        return false;
      }

      const currentReferrals = getCurrentReferrals();

      const newReferral: Referral = {
        name,
        code: response.code,
        completed: false,
      };

      currentReferrals.push(newReferral);

      saveToLocalStorage(LocalStorageKeys.Referrals, {
        value: JSON.stringify(currentReferrals),
        timestamp: new Date(),
      });

      setReferrals(currentReferrals);

      return true;
    },
    [generateReferralCode, getCurrentReferrals]
  );

  return {
    referrals,
    loadReferralsWithStatus,
    addReferral,
  };
};
