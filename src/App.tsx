import { Routes, Route } from "react-router";
import FlightBookerPage from "./pages/FlightBookerPage";

const App = () => (
  <Routes>
    <Route path="/6" element={<FlightBookerPage />} />
  </Routes>
);

export default App;
