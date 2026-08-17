import { useEffect, useState, type FC } from "react";
import { clsx } from "clsx";

interface Props {
  delay?: number;
}

const ProgressBar: FC<Props> = ({ delay = 2000 }) => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => setActive(true), []);

  return (
    <div className="h-2 w-full bg-gray-200 my-1">
      <div
        className={clsx(
          "h-2 bg-green-700",
          { "w-0": !active },
          { "w-full": active },
        )}
        style={{ transitionDuration: `${delay}ms` }}
      />
    </div>
  );
};

export default ProgressBar;
