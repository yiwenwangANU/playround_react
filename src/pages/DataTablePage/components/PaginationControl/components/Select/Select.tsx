import type { FC } from "react";
import { useSearchParams } from "react-router";

const SHOW_PAGES = [5, 10, 20];

const Select: FC = () => {
  const [, setSearchParams] = useSearchParams();
  const handleLimitChange = (newLimit: number) => {
    setSearchParams((prev) => ({ ...prev, skip: 0, limit: newLimit }));
  };

  return (
    <select
      className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
      onChange={(e) => handleLimitChange(Number(e.target.value))}
    >
      {SHOW_PAGES.map((page) => (
        <option value={page}>show {page}</option>
      ))}
    </select>
  );
};

export default Select;
