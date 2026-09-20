import useOutsideClick from "@/hooks/useOutsideClick";
import type { FC, ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Model2: FC<Props> = ({ open, onClose, children }) => {
  const ref = useOutsideClick<HTMLDivElement>(onClose);
  if (!open) return;
  return (
    <div className="fixed inset-0 grid place-items-center bg-black/50">
      <div className="w-200 rounded bg-white p-7" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Model2;
