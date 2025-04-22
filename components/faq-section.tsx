"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "What is the Pomodoro Technique?",
      answer:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as 'pomodoros'.",
    },
    {
      question: "How does FocusTimer help with productivity?",
      answer:
        "FocusTimer implements the Pomodoro Technique with additional features like task management, productivity analytics, and customizable timers. By working in focused sprints and taking regular breaks, you can maintain high concentration levels and avoid burnout.",
    },
    {
      question: "Can I customize the timer durations?",
      answer:
        "Yes! With the Pro version, you can fully customize both your focus session and break durations to match your personal productivity rhythm.",
    },
    {
      question: "Is FocusTimer available on mobile devices?",
      answer:
        "Yes, FocusTimer is available for iOS and Android, as well as desktop applications for Windows and macOS. Your data syncs across all your devices.",
    },
    {
      question: "How does the website blocker work?",
      answer:
        "The website blocker (available in Pro) allows you to create a list of distracting websites that will be automatically blocked during your focus sessions, helping you stay on task.",
    },
    {
      question: "Can I export my productivity data?",
      answer: "Yes, Pro users can export their productivity data in CSV format for further analysis or record-keeping.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-6 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have questions about FocusTimer? Find answers to common questions below.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
