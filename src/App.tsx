import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import StarRatingPage from "./pages/StarRatingPage/StarRatingPage";

const router = createBrowserRouter([
  {
    path: "/17",
    Component: StarRatingPage,
  },
]);
const App = () => <RouterProvider router={router} />;

export default App;
