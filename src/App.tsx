import { Routes, Route } from "react-router";
import GenerateTablePage from "./pages/GenerateTablePage";

const App = () => (
  <Routes>
    <Route path="/7" element={<GenerateTablePage />} />
  </Routes>
);

export default App;
