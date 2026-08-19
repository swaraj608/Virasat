"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const records = [
  {
    id: 1,
    type: "Recipe",
    title: "Thekua — The Taste of Chhath",
    region: "Bihar",
    contributor: "Community Archive",
    icon: "🍪",
    description:
      "A traditional sweet prepared during Chhath Puja, carrying memories of family, devotion and celebration.",
    tags: ["Food", "Chhath", "Bihar"],
  },
  {
    id: 2,
    type: "Oral History",
    title: "Stories from the River Ganga",
    region: "Bhagalpur, Bihar",
    contributor: "Local Memory Project",
    icon: "🌊",
    description:
      "Memories, stories and everyday traditions shaped by life along the Ganga.",
    tags: ["Stories", "Ganga", "Memory"],
  },
  {
    id: 3,
    type: "Folk Song",
    title: "Kajri — Songs of the Monsoon",
    region: "Bihar & Eastern Uttar Pradesh",
    contributor: "Folk Archive",
    icon: "🎵",
    description:
      "Seasonal folk songs traditionally associated with the arrival of monsoon.",
    tags: ["Music", "Monsoon", "Folk"],
  },
  {
    id: 4,
    type: "Craft",
    title: "Madhubani Painting Traditions",
    region: "Madhubani, Bihar",
    contributor: "Artist Community",
    icon: "🎨",
    description:
      "A visual tradition where mythology, nature and everyday life become intricate patterns.",
    tags: ["Art", "Madhubani", "Craft"],
  },
  {
    id: 5,
    type: "Tradition",
    title: "Sohrai Harvest Rituals",
    region: "Hazaribagh, Jharkhand",
    contributor: "Adivasi Knowledge Archive",
    icon: "🌿",
    description:
      "A living tradition connected with harvest, animals, nature and community life.",
    tags: ["Sohrai", "Harvest", "Jharkhand"],
  },
  {
    id: 6,
    type: "Oral History",
    title: "The Grandmother's Recipe Book",
    region: "Jharkhand",
    contributor: "Community Contributor",
    icon: "📖",
    description:
      "Family recipes preserved through generations, along with the stories behind them.",
    tags: ["Food", "Family", "Stories"],
  },
];

const filters = [
  "All",
  "Recipe",
  "Oral History",
  "Folk Song",
  "Craft",
  "Tradition",
];

const archiveStats = [
  ["128+", "Cultural records"],
  ["42", "Community voices"],
  ["18", "Traditions"],
  ["2", "States documented"],
];

