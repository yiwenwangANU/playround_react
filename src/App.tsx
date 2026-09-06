import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
const TodoListPage = lazy(() => import("./pages/TodoListPage"));

const App = () => (
  <Routes>
    <Route
      path="/18"
      element={
        <Suspense fallback={<div>TodoList Page Loading</div>}>
          <TodoListPage />
        </Suspense>
      }
    />
  </Routes>
);

export default App;
