import type { ComponentProps, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<
  ComponentProps<"button">,
  "children" | "className"
> {
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
