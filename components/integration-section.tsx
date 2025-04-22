import Image from "next/image"
import { Button } from "@/components/ui/button"

export function IntegrationSection() {
  const integrations = Array(15)
    .fill(null)
    .map((_, i) => ({
      name: `Integration ${i + 1}`,
      icon: `/placeholder.svg?height=48&width=48`,
    }))

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Seamless Integration for Any Workflow</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you use Notion, Slack, or any other collaboration tool, Crop Studio seamlessly integrates with your
          existing workflow to enhance your screen sharing experience.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {integrations.map((integration, index) => (
            <Image
              key={index}
              src={integration.icon || "/placeholder.svg"}
              alt={integration.name}
              width={48}
              height={48}
              className="rounded-lg"
            />
          ))}
        </div>
        <div className="mt-12 flex gap-4 justify-center">
          <Button size="lg">Notes</Button>
          <Button variant="outline" size="lg">
            Download
          </Button>
        </div>
      </div>
    </section>
  )
}
