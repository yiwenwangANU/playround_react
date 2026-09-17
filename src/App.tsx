import { createBrowserRouter, RouterProvider } from "react-router";
import TodoListPage from "./pages/TodoListPage/TodoListPage";

const router = createBrowserRouter([
  {
    path: "/18",
    Component: TodoListPage,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
