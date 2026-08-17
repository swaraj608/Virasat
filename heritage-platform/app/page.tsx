import Navbar from "./components/Navbar";

const featuredHeritage = [
  {
    title: "Chhath Puja",
    location: "Bihar",
    category: "Festival",
    symbol: "☀️",
  },
  {
    title: "Madhubani Art",
    location: "Madhubani, Bihar",
    category: "Folk Art",
    symbol: "🎨",
  },
  {
    title: "Sohrai Art",
    location: "Jharkhand",
    category: "Tradition",
    symbol: "🌿",
  },
];

const exploreCategories = [
  {
    title: "Festivals",
    description: "Discover celebrations, rituals and stories.",
    symbol: "🪔",
  },
  {
    title: "Food",
    description: "Taste the traditions passed through generations.",
    symbol: "🍲",
  },
  {
    title: "Folk Art",
    description: "Explore art forms born from local communities.",
    symbol: "🎨",
  },
  {
    title: "Historical Places",
    description: "Walk through places shaped by centuries of history.",
    symbol: "🏛️",
  },
  {
    title: "Stories",
    description: "Listen to legends, memories and forgotten tales.",
    symbol: "📖",
  },
  {
    title: "Traditions",
    description: "Discover customs that continue to live today.",
    symbol: "🌿",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#241f1a]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-12 md:pb-32 md:pt-20">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#e7c9a9] opacity-40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#c9d8c0] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8cfc3] bg-white/70 px-4 py-2 text-sm">
                <span>✦</span>
                <span>Digital Heritage of Bihar & Jharkhand</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Stories that
                <span className="block text-[#9a5b32]">
                  should never
                </span>
                be forgotten.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#6f675e] md:text-xl">
                Explore the living heritage of Bihar and Jharkhand —
                from ancient places and festivals to folk art, food,
                traditions and the stories passed down through generations.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/explore"
                  className="rounded-full bg-[#241f1a] px-7 py-4 text-center font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Heritage →
                </a>

                <a
                  href="/contribute"
                  className="rounded-full border border-[#cfc5b9] bg-white/60 px-7 py-4 text-center font-medium transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Share Your Story
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-[#ddd4ca] pt-8">
                <div>
                  <p className="text-2xl font-bold">100+</p>
                  <p className="mt-1 text-sm text-[#81776c]">
                    Heritage stories
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">30+</p>
                  <p className="mt-1 text-sm text-[#81776c]">
                    Traditions
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="mt-1 text-sm text-[#81776c]">
                    States
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-[#b9784d] p-3 shadow-2xl">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/30 bg-[#a9653d] p-7 text-white">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-8 top-8 h-32 w-32 rounded-full border-[3px] border-white" />
                    <div className="absolute right-8 top-24 h-20 w-20 rotate-45 border-[3px] border-white" />
                    <div className="absolute bottom-24 left-12 h-24 w-24 rotate-45 border-[3px] border-white" />
                    <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full border-[3px] border-white" />
                  </div>

                  <div className="relative">
                    <p className="text-sm uppercase tracking-[0.25em] opacity-80">
                      VIRASAT
                    </p>

                    <p className="mt-4 max-w-xs text-3xl font-semibold leading-tight md:text-4xl">
                      Every tradition carries a story.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="mb-6 text-7xl">🌾</div>

                    <div className="border-t border-white/30 pt-5">
                      <p className="text-sm opacity-80">
                        Bihar & Jharkhand
                      </p>

                      <p className="mt-1 text-lg font-medium">
                        A living cultural archive
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#ded5ca] bg-white p-5 shadow-xl md:-left-10">
                <p className="text-xs uppercase tracking-widest text-[#8a8075]">
                  Today&apos;s discovery
                </p>

                <p className="mt-2 font-semibold">
                  Madhubani Painting
                </p>

                <p className="mt-1 text-sm text-[#81776c]">
                  Madhubani, Bihar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
                Begin your journey
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                What do you want to discover?
              </h2>
            </div>

            <a
              href="/explore"
              className="font-medium underline underline-offset-4"
            >
              Explore everything →
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exploreCategories.map((category) => (
              <a
                key={category.title}
                href="/explore"
                className="group rounded-3xl border border-[#e4ddd5] bg-[#faf8f4] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cdbca9] hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{category.symbol}</span>

                  <span className="text-xl opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 leading-7 text-[#766d63]">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HERITAGE */}
      <section className="bg-[#f1ece4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            Featured heritage
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              Start with a story from the region.
            </h2>

            <a
              href="/explore"
              className="font-medium underline underline-offset-4"
            >
              View all heritage →
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredHeritage.map((item) => (
              <a
                key={item.title}
                href="/explore"
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-64 items-center justify-center bg-[#d9c2a9] text-7xl transition duration-500 group-hover:scale-105">
                  {item.symbol}
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#9a5b32]">
                      {item.category}
                    </span>

                    <span className="text-xs text-[#82786d]">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 font-medium">
                    Discover story{" "}
                    <span className="transition group-hover:ml-2">
                      →
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY STORY */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#241f1a] text-white lg:grid-cols-2">
            <div className="p-8 md:p-14">
              <p className="text-sm uppercase tracking-widest text-[#d9a77c]">
                Community voices
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                The most important stories are often the ones passed
                from person to person.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                Your grandmother&apos;s recipe. A festival your village
                celebrates. A local legend nobody has written down.
                These are pieces of heritage worth preserving.
              </p>

              <a
                href="/contribute"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-[#241f1a] transition hover:-translate-y-1"
              >
                Tell your story →
              </a>
            </div>

            <div className="flex min-h-[350px] items-center justify-center bg-[#9a5b32] p-10">
              <div className="max-w-sm text-center">
                <div className="text-8xl">📖</div>

                <p className="mt-8 text-2xl font-semibold">
                  “A culture stays alive when its stories continue to
                  be told.”
                </p>

                <p className="mt-4 text-white/60">
                  — The idea behind Virasat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ded5ca] bg-[#faf7f1] px-8 py-16 text-center md:px-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            Be part of the archive
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            What piece of Bihar or Jharkhand do you want the future to
            remember?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#766d63]">
            Explore what has already been preserved, or contribute a
            story of your own.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/explore"
              className="rounded-full bg-[#241f1a] px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Heritage
            </a>

            <a
              href="/contribute"
              className="rounded-full border border-[#cfc5b9] bg-white px-7 py-4 font-medium transition hover:-translate-y-1"
            >
              Contribute a Story
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#ddd4ca] bg-[#f1ece4] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#766d63] md:flex-row">
          <p>
            © 2026 Virasat — Digital Heritage of Bihar & Jharkhand
          </p>

          <div className="flex gap-6">
            <a href="/explore" className="hover:text-[#241f1a]">
              Explore
            </a>

            <a href="/contribute" className="hover:text-[#241f1a]">
              Contribute
            </a>

            <a href="/about" className="hover:text-[#241f1a]">
              About
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}