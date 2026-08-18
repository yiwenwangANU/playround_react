import type { FC } from "react";

interface Props {
  limit: number;
  onSelect: (data: number) => void;
}
const Select: FC<Props> = ({ limit, onSelect }) => {
  return (
    <select
      className="rounded border border-gray-400 bg-gray-200 px-1 py-0.5"
      value={limit}
      onChange={(e) => onSelect(Number(e.target.value))}
    >
      <option value={5}>Show 5</option>
      <option value={10}>Show 10</option>
      <option value={15}>Show 15</option>
    </select>
  );
};

export default Select;
