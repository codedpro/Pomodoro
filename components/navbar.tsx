import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
            <span className="font-semibold">Magic UI</span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">Beta</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Components
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Templates
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Showcase
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex gap-2">
            <Github className="h-4 w-4" />
            <span>Star on GitHub</span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium">12,739</span>
          </Button>
          <Button variant="outline" size="icon" className="sm:hidden">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
