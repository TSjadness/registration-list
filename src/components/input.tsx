import { cn } from "@/utils/cn";
import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";

interface InputRootProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  disabled?: boolean;
}

function InputRoot({
  className,
  invalid,
  disabled,
  size = "md",
  ...props
}: InputRootProps) {
  return (
    <label
      role="none"
      data-size={size}
      data-invalid={invalid}
      data-disabled={disabled}
      className={cn(
        "group/input flex w-full items-center overflow-hidden rounded-md border border-gray-200 p-0 focus-within:outline focus-within:outline-2 focus-within:outline-blue-500",
        { "border-red-500": invalid },
        className
      )}
      {...props}
    />
  );
}

InputRoot.displayName = "Input.Root";

/* -------------------------------------------------------------------------- */

interface InputAddonInterface extends HTMLAttributes<HTMLDivElement> {}

function InputAddonInterface({ className, ...props }: InputAddonInterface) {
  return (
    <div
      role="presentation"
      className={cn(
        "shrink-0 border-gray-200 bg-gray-100 text-gray-500",
        "group-data-[size=sm]/input:max-h-[32px] group-data-[size=sm]/input:px-3 group-data-[size=sm]/input:py-[6px] group-data-[size=sm]/input:text-sm",
        "group-data-[size=md]/input:max-h-[40px] group-data-[size=md]/input:px-4 group-data-[size=md]/input:py-2 group-data-[size=md]/input:text-base",
        "group-data-[size=lg]/input:max-h-[48px] group-data-[size=lg]/input:px-4 group-data-[size=lg]/input:py-[10px] group-data-[size=lg]/input:text-lg",
        "group-data-[invalid=true]/input:border-red-500",
        "first:rounded-l-md first:border-r",
        "last:rounded-r-md last:border-l",
        className
      )}
      data-visible="true"
      {...props}
    />
  );
}

InputAddonInterface.displayName = "Input.Addon";

/* -------------------------------------------------------------------------- */

interface InputContentProps extends HTMLAttributes<HTMLDivElement> {}

function InputContent({ className, ...props }: InputContentProps) {
  return (
    <div
      className={cn(
        "flex flex-grow items-center gap-2 bg-white text-gray-600 first:rounded-l-md last:rounded-r-md only:rounded-md",
        "group-data-[size=sm]/input:max-h-[32px] group-data-[size=sm]/input:px-3 group-data-[size=sm]/input:py-[6px] group-data-[size=sm]/input:text-sm",
        "group-data-[size=md]/input:max-h-[40px] group-data-[size=md]/input:px-4 group-data-[size=md]/input:py-2 group-data-[size=md]/input:text-base",
        "group-data-[size=lg]/input:max-h-[48px] group-data-[size=lg]/input:px-4 group-data-[size=lg]/input:py-[10px] group-data-[size=lg]/input:text-lg",
        "group-data-[disabled=true]/input:bg-gray-50/70 group-data-[disabled=true]/input:text-gray-500",
        className
      )}
      {...props}
    />
  );
}

InputContent.displayName = "Input.Content";

/* -------------------------------------------------------------------------- */

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { className, type = "text", ...props }: InputFieldProps,
    ref
  ) {
    return (
      <input
        className={cn(
          "w-full bg-transparent placeholder:text-gray-400 focus:outline-none",
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

InputField.displayName = "Input.Field";

/* -------------------------------------------------------------------------- */

interface InputErrorProps extends HTMLAttributes<HTMLSpanElement> {
  error: string | undefined;
}

const InputError = forwardRef<HTMLSpanElement, InputErrorProps>(
  function InputError({ error, className, ...props }: InputErrorProps, ref) {
    if (!error) return null;
    return (
      <span
        ref={ref}
        className={cn("text-red-500", className)}
        {...props}
        role="alert"
      >
        {error}
      </span>
    );
  }
);
InputError.displayName = "Input.Error";

/* -------------------------------------------------------------------------- */

export const Input = {
  Addon: InputAddonInterface,
  Content: InputContent,
  Root: InputRoot,
  Field: InputField,
  Error: InputError,
};
