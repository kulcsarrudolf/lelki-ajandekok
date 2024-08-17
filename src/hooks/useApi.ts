import axios from "axios";
import { useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const generateReferralCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://koszikla-api.fly.dev/api/karizmapp/referral/generate-code"
      );

      setData(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.message);
      //   setError(error.message);
    }
    setLoading(false);
  };

  const getRefferalCodeStatus = async (code: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://koszikla-api.fly.dev/api/karizmapp/submition/${code}`
      );

      setData(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.message);
      return {
        completed: false,
        answers: [],
      };
      //   setError(error.message);
    }
    setLoading(false);
  };

  return { loading, data, generateReferralCode, getRefferalCodeStatus };
};

export default useApi;
