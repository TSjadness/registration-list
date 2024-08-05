import { cn } from "@/utils/cn";
import {
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  forwardRef,
} from "react";


/* -----------------------------------------------------------------------------
 * Table
 * -------------------------------------------------------------------------- */

const TableRoot = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className={cn("w-full overflow-auto", className)}>
    <table ref={ref} className="w-full caption-bottom text-sm" {...props} />
  </div>
));

TableRoot.displayName = "Table.Root";

/* -------------------------------------------------------------------------- */

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "sticky top-0 border-gray-200 bg-gray-50 [&_tr]:border-b",
      className
    )}
    {...props}
  />
));

TableHeader.displayName = "Table.Header";

/* -------------------------------------------------------------------------- */

const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn(className)} {...props} />
));

TableBody.displayName = "Table.Body";

/* -------------------------------------------------------------------------- */

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-gray-200 font-medium text-gray-700", className)}
    {...props}
  />
));

TableFooter.displayName = "Table.Footer";

/* -------------------------------------------------------------------------- */

const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-gray-200 data-[state=selected]:bg-gray-50",
      className
    )}
    {...props}
  />
));

TableRow.displayName = "Table.Row";

/* -------------------------------------------------------------------------- */

const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-8 p-3 text-left text-xs font-bold text-gray-700 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));

TableHead.displayName = "Table.Head";

/* -------------------------------------------------------------------------- */

const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-3 [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));

TableCell.displayName = "Table.Cell";

/* -------------------------------------------------------------------------- */

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-gray-700", className)}
    {...props}
  />
));

TableCaption.displayName = "Table.Caption";

/* -------------------------------------------------------------------------- */

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption,
};
