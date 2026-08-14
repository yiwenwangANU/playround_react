import { Routes, Route } from "react-router";
import HolyGrailPage from "./pages/HolyGrailPage";

const App = () => (
  <Routes>
    <Route index element={<HolyGrailPage />} />
  </Routes>
);

export default App;
