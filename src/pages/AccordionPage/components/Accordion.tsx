import { useState, type FC } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  content: string;
}
const Accordion: FC<Props> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="mx-2 my-2">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between px-2 py-1 hover:bg-gray-200"
      >
        <div>{title}</div>
        <div
          className={clsx(
            "h-2 w-2 border-r-2 border-b-2 duration-200",
            { "rotate-45": !active },
            { "rotate-225": active },
          )}
        />
      </button>
      {active && <div className="px-2">{content}</div>}
    </div>
  );
};

export default Accordion;
