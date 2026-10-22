import type { FC } from "react";

interface Props {
  progress: number;
}

const ProgressBar: FC<Props> = ({ progress }) => {
  return (
    <div
      className="h-5 w-full overflow-hidden rounded-2xl border border-gray-400 bg-gray-200 text-center"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemax={100}
      aria-valuemin={0}
    >
      <div
        className="h-5 overflow-hidden bg-sky-600 text-sm text-white"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