export default function CultureVault() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState<number[]>([]);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesFilter =
        activeFilter === "All" || record.type === activeFilter;

      const searchableText = `
        ${record.title}
        ${record.region}
        ${record.description}
        ${record.contributor}
        ${record.tags.join(" ")}
      `.toLowerCase();

      const matchesSearch = searchableText.includes(
        search.toLowerCase()
      );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  const toggleSaved = (id: number) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#241f1a]">
      {/* HEADER */}
      <section className="border-b border-[#ded5ca] bg-[#f7f3ec]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#81776c]">
            <Link href="/" className="hover:text-[#9a5b32]">
              Home
            </Link>

            <span>/</span>

            <span className="text-[#9a5b32]">
              CultureVault
            </span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8cfc3] bg-white px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#9a5b32] shadow-sm">
                <span>✦</span>
                Digital Cultural Archive
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Knowledge that
                <span className="block text-[#9a5b32]">
                  should not disappear.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6f675e]">
                CultureVault preserves recipes, oral histories, folk
                songs, craft knowledge and traditions shared by
                communities.
              </p>
            </div>

            {/* ARCHIVE VISUAL */}
            <div className="relative">
              <div className="rounded-[2rem] border border-[#d9d0c5] bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#eee7df] pb-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
                      Archive index
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      VIRASAT / 2026
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#241f1a] text-xl text-white">
                    V
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {archiveStats.map(([number, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-[#f7f3ec] p-4"
                    >
                      <p className="text-2xl font-bold">
                        {number}
                      </p>

                      <p className="mt-1 text-xs text-[#81776c]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#241f1a] px-4 py-3 text-white">
                  <span className="text-lg">◉</span>

                  <div>
                    <p className="text-xs font-medium">
                      Archive status
                    </p>

                    <p className="text-[11px] text-white/50">
                      Continuously growing through community contributions
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-[#ded5ca] bg-white px-4 py-3 text-xs shadow-lg sm:block">
                <span className="text-[#9a5b32]">●</span>{" "}
                Living archive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="sticky top-[73px] z-40 border-b border-[#ded5ca] bg-[#f7f3ec]/95 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-1 items-center rounded-2xl border border-[#d8cfc3] bg-white px-4 shadow-sm">
              <span className="mr-3 text-xl">⌕</span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search recipes, songs, traditions, places..."
                className="w-full bg-transparent py-3.5 text-sm outline-none"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-sm text-[#81776c] hover:text-[#241f1a]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-medium transition ${
                    activeFilter === filter
                      ? "bg-[#241f1a] text-white"
                      : "border border-[#d8cfc3] bg-white text-[#625a51] hover:border-[#9a5b32]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
                Explore the archive
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Cultural records
              </h2>
            </div>

            <p className="text-sm text-[#81776c]">
              {filteredRecords.length} records found
            </p>
          </div>

          {filteredRecords.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-[#cfc5b9] bg-white p-16 text-center">
              <div className="text-5xl">🔎</div>

              <h3 className="mt-5 text-2xl font-bold">
                Nothing found
              </h3>

              <p className="mt-2 text-[#766d63]">
                Try another search term or archive category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="mt-6 rounded-full bg-[#241f1a] px-6 py-3 text-sm font-medium text-white"
              >
                Reset archive
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredRecords.map((record) => (
                <article
                  key={record.id}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-[#e2d9ce] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* RECORD TOP */}
                  <div className="border-b border-[#eee7df] bg-[#faf8f4] p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                        {record.icon}
                      </div>

                      <button
                        type="button"
                        aria-label="Save record"
                        onClick={() =>
                          toggleSaved(record.id)
                        }
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                          saved.includes(record.id)
                            ? "border-[#9a5b32] bg-[#9a5b32] text-white"
                            : "border-[#ddd4ca] bg-white text-[#81776c] hover:border-[#9a5b32]"
                        }`}
                      >
                        {saved.includes(record.id)
                          ? "♥"
                          : "♡"}
                      </button>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      <span className="rounded-full bg-[#e9dfd3] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#9a5b32]">
                        {record.type}
                      </span>

                      <span className="text-xs text-[#81776c]">
                        {record.region}
                      </span>
                    </div>
                  </div>

                  {/* RECORD BODY */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-tight transition group-hover:text-[#9a5b32]">
                      {record.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#766d63]">
                      {record.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {record.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#e4ddd5] px-3 py-1 text-[10px] text-[#81776c]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#eee7df] pt-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-[#9a5b32]">
                          Preserved by
                        </p>

                        <p className="mt-1 text-xs font-medium">
                          {record.contributor}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="text-sm font-semibold transition group-hover:translate-x-1"
                      >
                        Open →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SAVED */}
      {saved.length > 0 && (
        <section className="border-y border-[#ded5ca] bg-[#241f1a] px-6 py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d9a77c]">
                Your collection
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {saved.length} saved{" "}
                {saved.length === 1 ? "record" : "records"}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setSaved([])}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:bg-white hover:text-[#241f1a]"
            >
              Clear saved records
            </button>
          </div>
        </section>
      )}

      {/* KNOWLEDGE FLOW */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
                How CultureVault works
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                From memory
                <span className="block text-[#9a5b32]">
                  to archive.
                </span>
              </h2>

              <p className="mt-5 max-w-md leading-7 text-[#766d63]">
                Culture is not just something found in museums.
                It lives in kitchens, songs, workshops, festivals
                and family memories.
              </p>
            </div>

            <div className="space-y-4">
              {[
                [
                  "01",
                  "Someone remembers",
                  "A community member shares a story, recipe, song or tradition.",
                ],
                [
                  "02",
                  "Virasat preserves",
                  "The knowledge is documented and organised inside the archive.",
                ],
                [
                  "03",
                  "Everyone explores",
                  "Future generations can discover and learn from it.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="group flex gap-5 rounded-3xl border border-[#e4ddd5] bg-[#faf8f4] p-6 transition hover:bg-white hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#241f1a] text-xs font-bold text-white">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#766d63]">
                      {text}
                    </p>
                  </div>

                  <span className="ml-auto hidden text-xl text-[#9a5b32] transition group-hover:translate-x-1 sm:block">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#9a5b32] text-white">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="p-8 md:p-14">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  The archive needs you
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
                  What do you know that should be remembered?
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                  Share a recipe, local story, traditional practice,
                  song or craft technique from your community.
                </p>

                <Link
                  href="/contribute"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-[#241f1a] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Add to CultureVault →
                </Link>
              </div>

              <div className="hidden px-14 lg:block">
                <div className="text-[150px] leading-none opacity-20">
                  ✦
                </div>
              </div>
            </div>
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
            <Link href="/explore">Explore</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/culture-vault">CultureVault</Link>
            <Link href="/contribute">Contribute</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#ddd4ca] pt-6 text-xs text-[#81776c]">
          © 2026 Virasat. Preserving stories, traditions and knowledge.
        </div>
      </footer>
    </main>
  );
}