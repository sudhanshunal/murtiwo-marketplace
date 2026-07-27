export function Footer() {
  return <footer id="contact" className="mx-auto max-w-7xl px-6 py-14 lg:px-8"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]"><div><a href="#home" className="font-display text-3xl">Murt<span className="text-rose">i</span>vo</a><p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">A refined marketplace for jewelry makers who turn ideas into heirlooms.</p></div><FooterColumn heading="Marketplace" items={["Shop designs", "New arrivals", "Free files"]} /><FooterColumn heading="Support" items={["Contact us", "File guide", "Licensing"]} /><FooterColumn heading="Follow" items={["Instagram", "Pinterest", "YouTube"]} /></div><div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:justify-between"><span>© 2026 Murtivo. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div></footer>;
}

function FooterColumn({ heading, items }: { heading: string; items: string[] }) {
  return <div><h3 className="font-semibold text-white">{heading}</h3><ul className="mt-4 space-y-2 text-sm text-slate-400">{items.map((item) => <li key={item}><a href="#" className="hover:text-pink-200">{item}</a></li>)}</ul></div>;
}
