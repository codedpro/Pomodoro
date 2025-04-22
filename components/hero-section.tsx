import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Play, Download } from "lucide-react"
import { PomodoroTimer } from "@/components/pomodoro-timer"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black hero-gradient">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Boost Your Productivity
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              One Pomodoro at a Time
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            FocusTimer helps you stay productive with the proven Pomodoro technique. Work in focused sprints, take
            regular breaks, and track your progress to achieve more every day.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 gap-2">
              <Download className="w-4 h-4" />
              Download Now
            </Button>
          </div>
        </div>

        <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="relative bg-black/80 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <PomodoroTimer />
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Today's Progress</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-red-500">4</p>
                      <p className="text-xs text-gray-400">Pomodoros</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-orange-500">2h</p>
                      <p className="text-xs text-gray-400">Focus Time</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-yellow-500">3</p>
                      <p className="text-xs text-gray-400">Tasks Done</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Current Task</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <p>Complete landing page design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </ShineBorder>
    </section>
  )
}
