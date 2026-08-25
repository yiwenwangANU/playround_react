import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return;
  return (
    <div>
      {createPortal(
        <div
          className="fixed inset-0 grid place-items-center bg-black/50 backdrop-blur-lg"
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-2xl bg-white p-8 shadow"
          >
            <X
              className="absolute top-2 right-2 h-4 w-4 cursor-pointer duration-200 hover:rotate-90"
              onClick={onClose}
            />
            {children}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
};

export default Modal;
