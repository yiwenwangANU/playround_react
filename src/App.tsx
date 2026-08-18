import { Routes, Route } from "react-router";
import TweetPage from "./pages/TweetPage";

const App = () => (
  <Routes>
    <Route index element={<TweetPage />} />
  </Routes>
);

export default App;
