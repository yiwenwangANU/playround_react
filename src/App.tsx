import AccordionPage from "./pages/AccordionPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AccordionPage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
