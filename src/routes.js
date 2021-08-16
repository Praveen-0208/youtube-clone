import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchResultPage from "./pages/SearchResultPage";
import VideoPlayPage from "./pages/VideoPlayPage";

const Routes = [
  {
    name: "Landing Page",
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    name: "Search Result",
    path: "/search",
    exact: true,
    component: SearchResultPage,
  },
  {
    name: "Video Play",
    path: "/play",
    exact: true,
    component: VideoPlayPage,
  },
  {
    name: "Not Found",
    path: "/404not-found",
    exact: true,
    component: NotFoundPage,
  },
];

export default Routes;
