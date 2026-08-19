import { Routes, Route } from "react-router";
import LikeButtonPage from "./pages/LikeButtonPage";

const App = () => (
  <Routes>
    <Route index element={<LikeButtonPage />} />
  </Routes>
);

export default App;
