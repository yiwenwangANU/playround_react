import { Routes, Route } from "react-router";
import AccordionPage from "./pages/AccordionPage";

const App = () => (
  <Routes>
    <Route index element={<AccordionPage />} />
  </Routes>
);

export default App;
