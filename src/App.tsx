import AccordionPage from "./pages/AccordionPage";
import { createBrowserRouter } from "react-router";

const App = createBrowserRouter([
  {
    path: "/",
    element: <AccordionPage />,
  },
]);

export default App;
