import { Routes, Route } from "react-router";
import TweetPage from "./pages/TweetPage";

const App = () => (
  <Routes>
    <Route path="/10" element={<TweetPage />} />
  </Routes>
);

export default App;
