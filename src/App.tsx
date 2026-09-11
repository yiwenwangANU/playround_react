import { Routes, Route } from "react-router";
import TabsPage from "./pages/TabsPage";

const App = () => (
  <Routes>
    <Route path="/11" element={<TabsPage />} />
  </Routes>
);

export default App;
