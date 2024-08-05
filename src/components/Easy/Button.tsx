import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";


export const buttonStyles = cva(
  "flex items-center justify-center gap-2 rounded-md font-bold cursor-pointer outline-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "bg-teal-500 text-white enabled:hover:bg-teal-600",
        outline:
          "border border-gray-200 text-gray-600 enabled:hover:bg-gray-100",
        ghost: "text-gray-600 enabled:hover:bg-gray-100",
      },
      size: {
        xs: "h-[24px] px-[10px] py-2 text-xs",
        sm: "h-[32px] px-3 py-[10px] text-sm",
        md: "h-[40px] px-4 py-[10px]",
        lg: "h-[48px] px-6 py-[10px] text-md",
      },
    },
  }
);

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStylesProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      size = "md",
      className,
      type = "button",
      ...props
    },
    ref
  ) => (
    <button
      type={type}
      className={cn(buttonStyles({ variant, size }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
