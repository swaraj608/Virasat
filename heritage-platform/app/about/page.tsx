import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-widest">
            About Us
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Preserving the Living Heritage of Bihar & Jharkhand
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Heritage is more than monuments and historical dates. It lives
            in the stories people tell, the festivals they celebrate, the
            food they prepare, the languages they speak and the traditions
            they pass from one generation to the next.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="text-3xl">📖</div>

              <h2 className="mt-5 text-xl font-semibold">
                Preserve Stories
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Give communities a place to document stories, memories
                and traditions that might otherwise be forgotten.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="text-3xl">🌍</div>

              <h2 className="mt-5 text-xl font-semibold">
                Connect Communities
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Connect people with the cultural heritage of villages,
                towns and communities across Bihar and Jharkhand.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7">
              <div className="text-3xl">✨</div>

              <h2 className="mt-5 text-xl font-semibold">
                Inspire Discovery
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Make regional heritage easier to discover, understand
                and share with future generations.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold">
              Our Vision
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              We envision a digital cultural archive where the heritage
              of Bihar and Jharkhand is documented by the people who
              know it best — the communities themselves.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              From ancient history to living traditions, every story
              deserves a place to be remembered.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}