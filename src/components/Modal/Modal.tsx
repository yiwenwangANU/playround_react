import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen = false, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 grid place-items-center bg-black/20"
      onClick={onClose}
    >
      <div
        className="w-fit space-y-4 rounded-2xl bg-white p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
