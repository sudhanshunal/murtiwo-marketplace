const links = ["Home", "Shop", "Categories", "New Arrivals", "Free Files"];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 mx-auto max-w-7xl px-4 pt-5 sm:px-6">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 backdrop-blur-xl sm:px-5">
        <a href="#home" className="font-display text-2xl tracking-tight">Murt<span className="text-rose">i</span>vo</a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="transition hover:text-white">{link}</a>)}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full text-slate-300 transition hover:bg-white/10">⌕</button>
          <button aria-label="Shopping cart" className="grid h-9 w-9 place-items-center rounded-full text-slate-300 transition hover:bg-white/10">⌑</button>
          <a href="#sign-in" className="hidden rounded-full border border-white/15 px-4 py-2 font-medium transition hover:border-rose/60 hover:bg-white/5 sm:block">Sign in</a>
        </div>
      </nav>
    </header>
  );
}
