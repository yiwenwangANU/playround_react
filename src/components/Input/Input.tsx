import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<ComponentProps<"input">, "className"> {
  className?: string;
}

const Input: FC<Props> = ({ className, ...rest }) => (
  <input className={twMerge(className, "border-1 p-1")} {...rest} />
);

export default Input;
