import { createBrowserRouter, RouterProvider } from "react-router";
import DataTablePage from "@/pages/DataTablePage";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/12",
    Component: () => (
      <Suspense fallback={<div>Loading</div>}>
        <DataTablePage />
      </Suspense>
    ),
    ErrorBoundary: () => <div>Error</div>,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
