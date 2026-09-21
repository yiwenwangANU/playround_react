import { createBrowserRouter, RouterProvider } from "react-router";
import DataTablePage from "@/pages/DataTablePage";

const router = createBrowserRouter([
  {
    path: "/12",
    Component: DataTablePage,
    ErrorBoundary: () => <div>Something went wrong!</div>,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
