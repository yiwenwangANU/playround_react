import { Routes, Route } from "react-router";
import GenerateTablePage from "./pages/GenerateTablePage/GenerateTablePage";

const App = () => (
  <Routes>
    <Route index element={<GenerateTablePage />} />
  </Routes>
);

export default App;
