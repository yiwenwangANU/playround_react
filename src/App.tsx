import { Routes, Route } from "react-router";
import TabsPage from "./pages/TabsPage";

const App = () => (
  <Routes>
    <Route index element={<TabsPage />} />
  </Routes>
);

export default App;
