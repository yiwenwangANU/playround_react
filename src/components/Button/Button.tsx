import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface Props
  extends
    Omit<ComponentProps<"button">, "children" | "className">,
    VariantProps<typeof button> {
  children: ReactNode;
  className?: string;
}

export const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded px-4 py-1.5 font-medium select-none",
  variants: {
    variant: {
      primary:
        "bg-white border-black border duration-100 hover:text-purple-500 hover:border-purple-500",
      secondary: "bg-purple-500 text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button: FC<Props> = ({ variant, className, children, ...rest }) => (
  <button className={button({ variant, className })} {...rest}>
    {children}
  </button>
);

export default Button;
