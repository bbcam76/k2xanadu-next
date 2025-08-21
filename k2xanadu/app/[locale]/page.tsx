import BookingCTA from '@/components/BookingCTA'

export default function Home() {
  return (
    <div className="grid gap-8">
      <section className="rounded-2xl p-8 shadow-sm ring-1 ring-black/5">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Private Pool Villas in Pattaya — Made for Nordic Winter-Sun Escapes
        </h1>
        <p className="mt-4 text-lg">
          Spacious villas, private pools, and effortless service. Book direct for perks you won’t find on OTAs.
        </p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm list-disc pl-5">
          <li>Private pool • 10–12 mins to Jomtien/Attractions</li>
          <li>Airport transfer add-on • Flexible cancellation</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <BookingCTA />
          <a className="inline-flex items-center rounded-2xl border px-5 py-3 text-base font-medium shadow-sm hover:shadow transition" href="./dashboard">Arrivals Dashboard</a>
        </div>
      </section>
    </div>
  )
}
