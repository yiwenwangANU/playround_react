import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

interface Props {
  className: string;
  currentIndex: number;
  count: number;
  onDotClick: (i: number) => void;
}

const NavBar: FC<Props> = ({ count, currentIndex, onDotClick, className }) => {
  return (
    <div
      className={twMerge(
        "flex w-fit gap-2 rounded-full bg-black/50 p-2",
        className,
      )}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          onClick={() => onDotClick(i)}
          className={clsx(
            "h-2 w-2 cursor-pointer rounded-full bg-gray-700/50 hover:bg-white",
            { "bg-white": i === currentIndex },
          )}
        />
      ))}
    </div>
  );
};

export default NavBar;
