import { Routes, Route } from "react-router";
import ImageCarouselPage from "./pages/ImageCarouselPage";

const App = () => (
  <Routes>
    <Route index element={<ImageCarouselPage />} />
  </Routes>
);

export default App;
