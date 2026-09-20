import { useState, type FC } from "react";
import clsx from "clsx";

type FileData = {
  id: number;
  name: string;
  children?: FileData[];
};

interface Props {
  files: FileData[];
}

const FileExplorer: FC<Props> = ({ files }) => {
  const [expandedIndex, setExpandedIndex] = useState<number[]>([]);

  return (
    <div>
      {files.map((file) => (
        <>
          <div className={clsx({ "font-bold": file.children })}>
            {file.name}{" "}
            {file.children && (
              <span
              className="cursor-pointer"
                onClick={() => {
                  if (expandedIndex.includes(file.id)) {
                    setExpandedIndex((prev) =>
                      prev.filter((id) => id !== file.id),
                    );
                    return;
                  }
                  setExpandedIndex((prev) => [...prev, file.id]);
                }}
              >
                {`[${expandedIndex.includes(file.id) ? "-" : "+"}]`}
              </span>
            )}
          </div>
          {file.children && expandedIndex.includes(file.id) && (
            <FileExplorer files={file.children} />
          )}
        </>
      ))}
    </div>
  );
};
export default FileExplorer;
