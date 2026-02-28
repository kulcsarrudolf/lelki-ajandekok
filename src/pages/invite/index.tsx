import { useEffect, useState } from "react";
import Button from "../../design-system/Button";
import { useReferralState } from "../../hooks/useReferralState";

const Invite = () => {
  const { referrals, loadReferralsWithStatus, addReferral } = useReferralState();
  const [referralName, setReferralName] = useState<string>("");

  useEffect(() => {
    loadReferralsWithStatus();
  }, [loadReferralsWithStatus]);

  const handleGenerateCode = async () => {
    const success = await addReferral(referralName);

    if (success) {
      setReferralName("");
    }
  };

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
          onClick={handleGenerateCode}
          fullWidth
          disabled={referralName.length === 0}
          text="Hívókód generálása"
          noMargin
        />
      </div>

      {referrals.length > 0 && (
        <p className="mt-4 font-bold text-center mb-6">
          Akiket már meg hívtál:
        </p>
      )}

      <ul className="grid grid-cols-3 gap-2">
        {referrals.map((referral, index) => (
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
