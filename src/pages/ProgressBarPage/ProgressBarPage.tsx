import type { FC } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const ProgressBarPage: FC = () => {
  return (
    <div className="space-y-2">
      <ProgressBar progress={0} />
      <ProgressBar progress={25} />
      <ProgressBar progress={50} />
      <ProgressBar progress={75} />
      <ProgressBar progress={100} />
    </div>
  );
};

export default ProgressBarPage;
