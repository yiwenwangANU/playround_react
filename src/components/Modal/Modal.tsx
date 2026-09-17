import { useEffect, useRef, type FC, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: FC<Props> = ({ open, onClose, children, className }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!dialogRef.current) return;
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return (
    <dialog
      className="m-auto rounded backdrop:bg-black/50"
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={twMerge("w-200 p-7", className)}>
        {children}
        <button onClick={onClose} className="mx-auto block w-fit">
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
