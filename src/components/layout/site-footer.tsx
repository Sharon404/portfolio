import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-surface-strong/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-text-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Creative Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
