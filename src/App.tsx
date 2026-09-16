import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import DataTablePage from "@/pages/DataTablePage";

const router = createBrowserRouter([
  {
    path: "/12",
    Component: () => (
      <Suspense fallback={<div>loading</div>}>
        <DataTablePage />
      </Suspense>
    ),
    ErrorBoundary: () => <div>Something goes wrong</div>,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
