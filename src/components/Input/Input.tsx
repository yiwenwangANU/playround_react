import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<ComponentProps<"input">, "className"> {
  className?: string;
}

const Input: FC<Props> = ({ className, ...rest }) => {
  return (
    <input
      className={twMerge("border border-black px-0.5", className)}
      {...rest}
    />
  );
};

export default Input;
