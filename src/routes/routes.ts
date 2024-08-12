import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Quiz from "../pages/Quiz";
import QuizReferral from "../pages/QuizReferral";
import Results from "../pages/Results";

interface RouteConfig {
  path: string;
  element: React.FC;
}

export const routes: RouteConfig[] = [
  { path: "/", element: Home },
  { path: "/quiz", element: Quiz },
  { path: "/quiz-referral", element: QuizReferral },
  { path: "/results", element: Results },
  { path: "*", element: NotFound },
];
