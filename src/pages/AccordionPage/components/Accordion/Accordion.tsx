import { useState, type FC } from "react";
import {clsx} from 'clsx'

interface Props {
  title: string;
  content: string;
}

const Accordion: FC<Props> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <button
        className="flex w-full cursor-pointer justify-between hover:bg-gray-200 items-center"
        onClick={() => setActive((prev) => !prev)}
      >
        <span>{title}</span>
        <div className={clsx("border-b-2 border-r-2 w-2 h-2 duration-200", {'rotate-45': !active}, {'rotate-225': active})} />
      </button>
      {active && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
