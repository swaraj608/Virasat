import Link from "next/link";
import Navbar from "../../components/Navbar";

const heritageData = {
  "chhath-puja": {
    title: "Chhath Puja",
    category: "Festival",
    region: "Bihar",
    location: "Bihar",
    symbol: "☀️",
    accent: "bg-[#f1e4d6]",
    intro:
      "Chhath Puja is one of Bihar's most deeply rooted cultural traditions, centred around devotion, nature, family and community.",
    story: [
      {
        number: "01",
        title: "The tradition",
        text:
          "Chhath is observed through a series of rituals, preparation, fasting and offerings. Rivers, ponds and other water bodies become important spaces for the community.",
      },
      {
        number: "02",
        title: "A connection with nature",
        text:
          "The Sun and water occupy a central place in the celebration. The tradition reflects gratitude towards nature and the forces believed to sustain life.",
      },
      {
        number: "03",
        title: "Community and memory",
        text:
          "Families often experience Chhath together across generations. Songs, rituals, food and shared preparation become part of collective memory.",
      },
    ],
  },

  "madhubani-painting": {
    title: "Madhubani Painting",
    category: "Folk Art",
    region: "Bihar",
    location: "Madhubani, Bihar",
    symbol: "🎨",
    accent: "bg-[#eadfd3]",
    intro:
      "Madhubani painting is a distinctive artistic tradition from the Mithila region, carrying stories through patterns, symbols and colour.",
    story: [
      {
        number: "01",
        title: "The visual language",
        text:
          "Traditional Madhubani paintings use strong outlines, repeated patterns and carefully arranged forms to represent nature, mythology, people and everyday life.",
      },
      {
        number: "02",
        title: "Stories on walls",
        text:
          "The tradition historically appeared on walls and surfaces within homes, turning everyday spaces into places of artistic and cultural expression.",
      },
      {
        number: "03",
        title: "An evolving tradition",
        text:
          "Artists continue to preserve the visual identity of Madhubani while adapting it to new materials, audiences and contemporary themes.",
      },
    ],
  },

  "nalanda-mahavihara": {
    title: "Nalanda Mahavihara",
    category: "Historical Place",
    region: "Bihar",
    location: "Nalanda, Bihar",
    symbol: "🏛️",
    accent: "bg-[#e4ddd3]",
    intro:
      "Nalanda Mahavihara represents a remarkable chapter in the intellectual and cultural history of the Indian subcontinent.",
    story: [
      {
        number: "01",
        title: "A centre of learning",
        text:
          "Nalanda developed into a major centre of Buddhist learning and attracted students and scholars from different parts of Asia.",
      },
      {
        number: "02",
        title: "The ancient landscape",
        text:
          "The surviving archaeological remains reveal monasteries, temples and a complex environment dedicated to learning and spiritual life.",
      },
      {
        number: "03",
        title: "A legacy of knowledge",
        text:
          "Nalanda continues to represent the importance of scholarship, cultural exchange and intellectual curiosity across generations.",
      },
    ],
  },

  "sohrai-art": {
    title: "Sohrai Art",
    category: "Folk Art",
    region: "Jharkhand",
    location: "Jharkhand",
    symbol: "🎨",
    accent: "bg-[#dfe7da]",
    intro:
      "Sohrai art is a traditional wall-art practice connected with nature, agriculture and the cultural life of communities in Jharkhand.",
    story: [
      {
        number: "01",
        title: "Art and nature",
        text:
          "Animals, plants and natural forms frequently appear in Sohrai compositions, reflecting a close relationship between artistic expression and the surrounding environment.",
      },
      {
        number: "02",
        title: "The walls become a canvas",
        text:
          "Traditional homes can become spaces of artistic expression, particularly around important cultural occasions and seasonal celebrations.",
      },
      {
        number: "03",
        title: "Passed through generations",
        text:
          "The practice continues through community knowledge, with artists carrying traditional techniques while also developing their own visual styles.",
      },
    ],
  },

  sarhul: {
    title: "Sarhul",
    category: "Festival",
    region: "Jharkhand",
    location: "Jharkhand",
    symbol: "🌸",
    accent: "bg-[#dfe7da]",
    intro:
      "Sarhul is a spring festival deeply connected with nature, community and the cultural traditions of Jharkhand.",
    story: [
      {
        number: "01",
        title: "Welcoming spring",
        text:
          "The festival marks an important seasonal moment and brings communities together through rituals, gatherings and celebration.",
      },
      {
        number: "02",
        title: "The sacred sal tree",
        text:
          "The sal tree holds an important place within the cultural symbolism of Sarhul and represents the close relationship between community and nature.",
      },
      {
        number: "03",
        title: "Music, dance and community",
        text:
          "Collective celebrations, traditional music and dance help make Sarhul a powerful expression of cultural identity.",
      },
    ],
  },

  "deoghar-temple-traditions": {
    title: "Deoghar Temple Traditions",
    category: "Tradition",
    region: "Jharkhand",
    location: "Deoghar, Jharkhand",
    symbol: "🛕",
    accent: "bg-[#e3e0d7]",
    intro:
      "Deoghar is an important pilgrimage centre whose traditions have become deeply connected with the cultural landscape of Jharkhand.",
    story: [
      {
        number: "01",
        title: "A pilgrimage landscape",
        text:
          "Pilgrims and visitors have shaped the cultural life of Deoghar, creating traditions that extend beyond the physical temple structures.",
      },
      {
        number: "02",
        title: "Living rituals",
        text:
          "Religious practices, gatherings and local customs continue to give the place its distinctive cultural character.",
      },
      {
        number: "03",
        title: "Heritage beyond architecture",
        text:
          "The heritage of Deoghar lives through people, memories, rituals and shared experiences as much as through its historic places.",
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

        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <div className="text-6xl">🔎</div>

            <h1 className="mt-6 text-4xl font-bold">
              Heritage story not found
            </h1>

            <p className="mt-4 leading-7 text-[#6f675e]">
              This story doesn't exist yet in Virasat.
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

      {/* HERO */}
      <section className="px-6 pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/explore"
            className="text-sm font-medium text-[#756c62] transition hover:text-[#241f1a]"
          >
            ← Back to Explore
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* TEXT */}
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#241f1a] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                  {heritage.category}
                </span>

                <span className="rounded-full border border-[#d8cec3] bg-white px-4 py-2 text-xs font-medium">
                  {heritage.region}
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                {heritage.title}
              </h1>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
                {heritage.location}
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f675e] md:text-xl">
                {heritage.intro}
              </p>
            </div>

            {/* VISUAL */}
            <div
              className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem] ${heritage.accent}`}
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/30" />

              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[50px] border-white/20" />

              <span className="relative text-[9rem] transition duration-700 hover:scale-110 md:text-[12rem]">
                {heritage.symbol}
              </span>

              <div className="absolute bottom-6 left-6 rounded-full bg-white/70 px-4 py-2 text-xs font-medium backdrop-blur">
                Virasat · {heritage.region}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
              The story
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Discover the layers behind it.
            </h2>
          </div>

          <div className="mt-16">
            {heritage.story.map((section, index) => (
              <article
                key={section.number}
                className="grid gap-6 border-t border-[#e5ddd4] py-12 md:grid-cols-[80px_1fr]"
              >
                <div className="text-sm font-bold text-[#b18a68]">
                  {section.number}
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    {section.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6f675e]">
                    {section.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURAL MEMORY */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#ddd3c8] bg-[#eee7de] px-8 py-14 text-center md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">
            Cultural memory
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Heritage isn't only about the past.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f675e]">
            It lives through the people who practice it, remember it,
            teach it and pass it forward.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#241f1a] px-8 py-16 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a77c]">
            Keep the story alive
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Do you know a story that belongs here?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/60">
            Share a memory, tradition, festival, place or local story
            and help build Virasat together.
          </p>

          <Link
            href="/contribute"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-[#241f1a] transition hover:-translate-y-1"
          >
            Contribute Your Story →
          </Link>
        </div>
      </section>
    </main>
  );
}