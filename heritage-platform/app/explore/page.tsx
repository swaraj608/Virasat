"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeritageMap from "../components/HeritageMap";

const heritageItems = [
  {
    title: "Chhath Puja",
    slug: "chhath-puja",
    category: "Festival",
    location: "Bihar",
    description:
      "A deeply rooted festival dedicated to the Sun, celebrated with devotion, fasting and rituals along rivers and sacred water bodies.",
  },
  {
    title: "Madhubani Painting",
    slug: "madhubani-painting",
    category: "Folk Art",
    location: "Madhubani, Bihar",
    description:
      "A traditional painting style known for its distinctive patterns, vivid storytelling and connection to local culture.",
  },
  {
    title: "Nalanda Mahavihara",
    slug: "nalanda-mahavihara",
    category: "Historical Place",
    location: "Nalanda, Bihar",
    description:
      "An ancient centre of learning that became one of the most important intellectual institutions of the ancient world.",
  },
  {
    title: "Sohrai Art",
    slug: "sohrai-art",
    category: "Folk Art",
    location: "Jharkhand",
    description:
      "A traditional wall-art practice associated with harvest celebrations and the artistic traditions of Jharkhand.",
  },
  {
    title: "Sarhul",
    slug: "sarhul",
    category: "Festival",
    location: "Jharkhand",
    description:
      "A spring festival celebrating nature, community and the relationship between people and the sacred sal tree.",
  },
  {
    title: "Deoghar Temple Traditions",
    slug: "deoghar-temple-traditions",
    category: "Tradition",
    location: "Deoghar, Jharkhand",
    description:
      "A living cultural tradition surrounding one of the region's most important pilgrimage centres.",
  },
];

const categories = [
  "All",
  "Historical Place",
  "Festival",
  "Tradition",
  "Folk Art",
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = heritageItems.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#241f1a]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a5b32]">
              Explore Virasat
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Discover the heritage
              <span className="block text-[#9a5b32]">
                of Bihar & Jharkhand.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f675e]">
              Explore historical places, festivals, traditions and folk
              art that tell the stories of Bihar and Jharkhand.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-10 max-w-3xl">
            <div className="flex items-center rounded-2xl border border-[#d8cfc3] bg-white px-5 py-4 shadow-sm transition focus-within:border-[#241f1a]">
              <span className="mr-3 text-xl">⌕</span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search heritage, places, festivals..."
                className="w-full bg-transparent outline-none placeholder:text-[#a29a91]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REGION SECTION */}
      <section className="border-y border-[#e1d8ce] bg-white px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#81776c]">
            Two regions. One living heritage.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* BIHAR */}
            <div className="rounded-[2rem] bg-[#f1e4d6] p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9a5b32]">
                    Region 01
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    Bihar
                  </h2>
                </div>

                <span className="text-5xl">☀️</span>
              </div>

              <p className="mt-6 max-w-md leading-7 text-[#6f675e]">
                Ancient learning, festivals, folk art, food and
                traditions shaped across generations.
              </p>
            </div>

            {/* JHARKHAND */}
            <div className="rounded-[2rem] bg-[#e1e8dc] p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#526347]">
                    Region 02
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    Jharkhand
                  </h2>
                </div>

                <span className="text-5xl">🌿</span>
              </div>

              <p className="mt-6 max-w-md leading-7 text-[#5f6959]">
                Indigenous traditions, folk art, festivals, dance
                and cultural practices deeply connected with nature.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* HERITAGE MAP */}
<section className="px-6 py-16">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a5b32]">
        Explore by place
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Discover heritage across Bihar & Jharkhand
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-[#6f675e]">
        Explore the region geographically and discover places connected
        to the cultural stories of Virasat.
      </p>
    </div>

    <div className="mt-8">
      <HeritageMap />
    </div>
  </div>
</section>


      {/* CATEGORIES */}
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a5b32]">
            Browse by category
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What are you curious about?
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    active
                      ? "border-[#241f1a] bg-[#241f1a] text-white"
                      : "border-[#d7cec3] bg-white hover:border-[#241f1a]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-[#81776c]">
            Showing {filteredItems.length} heritage{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </p>

          {filteredItems.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.slug}
                  className="group rounded-[1.5rem] border border-[#e0d8cf] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#f1e4d6] px-3 py-1 text-xs font-medium text-[#7d4b2b]">
                      {item.category}
                    </span>

                    <span className="text-xs text-[#81776c]">
                      {item.location}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-[#6f675e]">
                    {item.description}
                  </p>

                  {/* DETAIL PAGE LINK */}
                  <Link
                    href={`/explore/${item.slug}`}
                    className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 transition group-hover:opacity-60"
                  >
                    Discover →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-[#cfc5ba] bg-white p-12 text-center">
              <div className="text-5xl">🔎</div>

              <h2 className="mt-5 text-xl font-semibold">
                No heritage found
              </h2>

              <p className="mt-2 text-[#6f675e]">
                Try another search term or choose a different
                category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="mt-6 rounded-full bg-[#241f1a] px-6 py-3 text-sm font-medium text-white"
              >
                Reset search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CONTRIBUTION CTA */}
      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#241f1a] px-8 py-14 text-center text-white md:px-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d9a77c]">
              Keep the heritage alive
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Know a story that belongs here?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/60">
              Share a memory, tradition, festival, place or story
              from your community and help grow Virasat.
            </p>

            <Link
              href="/contribute"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-[#241f1a] transition hover:-translate-y-1"
            >
              Contribute Your Story →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}