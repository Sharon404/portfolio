import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/design", label: "Design Work" },
  { href: "/code", label: "Code Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-surface/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Creative Portfolio
        </Link>
        <nav aria-label="Primary" className="-mx-1 overflow-x-auto pb-1">
          <ul className="flex min-w-max gap-2 px-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-black/10 bg-white px-3 py-2 text-foreground transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
