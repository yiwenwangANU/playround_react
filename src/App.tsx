import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TabsPage from "./pages/TabsPage";

const router = createBrowserRouter([
  {
    path: "/11",
    Component: TabsPage,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
