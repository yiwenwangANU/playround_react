import { Routes, Route } from "react-router";
import MortgageCalculatorPage from "./pages/MortgageCalculatorPage";

const App = () => (
  <Routes>
    <Route index element={<MortgageCalculatorPage />} />
  </Routes>
);

export default App;
