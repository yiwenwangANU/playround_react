import { useId, type FC } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  content: string;
  open: boolean;
  onToggle: () => void;
}

const Accordion: FC<Props> = ({ title, content, open, onToggle }) => {
  const id = useId();
  const buttonId = `${id}-button`;
  const sectionId = `${id}-panel`;
  return (
    <div className="space-y-2 px-2">
      <h3>
        <button
          className="flex w-full items-center justify-between px-1 hover:bg-gray-200"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={sectionId}
          id={buttonId}
        >
          <div>{title}</div>
          <div
            className={clsx(
              "h-2 w-2 border-r border-b font-bold duration-200",
              { "rotate-45": !open },
              { "rotate-225": open },
            )}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        className="px-1"
        id={sectionId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
