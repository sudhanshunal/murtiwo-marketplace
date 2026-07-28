import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <Navbar />
      <Hero />
      <Categories />
      <section id="shop"><FeaturedProducts /></section>
      <section id="new-arrivals" className="border-b border-white/5 bg-slate-950/50 py-16"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[.18em] text-pink-300">New arrivals</p><div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="font-display text-4xl">Fresh files, ready for your next piece.</h2><p className="mt-3 max-w-2xl text-slate-300">New jewellery CAD models are added to the marketplace regularly.</p></div><a href="#shop" className="w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-rose/70 hover:bg-white/5">Browse new files</a></div></div></section>
      <section id="free-files" className="border-b border-white/5 bg-[#101628] py-16"><div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-pink-300">Free files</p><h2 className="mt-3 font-display text-4xl">Start making with free samples.</h2><p className="mt-4 max-w-xl leading-7 text-slate-300">Create a customer account to get notified when complimentary STL and 3DM sample files are released.</p></div><a href="#sign-in" className="w-fit rounded-full bg-rose px-6 py-3 font-semibold text-slate-950 transition hover:bg-rose/90">Create free account</a></div></section>
      <section id="sign-in" className="bg-slate-950/60 py-20"><div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-pink-300">Customer account</p><h2 className="mt-3 font-display text-4xl">Sign in to your collection.</h2><p className="mt-4 max-w-md leading-7 text-slate-300">Save favourites, view purchased files, and receive new-release updates from Murtivo.</p></div><div className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-8"><h3 className="text-2xl font-semibold">Customer sign in</h3><div className="mt-6 grid gap-4"><label className="grid gap-2 text-sm text-slate-300">Email address<input type="email" placeholder="you@example.com" className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-rose" /></label><label className="grid gap-2 text-sm text-slate-300">Password<input type="password" placeholder="Enter your password" className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-rose" /></label><button type="button" className="mt-2 rounded-xl bg-rose px-5 py-3 font-semibold text-slate-950 transition hover:bg-rose/90">Sign in</button></div><p className="mt-4 text-xs leading-5 text-slate-400">Account login will be connected when customer authentication is enabled.</p></div></div></section>
      <Footer />
    </main>
  );
}
