const categories = [
  ["◌", "Rings", "284 models"], ["◇", "Pendants", "196 models"], ["✧", "Earrings", "342 models"],
  ["◒", "Bangles", "127 models"], ["♜", "Murtis", "158 models"], ["⌇", "Necklaces", "210 models"],
];

export function Categories() {
  return (
    <section id="categories" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-pink-300">Explore by craft</p><h2 className="mt-2 font-display text-4xl">Find your next form.</h2></div><a href="#shop" className="hidden text-sm font-semibold text-blue-300 hover:text-white sm:block">View all categories →</a></div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(([icon, name, count], index) => <a href="#featured" key={name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:bg-white/[.07]"><div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full blur-2xl ${index % 2 ? "bg-rose/20" : "bg-electric/20"}`} /><span className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-slate-800/80 text-xl text-pink-200">{icon}</span><h3 className="relative mt-8 font-semibold">{name}</h3><p className="relative mt-1 text-xs text-slate-400">{count}</p></a>)}
      </div>
    </section>
  );
}
