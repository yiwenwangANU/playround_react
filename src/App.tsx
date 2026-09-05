import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
const AccordionPage = lazy(() => import("./pages/AccordionPage"));

const App = () => (
  <Routes>
    <Route
      path="/1"
      element={
        <Suspense fallback={<div>Accordion Page Loading</div>}>
          <AccordionPage />
        </Suspense>
      }
    />
  </Routes>
);

export default App;
