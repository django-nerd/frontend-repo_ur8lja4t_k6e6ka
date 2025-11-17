import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Fully managed bitcoin mining & hosting
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Predictable ROI from Institutional-Grade Mining
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Deploy hashrate in our secure facilities, lock in competitive power, and scale with transparent economics.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#plans" className="pointer-events-auto rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-400/20 hover:opacity-95">
            View Hosting Plans
          </a>
          <a href="#contact" className="pointer-events-auto rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
