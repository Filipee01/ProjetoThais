import {createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Career from "./pages/Career"
import Timeline from "./pages/Timeline"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: "career",
    element: <Career />
  },
  {
    path: "timeline",
    element: <Timeline />
  }

])

export default router;