export default function Plans(){
  const plans = [
    {
      name: "Starter S19",
      price: "$0.075/kWh",
      details: ["S19j Pro 100-110 TH/s", "Remote monitoring", "Ticket support"],
      cta: "Reserve Slot",
    },
    {
      name: "Pro S21",
      price: "$0.065/kWh",
      details: ["Antminer S21 200 TH/s", "Priority support", "Batch procurement"],
      featured: true,
      cta: "Scale Up",
    },
    {
      name: "Enterprise POD",
      price: "Custom",
      details: ["Megawatt-scale", "Dedicated networking", "Custom SLA"],
      cta: "Talk to Sales",
    },
  ];

  return (
    <section id="plans" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hosting Plans</h2>
          <p className="mt-3 text-white/70">Choose a path to predictable ROI with all-in managed hosting.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p)=> (
            <div key={p.name} className={`rounded-2xl border ${p.featured ? 'border-emerald-500/50 shadow-[0_0_40px_-10px_rgba(16,185,129,.4)]' : 'border-white/10'} bg-gradient-to-b from-white/5 to-transparent p-6` }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-sm text-white/70">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.details.map((d)=> <li key={d}>• {d}</li>)}
              </ul>
              <a href="#contact" className={`mt-6 inline-block rounded-xl px-4 py-2 text-sm font-semibold ${p.featured ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black' : 'border border-white/15 text-white hover:bg-white/10'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
