import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          <span className="text-4xl font-bold">Home</span>
        </Link>

        <nav className="flex gap-4">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
