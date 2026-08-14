import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded px-4 py-1.5 font-medium select-none",
  variants: {
    variant: {
      primary: "bg-gray-200 border-1 border-gray-400",
      secondary: "bg-zinc-100 text-zinc-900",
      tertiary: "text-zinc-600",
    },
    size: {
      md: "h-8 px-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface Props
  extends
    Omit<ComponentProps<"button">, "className" | "children">,
    VariantProps<typeof button> {
  className?: string;
  children: ReactNode;
}

const Button: FC<Props> = ({ variant, size, children, className, ...rest }) => (
  <button className={button({ variant, size, className })} {...rest}>
    {children}
  </button>
);

export default Button;
