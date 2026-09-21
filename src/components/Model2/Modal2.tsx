import useOutsideClick from "@/hooks/useOutsideClick";
import { type FC, type ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal2: FC<Props> = ({ open, onClose, children }) => {
  const dialogRef = useOutsideClick<HTMLDivElement>(onClose);

  if (!open) return;

  return (
    <div className="fixed inset-0 grid place-items-center bg-black/50">
      <div className="w-200 space-y-2 rounded-2xl bg-white p-7" ref={dialogRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal2;
