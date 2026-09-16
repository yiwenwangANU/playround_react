import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DiceRollerPage from "./pages/DiceRollerPage";

const router = createBrowserRouter([
  {
    path: "/13",
    Component: DiceRollerPage,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
