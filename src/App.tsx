import { Routes, Route } from "react-router";
import MortgageCalculatorPage from "./pages/MortgageCalculatorPage";

const App = () => (
  <Routes>
    <Route path="/5" element={<MortgageCalculatorPage />} />
  </Routes>
);

export default App;
