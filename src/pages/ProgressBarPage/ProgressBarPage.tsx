import type { FC } from "react";
import ProgressBar from "./components/ProgressBar";

const PROGRESS = [0, 1, 10, 25, 50, 75, 101];

const ProgressBarPage: FC = () => {
  return (
    <div className="space-y-2">
      {PROGRESS.map((progress, i) => (
        <ProgressBar progress={progress} key={i} />
      ))}
    </div>
  );
};

export default ProgressBarPage;
