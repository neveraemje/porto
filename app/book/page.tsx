
import { connectMongoDB } from "@/utils/config/mongodb";
import User from "@/utils/models/user";
import Image from "next/image";
import { Suspense } from "react";
import { Translate } from "@/components/language-provider";
import GuestbookIntro from "@/components/(guestbook)/GuestbookIntro";

export const dynamic = "force-dynamic";

const CARD_COLORS = ["yellow", "red", "blue", "green", "sky", "coral", "lavender", "mint", "rose", "stone"] as const;
const POSTCARD_LABELS = ["Kartu pos", "Postcard", "はがき", "بطاقة بريدية", "Открытка", "明信片", "Cartolina", "Postkarte"] as const;
const LATIN_POSTCARD_LABELS = new Set(["Kartu pos", "Postcard", "Cartolina", "Postkarte"]);
const POSTAGE_IMAGES = [
  { label: "Madinah", src: "/postcards/madinah.jpg" },
  { label: "Sunflower", src: "/postcards/sunflower.jpg" },
  { label: "Flowers", src: "/postcards/flowers.jpg" },
  { label: "Mountain", src: "/postcards/mountain.jpg" },
  { label: "Orca", src: "/postcards/orca.jpg" },
] as const;
const POSTAGE_IMAGE_SOURCES = new Set(POSTAGE_IMAGES.map((image) => image.src));

interface GuestEntry {
  name: string;
  photo: string;
  postageImage?: string;
  cardColor?: typeof CARD_COLORS[number];
  msg: string;
  _id: string;
  date?: string;
  timestamp: number;
}

const hashString = (value: string) => {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
};

const guestData = async () => {
  try {
    await connectMongoDB();
    const guest = await User.find().lean();
    const updates = guest.flatMap((entry) => {
      const changes: { cardColor?: typeof CARD_COLORS[number]; postageImage?: string } = {};

      if (!CARD_COLORS.includes(entry.cardColor)) {
        changes.cardColor = CARD_COLORS[hashString(`${entry._id}:color`) % CARD_COLORS.length];
        entry.cardColor = changes.cardColor;
      }

      const isCustomImage = typeof entry.postageImage === "string"
        && /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(entry.postageImage)
        && entry.postageImage.length <= 3_000_000;
      if (!POSTAGE_IMAGE_SOURCES.has(entry.postageImage) && !isCustomImage) {
        changes.postageImage = POSTAGE_IMAGES[hashString(`${entry._id}:postage`) % POSTAGE_IMAGES.length].src;
        entry.postageImage = changes.postageImage;
      }

      return Object.keys(changes).length > 0
        ? [{ updateOne: { filter: { _id: entry._id }, update: { $set: changes } } }]
        : [];
    });

    if (updates.length > 0) {
      await User.bulkWrite(updates);
    }

    return { guest: JSON.parse(JSON.stringify(guest)) }; // Ensure plain objects for serialization
  } catch (error) {
    console.log("Error fetching guestbook data:", error);
    return null;
  }
}

function GuestCardsSkeleton() {
  return (
    <section className="mt-4 sm:mt-6" role="status" aria-label="Loading guest postcards">
      <span className="sr-only"><Translate>Loading guest postcards...</Translate></span>
      <ul aria-hidden="true" className="m-0 grid grid-cols-1 justify-center gap-3 p-0 pb-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index} className="guest-card-skeleton relative aspect-video w-full list-none overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
            <span className="absolute left-[7%] top-[13%] h-2.5 w-[24%] rounded-full bg-zinc-300/80 dark:bg-zinc-600/80" />
            <span className="absolute left-[7%] top-[30%] h-[61%] w-[27%] rounded bg-zinc-300/80 dark:bg-zinc-600/80" />
            <span className="absolute left-[42%] top-[39%] h-3 w-[47%] rounded-full bg-zinc-300/80 dark:bg-zinc-600/80" />
            <span className="absolute left-[42%] top-[51%] h-3 w-[38%] rounded-full bg-zinc-300/80 dark:bg-zinc-600/80" />
            <span className="absolute left-[42%] top-[66%] h-2 w-[25%] rounded-full bg-zinc-300/70 dark:bg-zinc-600/70" />
          </li>
        ))}
      </ul>
    </section>
  );
}

async function GuestCards() {
  const data = await guestData();

  if (!data) {
    return (
      <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400" role="status">
        <Translate>The postcards could not be loaded. Please try again shortly.</Translate>
      </p>
    );
  }

  const guests: GuestEntry[] = data.guest?.slice().reverse() ?? [];

  return (
    <section className="mt-4 sm:mt-6">
      <ul className="m-0 grid grid-cols-1 justify-center gap-3 p-0 pb-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {guests.map((tamu) => {
          const seed = hashString(String(tamu._id));
          const postcardLabel = POSTCARD_LABELS[seed % POSTCARD_LABELS.length];
          const cardColor = tamu.cardColor && CARD_COLORS.includes(tamu.cardColor)
            ? tamu.cardColor
            : "yellow";
          const displayedMessage = tamu.msg.length > 220
            ? `${tamu.msg.slice(0, 220).trimEnd()}...`
            : tamu.msg;
          const postage = POSTAGE_IMAGES.find((image) => image.src === tamu.postageImage)
            ?? { label: "Selected", src: tamu.postageImage ?? POSTAGE_IMAGES[0].src };

          return (
            <li
              key={tamu._id}
              data-card-color={cardColor}
              className="guest-card-theme guest-card-list guest-card-surface relative aspect-video w-full list-none overflow-hidden rounded-lg border text-[var(--guest-list-ink)]"
            >
              <span
                aria-hidden="true"
                className="guest-card-frame pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-[95%] -translate-x-1/2 -translate-y-1/2 opacity-60"
              />

              <p className={`guest-list-label ${postcardLabel.length > 9 ? "guest-list-label-long" : ""} ${postcardLabel === "بطاقة بريدية" ? "guest-list-label-arabic" : ""} ${LATIN_POSTCARD_LABELS.has(postcardLabel) ? "guest-list-label-latin" : ""}`}>
                {postcardLabel}
              </p>

              <div className="guest-list-stamp">
                <Image alt="" aria-hidden="true" src="/figma/guest-card/list-stamp-frame.svg" fill sizes="(min-width: 1280px) 80px, 106px" className="z-10 object-fill" />
                <Image
                  unoptimized={postage.src.startsWith("data:image/")}
                  alt={`${postage.label} postcard stamp`}
                  src={postage.src}
                  fill
                  sizes="(min-width: 1280px) 67px, 89px"
                  className="z-20 !bottom-auto !left-[8.33%] !right-auto !top-[7.33%] !h-[85.33%] !w-[83.34%] rounded-sm object-cover"
                />
              </div>

              <div className="guest-list-copy">
                <p dir="auto" className="guest-list-message">
                  {displayedMessage}
                </p>
                <p dir="auto" className="guest-list-title">
                  — {tamu.name}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}


export default function GuestBook() {
  return (
    <div className="mx-auto mt-7 max-w-7xl px-4 sm:mt-10 sm:px-5">

      <GuestbookIntro />

      <Suspense fallback={<GuestCardsSkeleton />}>
        {GuestCards()}
      </Suspense>

    </div>
  )
}



// export const getProps = async () => {
//   const data = await guestData();

//   return {
//     data,
//   };
// };
