import type { FC } from "react";

const ProgressBar: FC = () => (
    <div className="h-2 bg-gray-300">
      <div className="h-full animate-[progress_2s] bg-green-700" />
    </div>
);

export default ProgressBar;
