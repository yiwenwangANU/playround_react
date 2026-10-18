import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type ButtonVariants = VariantProps<typeof button>;

interface Props extends ButtonVariants {
  children: ReactNode;
  className?: string;
}

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 font-medium select-none",
  variants: {
    variant: {
      primary: "bg-zinc-900 text-white",
      secondary: "bg-zinc-100 text-zinc-900",
      tertiary: "text-zinc-600",
    },
    flat: {
      true: "bg-transparent shadow-none",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button: FC<Props> = ({ children, className, ...variants }) => (
  <button className={button({ ...variants, className })}>{children}</button>
);

export default Button;
