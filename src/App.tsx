import { Routes, Route } from "react-router";
import TrafficLightPage from "./pages/TrafficLightPage";

const App = () => (
  <Routes>
    <Route index element={<TrafficLightPage />} />
  </Routes>
);

export default App;
