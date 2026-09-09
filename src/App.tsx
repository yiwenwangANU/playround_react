import { Routes, Route } from "react-router";
import ProgressBarPage from "./pages/ProgressBarPage/ProgressBarPage";

const App = () => (
  <Routes>
    <Route path="/4" element={<ProgressBarPage />} />
  </Routes>
);

export default App;
