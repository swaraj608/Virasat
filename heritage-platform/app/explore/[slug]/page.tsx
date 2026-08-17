import Link from "next/link";
import Navbar from "../../components/Navbar";

const heritageData = {
  "chhath-puja": {
    title: "Chhath Puja",
    category: "Festival",
    region: "Bihar",
    location: "Bihar",
    symbol: "☀️",
    color: "bg-[#ead8c6]",
    intro:
      "Chhath Puja is one of the most important cultural and spiritual traditions associated with Bihar. The celebration is closely connected with devotion to the Sun, rivers and community.",
    sections: [
      {
        title: "The tradition",
        text:
          "Families and communities come together through a series of rituals, preparation, fasting and offerings. The setting around rivers and other water bodies becomes an important part of the experience.",
      },
      {
        title: "Why it matters",
        text:
          "Beyond the rituals themselves, Chhath represents community, gratitude, discipline and a strong connection between people and nature.",
      },
      {
        title: "A living heritage",
        text:
          "The tradition continues to be practiced across generations, making it an important example of living cultural heritage.",
      },
    ],
  },

  "madhubani-painting": {
    title: "Madhubani Painting",
    category: "Folk Art",
    region: "Bihar",
    location: "Madhubani, Bihar",
    symbol: "🎨",
    color: "bg-[#ead8c6]",
    intro:
      "Madhubani painting is a distinctive artistic tradition from the Mithila region of Bihar, known for its strong visual language, patterns and storytelling.",
    sections: [
      {
        title: "The art",
        text:
          "Traditional works often use strong lines, repeated patterns and carefully arranged forms to represent people, nature, mythology and everyday life.",
      },
      {
        title: "The community",
        text:
          "The art has been passed through generations and continues to be practiced by artists who preserve and reinterpret the tradition.",
      },
      {
        title: "A living heritage",
        text:
          "Today, Madhubani art can be found beyond traditional walls and surfaces, while still maintaining connections to its cultural roots.",
      },
    ],
  },

  "nalanda-mahavihara": {
    title: "Nalanda Mahavihara",
    category: "Historical Place",
    region: "Bihar",
    location: "Nalanda, Bihar",
    symbol: "🏛️",
    color: "bg-[#e2d7c8]",
    intro:
      "Nalanda Mahavihara represents one of the most remarkable chapters in the intellectual history of the Indian subcontinent.",
    sections: [
      {
        title: "A centre of learning",
        text:
          "Nalanda became an important centre of Buddhist learning and attracted scholars and students from different parts of Asia.",
      },
      {
        title: "The archaeological remains",
        text:
          "The ruins preserve evidence of monasteries, temples and a sophisticated educational environment.",
      },
      {
        title: "Why it matters today",
        text:
          "Nalanda connects the modern visitor with a long history of scholarship, cultural exchange and intellectual life.",
      },
    ],
  },

  "sohrai-art": {
    title: "Sohrai Art",
    category: "Folk Art",
    region: "Jharkhand",
    location: "Jharkhand",
    symbol: "🌿",
    color: "bg-[#dce5d6]",
    intro:
      "Sohrai art is a traditional form of wall painting associated with the cultural life of communities in Jharkhand.",
    sections: [
      {
        title: "The visual language",
        text:
          "The art uses natural forms, animals, plants and geometric patterns to create distinctive visual compositions.",
      },
      {
        title: "Connection with nature",
        text:
          "Nature, agriculture and community life are closely reflected in the themes and practice of the tradition.",
      },
      {
        title: "A living tradition",
        text:
          "Sohrai continues to be practiced and passed between generations, connecting contemporary communities with their cultural heritage.",
      },
    ],
  },

  sarhul: {
    title: "Sarhul",
    category: "Festival",
    region: "Jharkhand",
    location: "Jharkhand",
    symbol: "🌸",
    color: "bg-[#dce5d6]",
    intro:
      "Sarhul is a spring festival associated with nature, community and the cultural traditions of several indigenous communities in Jharkhand.",
    sections: [
      {
        title: "The celebration",
        text:
          "The arrival of spring becomes an occasion for communities to gather, celebrate and express their relationship with nature.",
      },
      {
        title: "The sal tree",
        text:
          "The sal tree has an important symbolic and cultural presence within the festival and its traditions.",
      },
      {
        title: "Community",
        text:
          "Music, dance, rituals and collective participation help make Sarhul a strong expression of community identity.",
      },
    ],
  },

  "deoghar-temple-traditions": {
    title: "Deoghar Temple Traditions",
    category: "Tradition",
    region: "Jharkhand",
    location: "Deoghar, Jharkhand",
    symbol: "🛕",
    color: "bg-[#dce5d6]",
    intro:
      "Deoghar is an important pilgrimage centre in Jharkhand, with traditions that have shaped the cultural identity of the region.",
    sections: [
      {
        title: "A pilgrimage landscape",
        text:
          "The city attracts pilgrims and visitors whose journeys form an important part of its cultural life.",
      },
      {
        title: "Living traditions",
        text:
          "Religious practices, rituals, gatherings and local customs continue to shape the experience of the place.",
      },
      {
        title: "Beyond a monument",
        text:
          "The heritage of Deoghar is not limited to architecture. It also lives through people, rituals and shared cultural memory.",
      },
    ],
  },
};

export default async function HeritageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const heritage =
    heritageData[slug as keyof typeof heritageData];

  if (!heritage) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] text-[#241f1a]">
        <Navbar />

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-6xl">🔎</p>

            <h1 className="mt-6 text-4xl font-bold">
              Heritage story not found
            </h1>

            <p className="mt-4 text-[#766d63]">
              We couldn't find the heritage story you're looking for.
            </p>

            <Link
              href="/explore"
              className="mt-8 inline-flex rounded-full bg-[#241f1a] px-6 py-3 font-medium text-white"
            >
              ← Back to Explore
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#241f1a]">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/explore"
            className="text-sm font-medium text-[#766d63] hover:text-[#241f1a]"
          >
            ← Back to Explore
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#241f1a] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                  {heritage.category}
                </span>

                <span className="rounded-full border border-[#d7cec3] bg-white px-4 py-2 text-xs font-medium">
                  {heritage.region}
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-tight md:text-7xl">
                {heritage.title}
              </h1>

              <p className="mt-5 text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
                {heritage.location}
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f675e]">
                {heritage.intro}
              </p>
            </div>

            <div
              className={`flex aspect-square items-center justify-center rounded-[2rem] ${heritage.color} shadow-xl`}
            >
              <span className="text-[9rem] transition duration-500 hover:scale-110 md:text-[12rem]">
                {heritage.symbol}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[#9a5b32]">
            Discover the story
          </p>

          <div className="mt-10 space-y-14">
            {heritage.sections.map((section, index) => (
              <article
                key={section.title}
                className="border-b border-[#e5ddd4] pb-12 last:border-0"
              >
                <div className="flex gap-6">
                  <span className="text-sm font-bold text-[#b18a68]">
                    0{index + 1}
                  </span>

                  <div>
                    <h2 className="text-3xl font-bold">
                      {section.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-[#6f675e]">
                      {section.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#241f1a] px-8 py-14 text-center text-white md:px-16">
          <p className="text-sm uppercase tracking-widest text-[#d9a77c]">
            Keep the story alive
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Do you know something we should add?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/60">
            Share your own memories, traditions or local knowledge
            and help preserve the cultural heritage of Bihar and
            Jharkhand.
          </p>

          <Link
            href="/contribute"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-[#241f1a] transition hover:-translate-y-1"
          >
            Contribute a Story →
          </Link>
        </div>
      </section>
    </main>
  );
}