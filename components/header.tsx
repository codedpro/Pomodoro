import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="font-medium text-white">FocusTimer</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        <Button variant="secondary" className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90">
          Download
        </Button>
      </div>
    </header>
  )
}
