import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ModalDialogPage from "./pages/ModalDialogPage";

const router = createBrowserRouter([
  {
    path: "/16",
    Component: ModalDialogPage,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
