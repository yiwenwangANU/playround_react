import { useState, type FC } from "react";
import ProgressBar from "./components/ProgressBar";

const ProgressBarPage: FC = () => {
  const [num, setNum] = useState<number>(0);
  return (
    <>
      {Array.from({ length: num }, () => (
        <ProgressBar />
      ))}
      <button
        className="py-1/2 cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 text-sm"
        onClick={() => setNum((prev) => prev + 1)}
      >
        Add
      </button>
    </>
  );
};

export default ProgressBarPage;
