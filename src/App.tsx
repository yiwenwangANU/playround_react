import { Routes, Route } from "react-router";
import StarRatingPage from "./pages/StarRatingPage";

const App = () => (
  <Routes>
    <Route index element={<StarRatingPage />} />
  </Routes>
);

export default App;
