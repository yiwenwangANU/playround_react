import { Routes, Route } from "react-router";
import JobBoardPage from "./pages/JobBoardPage";

const App = () => (
  <Routes>
    <Route index element={<JobBoardPage />} />
  </Routes>
);

export default App;
