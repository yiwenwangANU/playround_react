import { useRef, useEffect, type FC, type ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ open, onClose, children }) => {
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
      className="m-auto w-200 rounded p-6 backdrop:bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      ref={dialogRef}
      onClose={onClose}
    >
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
};

export default Modal;
