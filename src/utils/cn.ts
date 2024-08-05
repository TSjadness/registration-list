import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Return className strings conditionally. It merge tailwind classes without style conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
