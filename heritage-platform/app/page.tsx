import Navbar from "./components/Navbar";

const categories = [
  {
    title: "Festivals",
    description: "Discover celebrations, rituals and stories passed through generations.",
    symbol: "🪔",
  },
  {
    title: "Folk Art",
    description: "Explore traditional art forms created by local communities.",
    symbol: "🎨",
  },
  {
    title: "Food",
    description: "Taste recipes and food traditions rooted in culture.",
    symbol: "🍲",
  },
  {
    title: "Historical Places",
    description: "Explore places shaped by centuries of history.",
    symbol: "🏛️",
  },
  {
    title: "Folk Music",
    description: "Listen to songs and musical traditions.",
    symbol: "🎵",
  },
  {
    title: "Stories",
    description: "Discover legends, memories and forgotten tales.",
    symbol: "📖",
  },
  {
    title: "Traditions",
    description: "Learn about customs that continue to live today.",
    symbol: "🌿",
  },
  {
    title: "Crafts",
    description: "Meet the makers behind traditional crafts.",
    symbol: "🧵",
  },
];

const featured = [
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

const experiences = [
  {
    title: "Learn Sohrai Art",
    location: "Hazaribagh, Jharkhand",
    type: "Art Workshop",
    symbol: "🎨",
  },
  {
    title: "Experience Chhath",
    location: "Bihar",
    type: "Cultural Experience",
    symbol: "☀️",
  },
  {
    title: "Discover Madhubani",
    location: "Madhubani, Bihar",
    type: "Artist Experience",
    symbol: "🖌️",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#241f1a]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-12 md:pb-32 md:pt-20">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e7c9a9]/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#c9d8c0]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8cfc3] bg-white/70 px-4 py-2 text-sm shadow-sm">
                <span className="text-[#9a5b32]">✦</span>
                <span>Discover the living heritage of India</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                Discover the
                <span className="block text-[#9a5b32]">
                  stories behind
                </span>
                our culture.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#6f675e] md:text-xl">
                Explore festivals, folk art, food, traditions,
                historical places and the stories that keep our
                heritage alive.
              </p>

              {/* SEARCH */}
              <div className="mt-9 max-w-2xl">
                <div className="flex items-center gap-3 rounded-2xl border border-[#d8cfc3] bg-white p-2 shadow-lg">
                  <span className="pl-3 text-xl">🔍</span>

                  <input
                    type="text"
                    placeholder="Search festivals, art, food, places..."
                    className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none md:text-base"
                  />

                  <button
                    type="button"
                    className="rounded-xl bg-[#241f1a] px-5 py-3 text-sm font-medium text-white"
                  >
                    Search
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs text-[#81776c]">
                    Explore:
                  </span>

                  {["Festivals", "Folk Art", "Food", "Traditions"].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        className="rounded-full border border-[#ddd4ca] bg-white/60 px-3 py-1.5 text-xs transition hover:border-[#b9784d]"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/explore"
                  className="rounded-full bg-[#241f1a] px-7 py-4 text-center font-medium text-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Heritage →
                </a>

                <a
                  href="/contribute"
                  className="rounded-full border border-[#cfc5b9] bg-white/60 px-7 py-4 text-center font-medium transition hover:bg-white"
                >
                  Share Your Story
                </a>
              </div>

              {/* STATS */}
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-[#ddd4ca] pt-7">
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

            {/* RIGHT IMAGE */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="overflow-hidden rounded-[2rem] bg-[#241f1a] p-3 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/hero-heritage.jpeg"
                    alt="Traditional Indian cultural heritage"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#241f1a]/95 via-[#241f1a]/20 to-transparent" />

                  <div className="absolute left-6 right-6 top-6 flex justify-between">
                    <span className="rounded-full bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur">
                      Virasat
                    </span>

                    <span className="rounded-full bg-black/30 px-3 py-2 text-xs text-white backdrop-blur">
                      ✦ Heritage
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Living culture
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                      Every tradition
                      <span className="block text-[#e7c9a9]">
                        carries a story.
                      </span>
                    </h2>

                    <div className="mt-6 border-t border-white/20 pt-5">
                      <p className="text-xs text-white/50">
                        Discover
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Bihar & Jharkhand
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-3 rounded-2xl border border-[#ded5ca] bg-white p-4 shadow-xl sm:-left-8">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b32]">
                  Today's discovery
                </p>

                <p className="mt-2 font-semibold">
                  Madhubani Art
                </p>

                <p className="mt-1 text-xs text-[#81776c]">
                  Madhubani, Bihar
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            Explore
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Discover culture your way.
              </h2>

              <p className="mt-4 max-w-2xl text-[#766d63]">
                Explore festivals, food, art, music, stories,
                traditions and historical places.
              </p>
            </div>

            <a
              href="/explore"
              className="font-medium underline underline-offset-4"
            >
              Explore everything →
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.title}
                href="/explore"
                className="group rounded-3xl border border-[#e4ddd5] bg-[#faf8f4] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">
                    {category.symbol}
                  </span>

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

      {/* FEATURED */}
      <section className="bg-[#f1ece4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            Featured heritage
          </p>

          <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">
            Start with a story from the region.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <a
                key={item.title}
                href="/explore"
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-64 items-center justify-center bg-[#d9c2a9] text-7xl transition group-hover:scale-105">
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
                    Discover story →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            Cultural experiences
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            Don't just read about heritage.
            <span className="block text-[#9a5b32]">
              Experience it.
            </span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experiences.map((experience) => (
              <a
                key={experience.title}
                href="/experiences"
                className="group overflow-hidden rounded-3xl border border-[#e4ddd5] bg-[#faf8f4] transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-52 items-center justify-center bg-[#d9c2a9] text-7xl">
                  {experience.symbol}
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9a5b32]">
                    {experience.type}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    {experience.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#766d63]">
                    📍 {experience.location}
                  </p>

                  <p className="mt-5 font-medium">
                    Learn more →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI GUIDE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 rounded-[2rem] bg-[#241f1a] p-8 text-white md:p-14 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#d9a77c]">
                AI Cultural Guide
              </p>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Curious about a tradition?
                <span className="block text-[#e7c9a9]">
                  Just ask.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Learn about festivals, art, food, historical places
                and cultural traditions through an intelligent
                cultural guide.
              </p>

              <a
                href="/ai-guide"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-[#241f1a]"
              >
                Meet the AI Guide →
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="rounded-2xl bg-white/10 p-4 text-sm text-white/80">
                Tell me about Sohrai painting and why it is important
                to Jharkhand's culture.
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-[#4d453e]">
                Sohrai is a traditional wall-art form associated with
                harvest, nature and community traditions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE VAULT */}
      <section className="bg-[#f1ece4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            CultureVault
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Knowledge worth preserving.
          </h2>

          <p className="mt-4 max-w-2xl text-[#766d63]">
            A digital archive for stories, recipes, songs,
            traditions and cultural knowledge.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🍲", "Traditional Recipes"],
              ["📖", "Oral Histories"],
              ["🎵", "Folk Songs"],
              ["🧵", "Craft Knowledge"],
            ].map(([icon, title]) => (
              <a
                key={title}
                href="/culture-vault"
                className="rounded-3xl bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{icon}</div>

                <h3 className="mt-7 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-5 font-medium">
                  Explore archive →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#241f1a] text-white lg:grid-cols-2">
            <div className="p-8 md:p-14">
              <p className="text-sm uppercase tracking-widest text-[#d9a77c]">
                Community voices
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Your story could become part of history.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Share a recipe, festival, local legend, photograph,
                song or tradition from your community.
              </p>

              <a
                href="/contribute"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-[#241f1a]"
              >
                Contribute to Virasat →
              </a>
            </div>

            <div className="flex min-h-[350px] items-center justify-center bg-[#9a5b32] p-10">
              <div className="text-center">
                <div className="text-8xl">📖</div>

                <p className="mt-8 text-2xl font-semibold">
                  Preserve. Share. Inspire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-widest text-[#9a5b32]">
            Our mission
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Discover. Experience. Preserve.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Discover", "Explore India's cultural heritage."],
              ["02", "Experience", "Connect with traditions and communities."],
              ["03", "Contribute", "Share stories, memories and knowledge."],
              ["04", "Preserve", "Keep culture alive for future generations."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-[#e4ddd5] bg-[#faf8f4] p-7 text-left"
              >
                <span className="text-sm font-bold text-[#9a5b32]">
                  {number}
                </span>

                <h3 className="mt-7 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-[#766d63]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 pt-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ded5ca] bg-[#faf7f1] px-8 py-16 text-center md:px-16">
          <p className="text-sm uppercase tracking-widest text-[#9a5b32]">
            Be part of the archive
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            What piece of our culture do you want the future to remember?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#766d63]">
            Explore what has already been preserved or contribute
            a story of your own.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/explore"
              className="rounded-full bg-[#241f1a] px-7 py-4 font-medium text-white"
            >
              Explore Heritage
            </a>

            <a
              href="/contribute"
              className="rounded-full border border-[#cfc5b9] bg-white px-7 py-4 font-medium"
            >
              Contribute a Story
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#ddd4ca] bg-[#f1ece4] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-[#766d63] md:flex-row">
          <div>
            <p className="font-bold text-[#241f1a]">
              Virasat
            </p>

            <p className="mt-1">
              Digital heritage platform for Bihar & Jharkhand.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="/explore">Explore</a>
            <a href="/experiences">Experiences</a>
            <a href="/culture-vault">CultureVault</a>
            <a href="/contribute">Contribute</a>
            <a href="/about">About</a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#ddd4ca] pt-6 text-xs text-[#81776c]">
          © 2026 Virasat. Preserving stories, traditions and knowledge.
        </div>
      </footer>
    </main>
  );
}