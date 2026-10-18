import { useState, type FC } from "react";
import ProgressBar from "./components/ProgressBar";

const ProgesssBarPage: FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <main className="py-2 px-2 space-y-2">
      {count !==0 && Array.from({length: count}, () => <ProgressBar />)}
      <button
        className="cursor-pointer rounded border border-black bg-black px-2 py-1 text-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
    </main>
  );
};

export default ProgesssBarPage;
