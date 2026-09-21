import { useState, type FC } from "react";
import clsx from "clsx";

type File = {
  id: number;
  name: string;
  children?: File[];
};

interface Props {
  files: File[];
}

const FileExplorer: FC<Props> = ({ files }) => {
  const [expendedIndex, setExpendedIndex] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setExpendedIndex((prev) => {
      if (prev.includes(id)) {
        return prev.filter((index) => index !== id);
      }
      return [...prev, id];
    });
  };
  
  return files.map((file) => (
    <div key={file.id}>
      <div className={clsx("inline", { "font-bold": file.children })}>
        {file.name}
      </div>
      {file.children && (
        <button
          className="inline cursor-pointer font-bold"
          onClick={() => handleClick(file.id)}
        >
          [{expendedIndex.includes(file.id) ? "-" : "+"}]
        </button>
      )}
      {file.children && expendedIndex.includes(file.id) && (
        <FileExplorer files={file.children} />
      )}
    </div>
  ));
};

export default FileExplorer;
