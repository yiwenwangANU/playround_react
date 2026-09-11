import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { ErrorBoundary, getErrorMessage } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
const DataTablePage = lazy(() => import("./pages/DataTablePage"));

const App = () => (
  <Routes>
    <Route
      path="/12"
      element={
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <div role="alert">
                  <p>Something went wrong:</p>
                  <pre>{getErrorMessage(error)}</pre>
                  <button onClick={resetErrorBoundary}>Try again</button>
                </div>
              )}
              onReset={reset}
            >
              <Suspense fallback={<div>Loading</div>}>
                <DataTablePage />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      }
    />
  </Routes>
);

export default App;
