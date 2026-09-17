import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded px-2 py-1 font-medium select-none font-thin text-sm",
  variants: {
    variant: {
      primary:
        "border border-black hover:border-violet-600 hover:text-violet-600",
      secondary: "border border-violet-600 text-white bg-violet-600",
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
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = ({ children, className, variant, ...rest }) => (
  <button {...rest} className={button({ variant, className })}>
    {children}
  </button>
);

export default Button;
