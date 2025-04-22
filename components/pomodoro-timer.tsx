"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export function PomodoroTimer() {
  const [mode, setMode] = useState<"focus" | "break">("focus")
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)
  const [progress, setProgress] = useState(100)

  // Calculate minutes and seconds
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  // Calculate progress for the circle
  useEffect(() => {
    const totalTime = mode === "focus" ? 25 * 60 : 5 * 60
    setProgress((time / totalTime) * 100)
  }, [time, mode])

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      // Switch modes when timer ends
      if (mode === "focus") {
        setMode("break")
        setTime(5 * 60) // 5 minute break
      } else {
        setMode("focus")
        setTime(25 * 60) // 25 minute focus
      }
      setIsActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time, mode])

  // Toggle timer
  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  // Reset timer
  const resetTimer = () => {
    setIsActive(false)
    setTime(mode === "focus" ? 25 * 60 : 5 * 60)
  }

  // Switch mode
  const switchMode = (newMode: "focus" | "break") => {
    setMode(newMode)
    setIsActive(false)
    setTime(newMode === "focus" ? 25 * 60 : 5 * 60)
  }

  // Calculate stroke-dashoffset for the progress circle
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="4" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={mode === "focus" ? "#ef4444" : "#f97316"}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="timer-progress"
          />
        </svg>

        {/* Timer display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">
            {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-400 mt-2 capitalize">{mode} Time</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 border-white/10 bg-white/5 hover:bg-white/10"
          onClick={toggleTimer}
        >
          {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 border-white/10 bg-white/5 hover:bg-white/10"
          onClick={resetTimer}
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 mt-6">
        <Button
          variant={mode === "focus" ? "default" : "outline"}
          className={mode === "focus" ? "bg-red-500 hover:bg-red-600" : "border-white/10 bg-white/5 hover:bg-white/10"}
          onClick={() => switchMode("focus")}
        >
          Focus
        </Button>
        <Button
          variant={mode === "break" ? "default" : "outline"}
          className={
            mode === "break" ? "bg-orange-500 hover:bg-orange-600" : "border-white/10 bg-white/5 hover:bg-white/10"
          }
          onClick={() => switchMode("break")}
        >
          Break
        </Button>
      </div>
    </div>
  )
}
