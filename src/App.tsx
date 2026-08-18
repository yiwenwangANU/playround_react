import { Routes, Route } from "react-router";
import DiceRollerPage from "./pages/DiceRollerPage";

const App = () => (
  <Routes>
    <Route index element={<DiceRollerPage />} />
  </Routes>
);

export default App;
