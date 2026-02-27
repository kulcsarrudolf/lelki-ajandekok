import { useEffect, useState } from "react";
import Button from "../components/Button";
import useApi from "../hooks/useApi";
import {
  loadFromLocalStorage,
  LocalStorageKeys,
  saveToLocalStorage,
} from "../utils/local-storage";
import { Referral } from "../types/api";

const getCurrentReferrals = (): Referral[] => {
  const currentReferrals = loadFromLocalStorage(LocalStorageKeys.Referrals);

  const referrals: Referral[] = JSON.parse(currentReferrals?.value ?? "[]") || [];

  return referrals;
};

const Invite = () => {
  const { generateReferralCode, getReferralCodeStatus } = useApi();
  const [referralName, setReferralName] = useState<string>("");
  const [currentReferrals, setCurrentReferrals] = useState<Referral[]>(
    getCurrentReferrals()
  );

  const getCurrentReferralsWithStatus = async () => {
    const referrals = getCurrentReferrals();

    const referralCodes = referrals.map((referral) => referral.code);

    const response = await Promise.all(
      referralCodes.map((code: string) => getReferralCodeStatus(code))
    );

    const updatedReferrals: Referral[] = referrals.map((referral, index) => ({
      ...referral,
      completed: response[index].completed,
    }));

    setCurrentReferrals(updatedReferrals);
  };

  useEffect(() => {
    getCurrentReferralsWithStatus();
  }, []);

  return (
    <div>
      <p className="mt-4 font-bold">
        Generálj egy kódot és oszd meg a barátoddal aki szeretnéd, hogy
        kitölthesse a tesztet.
      </p>
      <div className="py-2">
        <input
          type="text"
          value={referralName}
          onChange={(e) => setReferralName(e.target.value)}
          placeholder="Barátod neve"
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <Button
          onClick={async () => {
            const response = await generateReferralCode();

            if (!response?.code) {
              console.error("Failed to generate referral code");
              return;
            }

            const referrals = getCurrentReferrals();

            referrals.push({
              name: referralName,
              code: response.code,
            });

            saveToLocalStorage(LocalStorageKeys.Referrals, {
              value: JSON.stringify(referrals),
              timestamp: new Date(),
            });

            setCurrentReferrals(referrals);

            setReferralName("");
          }}
          fullWidth
          disabled={referralName.length === 0}
          text="Hívókód generálása"
          noMargin
        />
      </div>

      {currentReferrals.length > 0 && (
        <p className="mt-4 font-bold text-center mb-6">
          Akiket már meg hívtál:
        </p>
      )}

      <ul className="grid grid-cols-3 gap-2">
        {currentReferrals.map((referral, index) => (
          <>
            <li key={`${index}-name`} className="text-center">
              {referral.name}
            </li>
            <li key={`${index}-code`} className="text-center">
              {referral.code}
            </li>
            <li key={`${index}-status`} className="text-center">
              {referral.completed ? "Kész" : "Folyamatban"}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Invite;
