import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

export function PartnersSection() {
  const partners = [
    { name: "Microsoft", width: 120 },
    { name: "Bettermarks", width: 120 },
    { name: "Titanom", width: 120 },
    { name: "Shift Nexus", width: 120 },
  ]

  return (
    <section className="py-16">
      <Marquee pauseOnHover speed={30}>
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center w-48 h-16">
            <Image
              src={`/placeholder.svg?height=40&width=${partner.width}`}
              alt={partner.name}
              width={partner.width}
              height={40}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
