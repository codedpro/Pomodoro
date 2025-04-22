import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      quote:
        "FocusTimer has completely transformed my workday. I'm getting more done in less time and feeling less stressed.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      quote:
        "As a developer, staying in flow state is crucial. The Pomodoro technique with FocusTimer helps me maintain deep focus when coding.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Writer",
      quote:
        "I've tried many productivity apps, but FocusTimer is the only one that's stuck. The simple interface and powerful analytics keep me motivated.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "David Kim",
      role: "Marketing Manager",
      quote:
        "Managing multiple projects is easier with FocusTimer. I can dedicate focused time to each task and track my productivity across projects.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Loved by Productive People</h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have boosted their productivity with FocusTimer
        </p>
      </div>

      <Marquee pauseOnHover speed={20}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="w-80 mx-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl h-full">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.quote}"</p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
