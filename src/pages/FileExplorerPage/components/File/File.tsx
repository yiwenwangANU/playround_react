import { useState, type FC } from "react";

interface Props {
  id: number;
  name: string;
  children?: Props[];
}

const File: FC<Props> = ({ id, name, children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => setExpanded((prev) => !prev);

  if (!children) return <div>{name}</div>;

  return (
    <div>
      <button className="cursor-pointer font-bold" onClick={handleClick}>
        {name} {expanded ? "[-]" : "[+]"}
      </button>
      {expanded &&
        children.map((child) => (
          <File
            id={child.id}
            name={child.name}
            children={child.children}
            key={child.id}
          />
        ))}
    </div>
  );
};

export default File;
