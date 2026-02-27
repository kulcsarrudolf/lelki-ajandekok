import { useEffect, useState } from "react";
import Button from "../components/Button";
import useApi from "../hooks/useApi";
import {
  loadFromLocalStorage,
  LocalStorageKeys,
  saveToLocalStorage,
} from "../utils.js/local-storage";

const getCurrentReferrals = () => {
  const currentReferrals = loadFromLocalStorage(LocalStorageKeys.Referrals);

  const referrals = JSON.parse(currentReferrals?.value ?? "[]") || ([] as any);

  return referrals;
};

const Invite = () => {
  const { generateReferralCode, getReferralCodeStatus } = useApi();
  const [referralName, setReferralName] = useState<string>("");
  const [currentReferrals, setCurrentReferrals] = useState<Array<any>>(
    getCurrentReferrals()
  );

  const getCurrentReferralsWithStatus = async () => {
    const referrals = getCurrentReferrals();

    const referralCodes = referrals.map((referral: any) => referral.code);

    const response = await Promise.all(
      referralCodes.map((code: string) => getReferralCodeStatus(code))
    );

    const updatedReferrals = referrals.map((referral: any, index: number) => ({
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

            const referrals = getCurrentReferrals();

            referrals.push({
              name: referralName,
              code: (response as any)?.code,
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
        {currentReferrals.map((referral: any, index: number) => (
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
