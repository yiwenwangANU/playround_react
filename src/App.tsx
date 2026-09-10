import { Routes, Route } from "react-router";
import ProgressBarPage from "./pages/ProgressBarPage";

const App = () => (
  <Routes>
    <Route path="/8" element={<ProgressBarPage />} />
  </Routes>
);

export default App;
