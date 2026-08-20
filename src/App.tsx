import { Routes, Route } from "react-router";
import TicTacToePage from "./pages/TicTacToePage";

const App = () => (
  <Routes>
    <Route index element={<TicTacToePage />} />
  </Routes>
);

export default App;
