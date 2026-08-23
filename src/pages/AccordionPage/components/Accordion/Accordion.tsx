import { useId, useState, type FC } from "react";
import {clsx} from 'clsx'

interface Props {
  title: string;
  content: string;
}

const Accordion: FC<Props> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false);
  const panelId = useId()

  return (
    <div>
      <button
        className="flex w-full cursor-pointer justify-between hover:bg-gray-200 items-center"
        onClick={() => setActive((prev) => !prev)}
        aria-expanded={active}
        aria-controls={panelId}
      >
        <span>{title}</span>
        <div className={clsx("border-b-2 border-r-2 w-2 h-2 duration-200", {'rotate-45': !active}, {'rotate-225': active})} />
      </button>
      {active && <div id={panelId}>{content}</div>}
    </div>
  );
};

export default Accordion;
