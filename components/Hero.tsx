export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[760px] overflow-hidden pt-36">
      <div className="grid-pattern absolute inset-0 -z-20 opacity-50" />
      <div className="hero-orb absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-electric/30" />
      <div className="hero-orb absolute right-0 top-12 -z-10 h-96 w-96 rounded-full bg-rose/25" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 inline-flex rounded-full border border-rose/30 bg-rose/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-pink-200">The designer&apos;s digital atelier</p>
          <h1 className="font-display text-5xl leading-[.96] sm:text-6xl lg:text-7xl">Jewelry designs, <span className="bg-gradient-to-r from-electric via-violet-300 to-rose bg-clip-text text-transparent">made brilliant.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">Discover polished, production-ready STL, 3DM, and Rhino files for jewelry designers, manufacturers, and makers.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#featured" className="rounded-full bg-gradient-to-r from-electric to-rose px-6 py-3 font-semibold shadow-glow transition hover:scale-[1.03]">Browse collection <span aria-hidden>→</span></a>
            <a href="#categories" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10">Explore categories</a>
          </div>
          <div className="mt-12 flex gap-8 text-sm text-slate-400"><span><b className="block text-xl text-white">2,500+</b>CAD models</span><span><b className="block text-xl text-white">Instant</b>download</span><span><b className="block text-xl text-white">4.9/5</b>designer rating</span></div>
        </div>
        <MonitorScene />
      </div>
    </section>
  );
}

function MonitorScene() {
  return (
    <div className="relative mx-auto h-[410px] w-full max-w-[580px] sm:h-[490px]">
      <div className="absolute right-8 top-7 h-60 w-60 rounded-full bg-rose/30 blur-3xl" />
      <div className="absolute bottom-8 left-2 h-56 w-56 rounded-full bg-electric/30 blur-3xl" />
      <div className="absolute inset-x-6 top-12 rounded-[28px] border border-white/20 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl sm:inset-x-10">
        <div className="rounded-[18px] border border-white/10 bg-[#11182b] p-3">
          <div className="mb-3 flex gap-1.5"><i className="h-2 w-2 rounded-full bg-rose" /><i className="h-2 w-2 rounded-full bg-yellow-300" /><i className="h-2 w-2 rounded-full bg-emerald-300" /></div>
          <div className="relative grid h-52 place-items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_center,rgba(90,124,255,.34),transparent_45%),linear-gradient(135deg,#17233d,#090d19)] sm:h-64">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative h-36 w-28 rounded-[45%_45%_35%_35%] border-2 border-pink-200/70 bg-gradient-to-b from-pink-100/20 via-electric/50 to-rose/30 shadow-[0_0_45px_rgba(240,90,173,.55)] sm:h-44 sm:w-36"><div className="absolute left-1/2 top-4 h-16 w-16 -translate-x-1/2 rounded-full border border-white/60 bg-white/10" /><div className="absolute bottom-4 left-1/2 h-7 w-20 -translate-x-1/2 rounded-full border border-white/40" /></div>
            <span className="absolute bottom-3 left-3 rounded bg-black/30 px-2 py-1 font-mono text-[9px] text-slate-300">MURTI_001.3DM</span>
          </div>
        </div>
        <div className="mx-auto h-7 w-32 bg-gradient-to-b from-slate-400 to-slate-700" /><div className="mx-auto h-3 w-52 rounded-full bg-slate-600" />
      </div>
      <div className="float absolute bottom-4 right-0 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl"><span className="block text-xs text-slate-300">File ready</span><b className="text-sm text-white">STL · 3DM · OBJ</b></div>
      <div className="absolute bottom-9 left-0 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs text-blue-100 backdrop-blur-xl">✦ Crafted for production</div>
    </div>
  );
}
