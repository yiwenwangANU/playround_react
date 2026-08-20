import { useState, type FC } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  content: string;
}

const Accordion: FC<Props> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        <div
          className={clsx("rotate-45 border-r border-b duration-200 w-2 h-2", {
            "rotate-225": active,
          })}
        />
      </button>
      {active && <div>{content}</div>}
    </>
  );
};

export default Accordion;
