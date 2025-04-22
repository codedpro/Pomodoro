export function ShowcaseSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Showcase</h2>
          <p className="mt-4 text-lg text-gray-600">Companies choose Magic UI to build their landing pages.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-100" />
          ))}
        </div>
      </div>
    </section>
  )
}
