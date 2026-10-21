import {
  useEffect,
  useRef,
  type ComponentProps,
  type FC,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<
  ComponentProps<"dialog">,
  "open" | "onClose" | "children" | "className"
> {
  open?: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: FC<Props> = ({
  open = false,
  onClose,
  children,
  className,
  ...rest
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (ref.current === null) return;
    if (open) {
      ref.current.showModal();
    } else ref.current.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      {...rest}
      className={twMerge("m-auto rounded-2xl backdrop:bg-black/50", className)}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-w-100 p-5">{children}</div>
    </dialog>
  );
};

export default Modal;
