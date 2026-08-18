import { Routes, Route } from "react-router";
import TemperatureConverterPage from "./pages/TemperatureConverterPage";

const App = () => (
  <Routes>
    <Route index element={<TemperatureConverterPage />} />
  </Routes>
);

export default App;
