import Home from "../pages/home/index";
import NotFound from "../pages/not-found/index";
import Quiz from "../pages/quiz/index";
import QuizReferral from "../pages/quiz-referral/index";
import Results from "../pages/results/index";
import Invite from "../pages/invite/index";
import Privacy from "../pages/privacy/index";

interface RouteConfig {
  path: string;
  element: React.FC;
}

export const routes: RouteConfig[] = [
  { path: "/", element: Home },
  { path: "/quiz", element: Quiz },
  { path: "/quiz-referral", element: QuizReferral },
  { path: "/invite", element: Invite },
  { path: "/results", element: Results },
  { path: "/privacy", element: Privacy },
  { path: "*", element: NotFound },
];
