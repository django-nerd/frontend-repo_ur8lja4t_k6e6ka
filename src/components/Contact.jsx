import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    }catch(err){
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Talk to our team</h2>
          <p className="mt-3 text-white/70">Tell us about your target hashrate and timeline.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Full name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40"/>
            <input name="email" required type="email" placeholder="Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40"/>
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40"/>
          <input name="hashrate" placeholder="Target hashrate (e.g. 500 TH/s)" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40"/>
          <textarea name="message" rows={4} placeholder="Your goals and questions" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40"/>
          <button className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-black">Request Proposal</button>
          <p className="text-sm text-white/70">{status}</p>
        </form>
      </div>
    </section>
  )
}
