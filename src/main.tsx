import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
      <RouterProvider router={App} />,
  </StrictMode>,
);
