import { useEffect, useState, type FC } from "react";

const ProgressBar: FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  useEffect(() => {
    setStarted(true);
  }, []);

  return (
    <div
      className="my-2 h-3 w-full rounded-full bg-gray-400"
      role="progressbar"
    >
      <div
        className="h-3 rounded-full bg-green-900 transition-[width] duration-2000"
        style={{ width: started ? "100%" : "0%" }}
      />
    </div>
  );
};

export default ProgressBar;
