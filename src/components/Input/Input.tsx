import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<ComponentProps<"input">, "className"> {
  className?: string;
}

const Input: FC<Props> = ({ className, ...rest }) => (
  <input
    {...rest}
    className={twMerge("border border-black px-2 py-0.5", className)}
    type="number"
  />
);

export default Input;
