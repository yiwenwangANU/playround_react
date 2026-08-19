import { Routes, Route } from "react-router";
import ModalDialogPage from "./pages/ModalDialogPage/ModalDialogPage";

const App = () => (
  <Routes>
    <Route index element={<ModalDialogPage />} />
  </Routes>
);

export default App;
