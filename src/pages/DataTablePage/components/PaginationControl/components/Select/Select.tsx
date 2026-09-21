import type { FC } from "react";

const SELECT_OPTIONS = [
  {
    label: "show 5",
    value: 5,
  },
  {
    label: "show 10",
    value: 10,
  },
  {
    label: "show 20",
    value: 20,
  },
];

interface Props {
  onSelect: (limit: number) => void;
}

const Select: FC<Props> = ({ onSelect }) => (
  <select
    className="rounded border border-black px-2 py-0.5"
    onChange={(e) => onSelect(Number(e.target.value))}
  >
    {SELECT_OPTIONS.map((option) => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
);
export default Select;
