import type { FC } from "react";
import Select from "./components/Select";
import PaginationButtons from "./components/PaginationButtons";

const PaginationControl: FC = () => (
  <div className="flex gap-2">
    <Select />
    <PaginationButtons />
  </div>
);

export default PaginationControl;
