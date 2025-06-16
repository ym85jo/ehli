import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 border-b">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
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
