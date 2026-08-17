import { Routes, Route } from "react-router";
import FlightBookerPage from "./pages/FlightBookerPage";

const App = () => (
  <Routes>
    <Route index element={<FlightBookerPage />} />
  </Routes>
);

export default App;
