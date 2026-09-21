import { useEffect, useRef, type FC, type ReactNode } from "react";

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
      return;
    }
    dialogRef.current.close();
  }, [open]);

  return (
    <dialog
      className="m-auto backdrop:bg-black/50"
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-200 rounded-2xl p-7">{children}</div>
    </dialog>
  );
};

export default Modal;
