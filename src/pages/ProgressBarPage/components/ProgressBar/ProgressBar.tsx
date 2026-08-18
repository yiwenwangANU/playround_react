import type { FC } from "react";

interface Props {
  progress: number;
}

const ProgressBar: FC<Props> = ({ progress }) => (
  <div className="h-5 w-full rounded-full border border-gray-400 bg-gray-100">
    {progress > 0 && (
      <div
        className="h-5 rounded-full border border-blue-600 bg-blue-600 text-white text-sm text-center"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    )}
  </div>
);

export default ProgressBar;
