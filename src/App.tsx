import { Routes, Route } from "react-router";
import DataTablePage from "./pages/DataTablePage";

const App = () => (
  <Routes>
    <Route index element={<DataTablePage />} />
  </Routes>
);

export default App;
