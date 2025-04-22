import { ShineBorder } from "@/components/ui/shine-border"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Set Your Timer",
      description: "Choose a task and set the timer for 25 minutes (a standard Pomodoro)",
      color: "from-red-500 to-red-600",
    },
    {
      number: "02",
      title: "Focus Deeply",
      description: "Work on your task with complete focus until the timer rings",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "03",
      title: "Take a Break",
      description: "Take a short 5-minute break to rest your mind",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      number: "04",
      title: "Repeat & Track",
      description: "Repeat the cycle and track your productivity over time",
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 px-6 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">How the Pomodoro Technique Works</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          The Pomodoro Technique is a time management method developed by Francesco Cirillo that uses a timer to break
          work into intervals, traditionally 25 minutes in length, separated by short breaks.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <ShineBorder key={step.number} className="h-full" borderClassName="border border-white/10 rounded-xl">
              <div className="p-6 h-full">
                <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.color} mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute bottom-6 right-0 transform translate-x-1/2 translate-y-1/2 z-10">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 8L20 32M20 32L32 20M20 32L8 20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={index % 2 === 0 ? "rotate-90" : "rotate-0"}
                      />
                    </svg>
                  </div>
                )}
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
