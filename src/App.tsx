import { Routes, Route } from "react-router";
import ProgressBarPage from "./pages/ProgressBarPage";

const App = () => (
  <Routes>
    <Route index element={<ProgressBarPage />} />
  </Routes>
);

export default App;
