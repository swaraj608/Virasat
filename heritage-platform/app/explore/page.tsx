"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const heritageItems = [
  {
    title: "Chhath Puja",
    category: "Festival",
    location: "Bihar",
    description:
      "A deeply rooted festival dedicated to the Sun, celebrated with devotion, fasting and rituals along rivers and sacred water bodies.",
  },
  {
    title: "Madhubani Painting",
    category: "Folk Art",
    location: "Madhubani, Bihar",
    description:
      "A traditional painting style known for its distinctive patterns, vivid storytelling and connection to local culture.",
  },
  {
    title: "Nalanda Mahavihara",
    category: "Historical Place",
    location: "Nalanda, Bihar",
    description:
      "An ancient centre of learning that became one of the most important intellectual institutions of the ancient world.",
  },
  {
    title: "Sohrai Art",
    category: "Folk Art",
    location: "Jharkhand",
    description:
      "A traditional wall-art practice associated with harvest celebrations and the artistic traditions of Jharkhand.",
  },
  {
    title: "Sarhul",
    category: "Festival",
    location: "Jharkhand",
    description:
      "A spring festival celebrating nature, community and the relationship between people and the sacred sal tree.",
  },
  {
    title: "Deoghar Temple Traditions",
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
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest">
              Explore
            </p>

            <h1 className="mt-3 text-4xl font-bold md:text-6xl">
              Discover Bihar & Jharkhand
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore historical places, festivals, traditions and folk
              art that tell the story of Bihar and Jharkhand.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search heritage, places, festivals..."
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <p className="mt-10 text-sm text-gray-500">
            Showing {filteredItems.length} heritage{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </p>

          {/* Heritage Grid */}
          {filteredItems.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      {item.category}
                    </span>

                    <span className="text-xs text-gray-500">
                      {item.location}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <button className="mt-6 text-sm font-semibold underline underline-offset-4 transition group-hover:opacity-60">
                    Discover →
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-gray-300 p-12 text-center">
              <h2 className="text-xl font-semibold">
                No heritage found
              </h2>

              <p className="mt-2 text-gray-600">
                Try another search term or choose a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}