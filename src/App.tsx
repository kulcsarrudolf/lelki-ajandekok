import { Title } from "./design-system/Typography";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="flex justify-center items-center min-h-screen bg-background p-4">
        <div className="w-full max-w-lg bg-card rounded-2xl shadow-card p-8 md:p-10 animate-fade-in">
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
