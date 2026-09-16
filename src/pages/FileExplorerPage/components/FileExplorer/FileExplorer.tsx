import { useState, type FC } from "react";

type File = {
  id: number;
  name: string;
  children?: File[];
};

interface Props {
  files: File[];
  className?: string;
}

const FileExplorer: FC<Props> = ({ files, className }) => {
  const [expendedIDs, setExpendedIDs] = useState(new Set());

  return (
    <div className={className}>
      {files.map((file) => (
        <div key={file.id}>
          {!file.children && <div>{file.name}</div>}
          {file.children && (
            <button
              className="font-bold"
              onClick={() => {
                setExpendedIDs((prev) => {
                  const newSet = new Set(prev);
                  if (newSet.has(file.id)) {
                    newSet.delete(file.id);
                    return newSet;
                  }
                  newSet.add(file.id);
                  return newSet;
                });
              }}
            >
              {file.name} {expendedIDs.has(file.id) ? "[-]" : "[+]"}
            </button>
          )}
          {expendedIDs.has(file.id) && file.children && (
            <FileExplorer files={file.children} className="ml-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
