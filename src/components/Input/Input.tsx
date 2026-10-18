import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<ComponentProps<"input">, "className"> {
  className?: string;
}

const Input: FC<Props> = ({ className, ...rest }) => (
  <input
    className={twMerge("border border-black px-1 py-0.5", className)}
    {...rest}
  />
);

export default Input;
