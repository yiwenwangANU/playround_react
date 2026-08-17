import { useState, type FC } from "react";
import ProgressBar from "./components/ProgressBar";

const ProgressBarPage: FC = () => {
  const [num, setNum] = useState<number>(0);

  return (
    <>
      {Array.from({ length: num }, () => (
        <ProgressBar />
      ))}
      <button onClick={() => setNum((prev) => prev + 1)}>Add</button>
    </>
  );
};

export default ProgressBarPage;
