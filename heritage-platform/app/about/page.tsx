"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const heritageForms = [
  {
    icon: "🏛️",
    title: "Places",
    text: "Ancient sites, sacred spaces and landmarks that carry memories of generations.",
  },
  {
    icon: "🎨",
    title: "Art",
    text: "Visual traditions where communities turn stories, beliefs and nature into art.",
  },
  {
    icon: "🎉",
    title: "Festivals",
    text: "Celebrations that bring people together through rituals, music, food and joy.",
  },
  {
    icon: "🌿",
    title: "Traditions",
    text: "Knowledge and practices passed from one generation to another.",
  },
  {
    icon: "👥",
    title: "People",
    text: "The communities, artists, families and storytellers who keep heritage alive.",
  },
  {
    icon: "📖",
    title: "Stories",
    text: "Memories and experiences that may never appear in a history book.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    text: "Find places, festivals, art and traditions from Bihar and Jharkhand.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Go beyond the name and learn the story, meaning and people behind each heritage.",
  },
  {
    number: "03",
    title: "Share",
    text: "Contribute your own memories and stories so they can become part of a growing cultural archive.",
  },
];

export default function AboutPage() {
  const [activeForm, setActiveForm] = useState(0);

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#241f1a]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[60px] border-[#e8ded2]" />

        <div className="pointer-events-none absolute -bottom-40 left-[-120px] h-96 w-96 rounded-full border-[50px] border-[#e4eadf]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
            {/* Hero text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a5b32]">
                About Virasat
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Every place
                <span className="block text-[#9a5b32]">
                  has a story.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f675e] md:text-xl">
                Virasat is a digital space created to discover,
                understand and preserve the cultural heritage of
                Bihar and Jharkhand.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/explore"
                  className="rounded-full bg-[#241f1a] px-7 py-3.5 font-medium text-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Heritage →
                </Link>

                <Link
                  href="/contribute"
                  className="rounded-full border border-[#d5cbc0] bg-white px-7 py-3.5 font-medium transition hover:-translate-y-1 hover:shadow-md"
                >
                  Share Your Story
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
              {/* Outer circle */}
              <div className="absolute inset-4 rounded-full border border-[#d6c8ba]" />

              {/* Inner circle */}
              <div className="absolute inset-16 rounded-full border border-[#d6c8ba]" />

              {/* Region labels */}
              <div className="absolute left-2 top-1/3 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-sm">
                Bihar
              </div>

              <div className="absolute bottom-1/4 right-0 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-sm">
                Jharkhand
              </div>

              {/* Centre */}
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-[#241f1a] shadow-2xl md:h-64 md:w-64">
                <div className="text-center text-white">
                  <div className="text-6xl">🪷</div>

                  <p className="mt-3 text-xl font-bold">
                    Virasat
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
                    Stories • Culture • Memory
                  </p>
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute right-8 top-12 rounded-full bg-[#e4eadf] px-4 py-2 text-xs">
                🌿 Living traditions
              </div>

              <div className="absolute bottom-8 left-10 rounded-full bg-[#f1e4d6] px-4 py-2 text-xs">
                🎨 Folk stories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS VIRASAT
      ====================================================== */}
      <section className="bg-[#241f1a] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9a77c]">
                The idea
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                We aren't building
                <span className="block text-white/40">
                  another archive.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-2xl font-medium leading-relaxed md:text-3xl">
                We're building a place where cultural stories can
                be discovered, remembered and shared.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
                Heritage isn't limited to monuments behind glass.
                It lives in the festival a family celebrates every
                year, the painting an artist learned from a parent,
                the food prepared during a special occasion and the
                stories people carry with them.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                Virasat brings these different forms of heritage
                together in one accessible digital space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE FORMS
      ====================================================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a5b32]">
              More than monuments
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              What does heritage actually mean?
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6f675e]">
              Choose a form of heritage and discover what lies
              behind it.
            </p>
          </div>

          {/* Interactive cards */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {heritageForms.map((form, index) => {
              const active = activeForm === index;

              return (
                <button
                  key={form.title}
                  onClick={() => setActiveForm(index)}
                  className={`group rounded-[1.75rem] p-7 text-left transition duration-300 ${
                    active
                      ? "bg-[#9a5b32] text-white shadow-xl md:-translate-y-2"
                      : "bg-white hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">
                      {form.icon}
                    </span>

                    <span
                      className={`text-xs font-semibold ${
                        active
                          ? "text-white/50"
                          : "text-[#b0a69b]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {form.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      active
                        ? "text-white/75"
                        : "text-[#6f675e]"
                    }`}
                  >
                    {form.text}
                  </p>

                  <div
                    className={`mt-7 text-sm font-semibold ${
                      active
                        ? "text-white"
                        : "text-[#9a5b32]"
                    }`}
                  >
                    {active ? "Selected ✓" : "Explore →"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive explanation */}
          <div className="mt-6 rounded-[2rem] border border-[#ddd3c8] bg-white p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[100px_1fr]">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#eee3d6] text-5xl">
                {heritageForms[activeForm].icon}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
                  You selected
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {heritageForms[activeForm].title}
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-[#6f675e]">
                  {heritageForms[activeForm].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TWO REGIONS
      ====================================================== */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a5b32]">
              Where we begin
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Bihar × Jharkhand
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6f675e]">
              Two neighbouring regions with deeply layered and
              diverse cultural histories.
            </p>
          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-2">
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-12 -translate-x-1/2 bg-[#d8cec2] md:block" />

            {/* Bihar */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#f1e4d6] p-9 md:p-12">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/30" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
                  Region 01
                </p>

                <div className="mt-8 flex items-end justify-between">
                  <h3 className="text-5xl font-bold">
                    Bihar
                  </h3>

                  <span className="text-6xl transition duration-500 group-hover:rotate-12">
                    ☀️
                  </span>
                </div>

                <p className="mt-7 max-w-lg leading-7 text-[#6f675e]">
                  Ancient centres of learning, vibrant festivals,
                  folk art, historic places and traditions that
                  continue to shape everyday life.
                </p>

                <Link
                  href="/explore"
                  className="mt-7 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Explore Bihar →
                </Link>
              </div>
            </div>

            {/* Jharkhand */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#e1e8dc] p-9 md:p-12">
              <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full border-[35px] border-white/25" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526347]">
                  Region 02
                </p>

                <div className="mt-8 flex items-end justify-between">
                  <h3 className="text-5xl font-bold">
                    Jharkhand
                  </h3>

                  <span className="text-6xl transition duration-500 group-hover:scale-110">
                    🌿
                  </span>
                </div>

                <p className="mt-7 max-w-lg leading-7 text-[#5f6959]">
                  Indigenous traditions, folk art, music, dance,
                  festivals and a deep relationship with nature.
                </p>

                <Link
                  href="/explore"
                  className="mt-7 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Explore Jharkhand →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIRASAT JOURNEY
      ====================================================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a5b32]">
                The Virasat journey
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                From discovery
                <span className="block text-[#9a5b32]">
                  to preservation.
                </span>
              </h2>
            </div>

            <div>
              {journey.map((item, index) => (
                <div
                  key={item.number}
                  className={`grid gap-5 py-8 md:grid-cols-[70px_1fr] ${
                    index !== journey.length - 1
                      ? "border-b border-[#ddd3c8]"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold text-[#b08a69]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-[#6f675e]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY QUESTION
      ====================================================== */}
      <section className="bg-[#241f1a] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-6xl">❝</div>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Who gets to tell
            <span className="block text-[#d9a77c]">
              our history?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We believe communities should have a voice in how
            their heritage is remembered.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
            A grandmother's memory. An artist's technique. A
            festival remembered by an entire village. These stories
            matter too.
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#9a5b32] px-8 py-16 text-center text-white md:px-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
            Your turn
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            What story would you add to Virasat?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Help us build a living collection of the places,
            traditions, memories and stories that make Bihar and
            Jharkhand unique.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/explore"
              className="rounded-full bg-[#241f1a] px-7 py-4 font-medium text-white transition hover:-translate-y-1"
            >
              Explore Stories →
            </Link>

            <Link
              href="/contribute"
              className="rounded-full bg-white px-7 py-4 font-medium text-[#241f1a] transition hover:-translate-y-1"
            >
              Share Your Story →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}