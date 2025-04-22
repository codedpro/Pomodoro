import { GradientCard } from "@/components/ui/gradient-card"
import { Clock, BarChart2, Bell, CheckCircle, Calendar, Settings } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Customizable Timers",
      description: "Set your own focus and break durations to match your personal productivity rhythm",
      icon: <Clock className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Productivity Analytics",
      description: "Track your focus sessions and productivity trends over time with detailed statistics",
      icon: <BarChart2 className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Smart Notifications",
      description: "Get gentle reminders when it's time to focus or take a break",
      icon: <Bell className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Task Management",
      description: "Organize your work with an integrated task list that syncs with your Pomodoro sessions",
      icon: <CheckCircle className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Daily Goals",
      description: "Set daily focus goals and track your progress toward achieving them",
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Distraction Blocker",
      description: "Optional website and app blocking during focus sessions to help you stay on track",
      icon: <Settings className="h-6 w-6 text-yellow-500" />,
    },
  ]

  return (
    <section id="features" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Features Designed for Focus
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          FocusTimer combines the proven Pomodoro technique with modern features to help you achieve deep focus and
          maximize your productivity.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GradientCard key={feature.title}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-white/5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
