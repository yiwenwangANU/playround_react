import { Routes, Route } from "react-router";
import SelectableCellsPage from "./pages/SelectableCellsPage";

const App = () => (
  <Routes>
    <Route index element={<SelectableCellsPage />} />
  </Routes>
);

export default App;
