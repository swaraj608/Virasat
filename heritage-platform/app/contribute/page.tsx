"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContributePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [story, setStory] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          location,
          category,
          story,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);

      setTitle("");
      setLocation("");
      setCategory("");
      setStory("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest">
            Contribute
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Share Your Heritage
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Do you know a forgotten story, tradition, festival, place,
            recipe or cultural practice from Bihar or Jharkhand?
            Share it with the community.
          </p>

          {submitted && (
            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
              Thank you! Your heritage story has been submitted.
            </div>
          )}

          {error && (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Story Title
              </label>

              <input
                type="text"
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter the title of your story"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Location
              </label>

              <input
                type="text"
                required
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Village, town, district or region"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select
                required
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              >
                <option value="">Select a category</option>
                <option value="tradition">Tradition</option>
                <option value="festival">Festival</option>
                <option value="historical-place">
                  Historical Place
                </option>
                <option value="folk-art">Folk Art</option>
                <option value="food">Food</option>
                <option value="language">Language</option>
                <option value="story">Story / Legend</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Story
              </label>

              <textarea
                rows={7}
                required
                value={story}
                onChange={(event) => setStory(event.target.value)}
                placeholder="Tell us about this cultural heritage..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Story"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}