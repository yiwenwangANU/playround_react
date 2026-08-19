import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Modal: FC<Props> = ({ children, className }) =>
  createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={twMerge(
          "flex flex-col items-center justify-center gap-3 p-6",
          className,
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );

export default Modal;
