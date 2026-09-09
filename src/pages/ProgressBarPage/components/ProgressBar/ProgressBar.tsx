import { type FC } from "react";

const ProgressBar: FC = () => (
  <div className="my-2 h-3 w-full rounded-full bg-gray-400" role="progressbar">
    <div className="h-3 animate-[progress_2s_ease_forwards] rounded-full bg-green-900 transition-[width] duration-2000" />
  </div>
);

export default ProgressBar;
