export const POSTCARD_IMAGES = [
  { id: "madinah", label: "Madinah", src: "/postcards/madinah.png" },
  { id: "sunflower", label: "Sunflower", src: "/postcards/sunflower.png" },
  { id: "flowers", label: "Flowers", src: "/postcards/flowers.png" },
  { id: "mountain", label: "Mountain", src: "/postcards/mountain.png" },
  { id: "orca", label: "Orca", src: "/postcards/orca.png" },
  { id: "boat", label: "Boat", src: "/postcards/boat.png" },
  { id: "coffee", label: "Coffee", src: "/postcards/coffee.png" },
  { id: "cock", label: "Rooster", src: "/postcards/cock.png" },
] as const;

export const DEFAULT_POSTCARD_IMAGE = POSTCARD_IMAGES[0].src;
export const POSTCARD_IMAGE_SOURCES = new Set<string>(
  POSTCARD_IMAGES.map((image) => image.src),
);

const LEGACY_POSTCARD_IMAGES = new Map(
  POSTCARD_IMAGES.map((image) => [image.src.replace(/\.png$/, ".jpg"), image.src]),
);

export const normalizePostcardImage = (value: unknown) => {
  if (typeof value !== "string") return null;
  if (POSTCARD_IMAGE_SOURCES.has(value)) return value;
  return LEGACY_POSTCARD_IMAGES.get(value) ?? null;
};
