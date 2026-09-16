import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import FileExplorerPage from "./pages/FileExplorerPage";

const router = createBrowserRouter([
  {
    path: "/14",
    Component: FileExplorerPage,
  },
]);
const App = () => <RouterProvider router={router} />;

export default App;
