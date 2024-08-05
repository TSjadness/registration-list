import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/utils/cn";

/* -----------------------------------------------------------------------------
 * Select
 * -------------------------------------------------------------------------- */

interface SelectRootProps extends SelectPrimitive.SelectProps {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  role?: string;
}

function SelectRoot({
  role = "select",
  size = "md",
  invalid,
  ...props
}: SelectRootProps) {
  return (
    <div
      className="group/select"
      role={role}
      data-size={size}
      data-invalid={invalid}
    >
      <SelectPrimitive.Root {...props} />
    </div>
  );
}

SelectRoot.displayName = "Select.Root";

/* -------------------------------------------------------------------------- */

const SelectGroup = SelectPrimitive.Group;
SelectGroup.displayName = "Select.Group";

/* -------------------------------------------------------------------------- */

const SelectValue = SelectPrimitive.Value;
SelectValue.displayName = "Select.Value";

/* -------------------------------------------------------------------------- */

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border bg-white text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-600",
      "group-data-[size=sm]/select:max-h-[32px] group-data-[size=sm]/select:px-3 group-data-[size=sm]/select:py-[6px] group-data-[size=sm]/select:text-sm",
      "group-data-[size=md]/select:max-h-[40px] group-data-[size=md]/select:px-4 group-data-[size=md]/select:py-2 group-data-[size=md]/select:text-base",
      "group-data-[size=lg]/select:max-h-[48px] group-data-[size=lg]/select:px-4 group-data-[size=lg]/select:py-[10px] group-data-[size=lg]/select:text-lg",
      "group-data-[invalid=true]/select:border-red-500",
      className
    )}
    {...props}
  >
    {children}

    <SelectPrimitive.Icon asChild>
      <IoChevronDownOutline size={16} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = "Select.Trigger";

/* -------------------------------------------------------------------------- */

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  (
    { className, children, position = "popper", sideOffset = 4, ...props },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "z-40 min-w-[8rem] overflow-hidden rounded-md bg-white drop-shadow-md",
          "data-[state=open]:data-[side=bottom]:animate-slide-up-and-fade",
          "data-[state=open]:data-[side=left]:animate-slide-right-and-fade",
          "data-[state=open]:data-[side=right]:animate-slide-left-and-fade",
          "data-[state=open]:data-[side=top]:animate-slide-down-and-fade",
          className
        )}
        position={position}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] py-1.5"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);

SelectContent.displayName = "Select.Content";

/* -------------------------------------------------------------------------- */

const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("", className)} {...props} />
));

SelectLabel.displayName = "Select.Label";

/* -------------------------------------------------------------------------- */

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'flex w-full items-center px-4 py-1 text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none data-[disabled]:pointer-events-none data-[state="checked"]:bg-green-100 data-[state="checked"]:text-teal-700 data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = "Select.Item";

/* -------------------------------------------------------------------------- */

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-gray-200", className)}
    {...props}
  />
));

SelectSeparator.displayName = "Select.Separator";

/* -------------------------------------------------------------------------- */

export const Select = {
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue,
};
