import { Routes, Route } from "react-router";
import TemperatureConverterPage from "./pages/TemperatureConverterPage";

const App = () => (
  <Routes>
    <Route path="/9" element={<TemperatureConverterPage />} />
  </Routes>
);

export default App;
