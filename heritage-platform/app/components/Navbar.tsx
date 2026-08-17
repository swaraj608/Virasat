import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[#e2d9ce] bg-[#f8f5ef]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#241f1a] text-lg font-bold text-white transition duration-300 group-hover:rotate-3">
              M
            </div>

            <div>
              <p className="text-lg font-bold leading-none tracking-tight">
                MAATI
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#81776c]">
                Bihar & Jharkhand
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#5f574f] transition hover:text-[#241f1a]"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-sm font-medium text-[#5f574f] transition hover:text-[#241f1a]"
          >
            Explore
          </Link>

          <Link
            href="/contribute"
            className="text-sm font-medium text-[#5f574f] transition hover:text-[#241f1a]"
          >
            Contribute
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[#5f574f] transition hover:text-[#241f1a]"
          >
            About
          </Link>

          <Link
            href="/contribute"
            className="rounded-full bg-[#241f1a] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Share a Story
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8cfc3] bg-white text-[#241f1a] md:hidden"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}