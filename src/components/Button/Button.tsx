import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface Props
  extends
    Omit<ComponentProps<"button">, "children" | "className">,
    VariantProps<typeof button> {
  children: ReactNode;
  className?: string;
}

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-2xl px-3 py-0.5 text-sm font-medium select-none border-2",
  variants: {
    variant: {
      primary:
        "border-gray-400 text-gray-400 hover:border-rose-500 hover:text-rose-500",
      secondary:
        "border-rose-500 bg-rose-500 text-white hover:bg-white hover:text-rose-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button: FC<Props> = ({ children, className, variant, ...rest }) => (
  <button {...rest} className={button({ variant, className })}>
    {children}
  </button>
);

export default Button;
