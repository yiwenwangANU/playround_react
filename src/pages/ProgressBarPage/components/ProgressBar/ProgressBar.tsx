import type { FC } from "react";

interface Props {
  progress: number;
}

const ProgressBar: FC<Props> = ({ progress }) => {
  const refinedProgress = Math.max(Math.min(progress, 100), 0);
  return (
    <div className="mx-10 h-4 overflow-hidden rounded-3xl border border-gray-400 bg-gray-200">
      <div
        className="flex h-4 items-center justify-center overflow-clip bg-blue-500 text-sm text-white"
        style={{ width: `${refinedProgress}%` }}
      >
        {refinedProgress}%
      </div>
    </div>
  );
};

export default ProgressBar;
