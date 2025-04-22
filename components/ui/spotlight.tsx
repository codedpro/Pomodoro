"use client"

import { useRef, type MouseEvent, type ReactNode } from "react"

interface SpotlightProps {
  children: ReactNode
  className?: string
}

export function Spotlight({ children, className = "" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const { left, top, width, height } = divRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    divRef.current.style.setProperty("--mouse-x", `${x}`)
    divRef.current.style.setProperty("--mouse-y", `${y}`)
  }

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 group-hover/spotlight:opacity-100">
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-[100px] transition-opacity duration-500 group-hover/spotlight:opacity-100"
          style={{
            clipPath: "circle(35% at var(--mouse-x, 0.5) var(--mouse-y, 0.5))",
            opacity: 0.8,
          }}
        />
      </div>
      {children}
    </div>
  )
}
