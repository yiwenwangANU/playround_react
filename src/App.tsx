import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const SnakeGamePage = lazy(() => import("./pages/SnakeGamePage"));

const App = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<div>SnakeGamePage</div>}>
          <SnakeGamePage />
        </Suspense>
      }
    />
  </Routes>
);

export default App;
