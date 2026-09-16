import { useState, type FC } from "react";
import clsx from "clsx";

type FileObject = {
  id: number;
  name: string;
  children?: FileObject[];
};

interface Props {
  fileObjects: FileObject[];
}

const FileExplorer: FC<Props> = ({ fileObjects }) => {
  const [expendedIDs, setExpendedIDs] = useState(new Set());
  return (
    <div>
      {fileObjects.map((fileObject) => (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpendedIDs((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(fileObject.id)) {
                  newSet.delete(fileObject.id);
                  return newSet;
                }
                newSet.add(fileObject.id);
                return newSet;
              });
            }}
            key={fileObject.id}
            className={clsx(
              "block",
              { "cursor-pointer font-bold": fileObject.children },
              { "font-medium": !fileObject.children },
            )}
          >
            {fileObject.name}
            {fileObject.children && (
              <span> [{expendedIDs.has(fileObject.id) ? "-" : "+"}]</span>
            )}
          </button>
          {fileObject.children && expendedIDs.has(fileObject.id) && (
            <div className="ml-2">
              <FileExplorer fileObjects={fileObject.children} />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default FileExplorer;
