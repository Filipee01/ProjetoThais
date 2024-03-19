import {createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Career from "./pages/Career"

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
  }

])

export default router;