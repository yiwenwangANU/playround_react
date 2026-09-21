import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/0",
    element: <div>Hello World</div>,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
