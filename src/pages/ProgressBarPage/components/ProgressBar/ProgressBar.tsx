import { useEffect, useState, type FC } from "react";
import clsx from "clsx";

const ProgressBar: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => setActive(true), []);

  return (
    <div className="my-2 h-2 w-full bg-gray-200">
      <div
        className={clsx(
          "h-2 bg-green-800 transition-[width] duration-2000",
          { "w-full": active },
          { "w-0": !active },
        )}
      />
    </div>
  );
};

export default ProgressBar;
