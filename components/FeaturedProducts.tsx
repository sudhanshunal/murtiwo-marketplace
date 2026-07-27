const products = [
  { name: "Divine Ganesh Idol", type: "STL · 3DM", price: "$24", art: "from-violet-500/70 via-fuchsia-500/30 to-transparent" },
  { name: "Ornate Lotus Pendant", type: "STL · OBJ", price: "$18", art: "from-blue-500/70 via-cyan-500/20 to-transparent" },
  { name: "Celestial Halo Ring", type: "3DM · Rhino", price: "$16", art: "from-pink-500/70 via-purple-500/30 to-transparent" },
  { name: "Temple Filigree Bangle", type: "STL · 3DM", price: "$22", art: "from-indigo-500/70 via-rose-500/20 to-transparent" },
];

export function FeaturedProducts() {
  return (
    <section id="featured" className="border-y border-white/5 bg-slate-950/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-10 flex items-end justify-between"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-pink-300">Curated collection</p><h2 className="mt-2 font-display text-4xl">Featured designs.</h2></div><a href="#shop" className="text-sm font-semibold text-blue-300 hover:text-white">Shop all →</a></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product, i) => <article key={product.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101628] transition duration-300 hover:-translate-y-1 hover:border-white/25"><div className={`relative grid h-56 place-items-center overflow-hidden bg-gradient-to-br ${product.art}`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(7,11,23,.7))]" /><div className={`relative h-28 w-28 ${i === 2 ? "rounded-[50%] border-[14px]" : i === 1 ? "rotate-45 rounded-[25%_50%_25%_50%]" : "rounded-[45%_45%_28%_28%]"} border-pink-100/80 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,.25)]`} /><button aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-950/50 text-white backdrop-blur hover:text-pink-300">♡</button><span className="absolute bottom-3 left-3 rounded-md bg-black/30 px-2 py-1 text-[10px] font-semibold text-slate-200">3D PREVIEW</span></div><div className="p-5"><p className="text-xs text-pink-300">{product.type}</p><h3 className="mt-2 font-semibold">{product.name}</h3><div className="mt-4 flex items-center justify-between"><span className="font-semibold">{product.price}</span><button className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold transition hover:bg-white hover:text-slate-950">Add to cart</button></div></div></article>)}</div>
      </div>
    </section>
  );
}
