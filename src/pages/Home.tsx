import { useNavigate } from "react-router-dom";
import Introduction from "../components/Introduction";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Introduction
      goForward={() => {
        navigate("/quiz");
      }}
    />
  );
};

export default Home;
