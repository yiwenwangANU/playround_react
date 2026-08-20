import { useState, type FC } from "react";
import ProgressBar from "./components/ProgressBar";

const Test: FC = () => {
  const [barNum, setBarNum] = useState<number>(0);

  return (
    <>
      {Array.from({ length: barNum }, () => (
        <ProgressBar />
      ))}
      <button onClick={() => setBarNum((prev) => prev + 1)}>Add</button>
    </>
  );
};

export default Test;
