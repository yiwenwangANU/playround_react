import { Routes, Route } from "react-router";
import TodoListPage from "./pages/TodoListPage/TodoListPage";

const App = () => (
  <Routes>
    <Route index element={<TodoListPage />} />
  </Routes>
);

export default App;
