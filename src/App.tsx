import { Routes, Route } from "react-router";
import ContactFormPage from "./pages/ContactFormPage";

const App = () => (
  <Routes>
    <Route index element={<ContactFormPage />} />
  </Routes>
);

export default App;
