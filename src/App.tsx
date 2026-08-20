import { Routes, Route } from "react-router";
import Test from "./pages/Test";

const App = () => (
  <Routes>
    <Route index element={<Test />} />
  </Routes>
);

export default App;
