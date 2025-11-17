export default function WhyMining(){
  const items = [
    {
      title: "Power Advantage",
      desc: "Access sub-$0.06/kWh power with long-term contracts at our North American sites.",
    },
    {
      title: "Operational Uptime",
      desc: "Redundant networking, active monitoring and on-site technicians keep your fleet hashing.",
    },
    {
      title: "Transparent Economics",
      desc: "Clear fees, real-time dashboards and monthly statements to track ROI with confidence.",
    },
  ];

  return (
    <section id="why" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why mine with us</h2>
          <p className="mt-3 text-white/70">Institutional discipline, delivered to individual and fund investors.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
