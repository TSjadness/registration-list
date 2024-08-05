import { cn } from "@/utils/cn";


interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <svg
      className={cn("h-5 w-5 animate-spin text-white", className)}
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeWidth="3"
        d="M 10 18 A 8 8 0 1 0 2 9.999999999999998"
      ></path>
    </svg>
  );
}
