import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex cursor-pointer items-center rounded-full font-medium select-none",
  variants: {
    variant: {
      primary: "bg-zinc-900 text-white",
      secondary: "bg-zinc-100 text-zinc-900",
    },
    size: {
      sm: "text-sm px-3 py-1",
      md: "text-base px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface Props
  extends
    Omit<ComponentProps<"button">, "children" | "className">,
    VariantProps<typeof button> {
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return <button className={button({ ...rest, className })}>{children}</button>;
};

export default Button;
