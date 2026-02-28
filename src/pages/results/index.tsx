import { useNavigate } from "react-router-dom";
import Result from "./Result";

const Results = () => {
  const navigate = useNavigate();

  return (
    <Result
      goToHome={() => {
        navigate("/");
      }}
    />
  );
};

export default Results;
