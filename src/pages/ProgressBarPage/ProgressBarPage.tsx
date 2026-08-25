import { useState, type FC } from "react";
import ProgressBar from "./components/ProgressBar";

const ProgesssBarPage: FC = () => {
  const [numOfBar, setNumOfBar] = useState<number>(0);
  return (
    <>
      {Array.from({ length: numOfBar }, (_, i) => (
        <ProgressBar key={i} />
      ))}
      <button onClick={() => setNumOfBar((prev) => prev + 1)}>Add</button>
    </>
  );
};

export default ProgesssBarPage;
