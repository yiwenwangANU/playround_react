import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface Props
  extends
    Omit<ComponentProps<"button">, "className" | "children">,
    VariantProps<typeof button> {
  className?: string;
  children: ReactNode;
}

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded px-4 py-1.5 font-medium select-none",
  variants: {
    variant: {
      primary:
        "bg-gray-200 border border-gray-400 px-1 py-0.5 disabled:text-gray-500 disabled:bg-gray-100 disabled:border-gray-200",
      secondary: "bg-zinc-100 text-zinc-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button: FC<Props> = ({ children, variant, className, ...rest }) => (
  <button className={button({ variant, className })} {...rest}>
    {children}
  </button>
);

export default Button;
