import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DataTableErrorBoundary from "./pages/DataTablePage/DataTableErrorBoundary";
import { QueryClient } from "@tanstack/react-query";
import DataTableLoader from "./pages/DataTablePage/DataTableLoader";

const DataTablePage = lazy(() => import("./pages/DataTablePage"));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/12",
    Component: () => (
      <Suspense fallback={<div>loading</div>}>
        <DataTablePage />
      </Suspense>
    ),
    ErrorBoundary: DataTableErrorBoundary,
    loader: DataTableLoader(queryClient),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
