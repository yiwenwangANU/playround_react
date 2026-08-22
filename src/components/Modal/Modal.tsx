import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import {X} from 'lucide-react'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div onClick={e=>e.stopPropagation()} className="relative">
        <button onClick={onClose} className="absolute right-2 top-2"><X /></button>
        <div className="bg-white p-5 rounded-2xl">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
