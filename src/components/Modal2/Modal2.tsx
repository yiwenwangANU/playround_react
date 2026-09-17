import useOutsideClick from "@/hooks/useOutsideClick";
import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal2: FC<Props> = ({ open, onClose, children, className }) => {
  const ref = useOutsideClick<HTMLDivElement>(onClose);
  if (!open) return;
  return createPortal(
    <div className="fixed inset-0 grid place-items-center bg-black/50">
      <div
        className={twMerge("w-200 rounded bg-white p-7", className)}
        ref={ref}
      >
        {children}
        <button className="mx-auto block w-fit" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal2;
