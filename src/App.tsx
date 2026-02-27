import { Title } from "./components/Typography";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-5 bg-white rounded shadow-lg">
          <Title text="Lelki ajándékok" />
          <Router>
            <AppRoutes />
          </Router>
        </div>
      </div>
      <Analytics />
    </ErrorBoundary>
  );
}

export default App;
