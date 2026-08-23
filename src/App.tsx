import { Routes, Route } from "react-router";
import SnakeGamePage from "./pages/SnakeGamePage";

const App = () => (
  <Routes>
    <Route index element={<SnakeGamePage />} />
  </Routes>
);

export default App;
