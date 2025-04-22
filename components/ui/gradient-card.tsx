import type React from "react"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
}

export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={`relative rounded-xl bg-gradient-to-b from-neutral-800/10 to-neutral-800/30 p-[1px] backdrop-blur-3xl ${className}`}
    >
      <div className="relative rounded-xl bg-black p-6">{children}</div>
    </div>
  )
}
