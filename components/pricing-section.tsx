import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { ShineBorder } from "@/components/ui/shine-border"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with the Pomodoro technique",
      features: ["Basic Pomodoro timer", "Task management", "Daily statistics", "Mobile and desktop apps"],
      buttonText: "Download Free",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      price: "$4.99",
      period: "per month",
      description: "Advanced features for serious productivity enthusiasts",
      features: [
        "Everything in Free",
        "Custom timer durations",
        "Advanced analytics",
        "Calendar integration",
        "Website blocker",
        "Priority support",
      ],
      buttonText: "Get Pro",
      buttonVariant: "default",
      highlight: true,
    },
  ]

  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your productivity needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <ShineBorder
              key={plan.name}
              className={`h-full ${plan.highlight ? "z-10" : ""}`}
              borderClassName={`border ${plan.highlight ? "border-red-500/50" : "border-white/10"} rounded-xl`}
            >
              <div className={`p-8 h-full ${plan.highlight ? "bg-gradient-to-b from-black to-black/80" : ""}`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 mb-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant as "outline" | "default"}
                  className={`w-full ${plan.highlight ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90" : ""}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
