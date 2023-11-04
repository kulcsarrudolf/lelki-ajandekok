import QuizCard from "./QuizCard";
import { Title } from "./components/Typography";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-5 bg-white rounded shadow-lg">
        <Title text="Lelki ajándékok" />
        <QuizCard />
      </div>
    </div>
  );
}

export default App;
