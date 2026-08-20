import { useEffect, useState, type FC } from "react";
import clsx from "clsx";

interface Props {
  color?: string;
  duration?: number;
}

const ProgressBar: FC<Props> = ({ color = "green", duration = 2000 }) => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => setActive(true), []);

  return (
    <div className="h-3 w-full bg-gray-400">
      <div
        className={clsx("h-3 w-0 transition-[width]", { "w-full": active })}
        style={{
          backgroundColor: `${color}`,
          transitionDuration: `${duration}ms`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
