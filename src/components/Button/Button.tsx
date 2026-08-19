import type { ComponentProps, FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 font-medium select-none",
  variants: {
    variant: {
      primary:
        "border-[#888] border text-[#888] hover:border-[#f00] hover:text-[#f00]",
      secondary:
        "bg-[#f00] text-white border hover:border-[#f00] hover:bg-white hover:text-[#f00]",
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
  <button className={button({ variant, className })} {...rest}>
    {children}
  </button>
);

export default Button;
