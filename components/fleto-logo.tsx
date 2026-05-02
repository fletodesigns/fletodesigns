import { cn } from "@/lib/utils"

export function FletoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" stroke="currentColor" strokeOpacity="0.2" />
      <path
        d="M9 22V10h13"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M9 16h9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
      <circle cx="22" cy="22" r="2.2" fill="#CCFF00" />
    </svg>
  )
}

export function FletoWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 font-sans", className)}>
      <FletoMark />
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        FLETO
      </span>
    </span>
  )
}
