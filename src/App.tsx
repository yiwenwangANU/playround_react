import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LikeButtonPage from "./pages/LikeButtonPage";

const router = createBrowserRouter([
  {
    path: "/15",
    Component: () => <LikeButtonPage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
