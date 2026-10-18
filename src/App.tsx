import { RouterProvider, createBrowserRouter } from "react-router";
import ContactFormPage from "./pages/ContactFormPage";

const router = createBrowserRouter([
  {
    path: "/2",
    element: <ContactFormPage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
