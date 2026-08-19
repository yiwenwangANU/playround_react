import { Routes, Route } from "react-router";
import FileExplorerPage from "./pages/FileExplorerPage";

const App = () => <Routes><Route index element={<FileExplorerPage />} /></Routes>;

export default App;
