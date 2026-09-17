import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TrafficLightPage from "./pages/TrafficLightPage";

const router = createBrowserRouter([
  {
    path: "/19",
    Component: TrafficLightPage,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
