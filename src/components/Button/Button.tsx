import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-full px-3 py-0.5 font-medium select-none border-3 font-bold",
  variants: {
    variant: {
      primary:
        "border-gray-400 text-gray-400 hover:border-rose-500 hover:text-rose-500",
      secondary:
        "bg-rose-500 border-rose-500 text-white hover:bg-white hover:text-rose-500 hover:border-rose-500",
      tertiary: "text-zinc-600",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface Props
  extends
    Omit<ComponentProps<"button">, "children" | "className">,
    VariantProps<typeof button> {
  className?: string;
  children: ReactNode;
}

const Button: FC<Props> = ({ children, variant, className, ...rest }) => (
  <button className={button({ variant, className })} {...rest}>
    {children}
  </button>
);

export default Button;
