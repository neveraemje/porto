"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiArrowUp, HiPlus, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { Translate, useLanguage } from "@/components/language-provider";
import { POSTCARD_IMAGES } from "@/lib/postcard-images";

const MAX_NAME_LENGTH = 30;
const MAX_MESSAGE_LENGTH = 220;
const CARD_COLORS = [
  { id: "yellow", label: "Yellow", swatch: "#f4c76f" },
  { id: "red", label: "Red", swatch: "#d98b86" },
  { id: "blue", label: "Blue", swatch: "#89a9c7" },
  { id: "green", label: "Green", swatch: "#91b29a" },
  { id: "sky", label: "Sky", swatch: "#93c6cf" },
  { id: "coral", label: "Coral", swatch: "#e39a7d" },
  { id: "lavender", label: "Lavender", swatch: "#aaa0c5" },
  { id: "mint", label: "Mint", swatch: "#8fc1b2" },
  { id: "rose", label: "Rose", swatch: "#d79aab" },
  { id: "stone", label: "Stone", swatch: "#aaa59b" },
] as const;
const readFileAsDataUrl = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(new Error("Invalid image"));
  reader.onerror = () => reject(new Error("Could not read image"));
  reader.readAsDataURL(file);
});

const prepareCustomImage = async (file: File) => {
  const original = await readFileAsDataUrl(file);
  if (original.length <= 2_500_000 && /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(original)) {
    return original;
  }

  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const element = new window.Image();
    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error("Unsupported image"));
    element.src = original;
  });
  const scale = Math.min(1, 1200 / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not process image");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  let quality = 0.82;
  let result = canvas.toDataURL("image/webp", quality);
  while (result.length > 2_500_000 && quality > 0.42) {
    quality -= 0.1;
    result = canvas.toDataURL("image/webp", quality);
  }
  if (result.length > 2_500_000) throw new Error("Image is still too large");
  return result;
};

export default function GuestCard() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [cardColor, setCardColor] = useState<(typeof CARD_COLORS)[number]["id"]>("yellow");
  const [postageImage, setPostageImage] = useState<(typeof POSTCARD_IMAGES)[number]["id"] | "custom">("madinah");
  const [customImage, setCustomImage] = useState<string | null>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const selectedPostage = postageImage === "custom" && customImage
    ? { label: "Custom", src: customImage }
    : POSTCARD_IMAGES.find((image) => image.id === postageImage) ?? POSTCARD_IMAGES[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    if (!file.type.startsWith("image/")) {
      setSubmitError("Please choose an image file.");
      return;
    }

    try {
      setSubmitError("");
      const imageData = await prepareCustomImage(file);
      setCustomImage(imageData);
      setPostageImage("custom");
    } catch {
      setSubmitError("Could not use this image. Please try another one.");
    }
  };

  const clearCustomImage = () => {
    setCustomImage(null);
    setPostageImage("madinah");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSent(false);
    setSubmitError("");
    const minimumSubmitTime = new Promise((resolve) => window.setTimeout(resolve, 2000));

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "guest@emje.dev",
          name,
          msg: message,
          photo: "/mj.png",
          postageImage: selectedPostage.src,
          cardColor,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Could not send. Please try again.");
      }

      await minimumSubmitTime;
      setName("");
      setMessage("");
      setPostageImage("madinah");
      setCustomImage(null);
      setSubmitError("");
      setSent(false);
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-white/35 backdrop-blur-[5px] transition-opacity duration-300 dark:bg-black/40 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        data-card-color={cardColor}
        dir="ltr"
        role={isOpen ? "dialog" : undefined}
        aria-modal={isOpen ? "true" : undefined}
        aria-labelledby={isOpen ? "guest-card-title" : undefined}
        className={`guest-card-theme fixed left-1/2 z-[70] -translate-x-1/2 overflow-visible text-[var(--guest-ink)] transition-[width,height,bottom,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "guest-card-surface bottom-40 h-[310px] w-[min(92vw,480px)] rounded-lg border shadow-[0_28px_80px_rgba(42,32,23,0.34)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.6)]"
            : "bottom-0 h-[72px] w-[min(86vw,337px)] rounded-t-lg border border-transparent bg-transparent shadow-none"
        }`}
      >
        <button
          type="button"
          aria-label={t("Open guest card")}
          aria-expanded={isOpen}
          aria-hidden={isOpen}
          tabIndex={isOpen ? -1 : 0}
          onClick={() => setIsOpen(true)}
          className={`guest-card-surface absolute inset-0 z-0 overflow-hidden rounded-t-lg border text-left text-[var(--guest-ink)] transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2.5 hover:shadow-[0_12px_32px_rgba(73,52,27,0.2)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] ${
            isOpen ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
        >
          <span
            dir={language === "ar" ? "rtl" : "ltr"}
            className={`absolute top-[20px] text-base font-semibold leading-none ${
              language === "ar" ? "right-[14px] text-right" : "left-[14px] text-left"
            }`}
          >
            <Translate>GUEST POSTCARD</Translate>
          </span>
          <Image alt="" aria-hidden="true" src="/figma/guest-card/card-line.svg" width="337" height="5" className="absolute left-[5px] top-[54px] max-w-none" />
          <span className={`absolute top-[16px] flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[var(--guest-border)] bg-[var(--guest-button-text)] text-[var(--guest-ink)] ${
            language === "ar" ? "left-[15px]" : "right-[15px]"
          }`}>
            <HiArrowUp aria-hidden="true" className="h-4 w-4" />
          </span>
        </button>

        <Image
          alt=""
          aria-hidden="true"
          src={isOpen ? "/figma/guest-card/paper-edge-open.svg" : "/figma/guest-card/paper-edge.svg"}
          width="681"
          height="22"
          className={`pointer-events-none absolute left-1/2 z-10 max-w-none -translate-x-1/2 transition-[bottom,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:brightness-[0.3] dark:contrast-[0.9] ${isOpen ? "bottom-[-162px] opacity-100" : "bottom-[-2px] opacity-100"}`}
        />

        <div className={`absolute inset-0 overflow-hidden rounded-lg ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
          <span aria-hidden="true" className={`pointer-events-none absolute inset-x-[2.5%] inset-y-[4%] overflow-hidden border border-[var(--guest-muted)] transition-opacity duration-300 ${isOpen ? "opacity-60" : "opacity-0"}`}>
            <span className="absolute -left-[14px] -top-[14px] h-7 w-7 rounded-full border border-[var(--guest-muted)]" />
            <span className="absolute -right-[14px] -top-[14px] h-7 w-7 rounded-full border border-[var(--guest-muted)]" />
            <span className="absolute -bottom-[14px] -left-[14px] h-7 w-7 rounded-full border border-[var(--guest-muted)]" />
            <span className="absolute -bottom-[14px] -right-[14px] h-7 w-7 rounded-full border border-[var(--guest-muted)]" />
            {[
              "top-0 h-[20px]",
              "top-[48px] h-[28px]",
              "top-[250px] bottom-0",
            ].map((segment) => (
              <span key={segment} className={`absolute left-[12px] flex w-[90px] justify-around sm:left-[17px] sm:w-[120px] ${segment}`}>
                {[0, 1, 2, 3, 4].map((line) => (
                  <span key={line} className="h-full w-px bg-[var(--guest-muted)]" />
                ))}
              </span>
            ))}
          </span>
          <div aria-hidden={!isOpen} className={`relative z-10 h-full px-5 pb-4 pt-[38px] transition-[transform,opacity] duration-300 ${isOpen ? "translate-y-0 opacity-100 delay-200" : "pointer-events-none translate-y-4 opacity-0 delay-0"}`}>
          <header className="relative z-20 h-[46px]">
            <div className="absolute left-[5px] top-0 w-[90px] text-center sm:left-[10px] sm:w-[120px]">
              <h2 id="guest-card-title" className="m-0 whitespace-nowrap text-[10px] font-semibold leading-none tracking-[0.08em] text-[var(--guest-ink)] sm:text-xs"><Translate>GUEST POSTCARD</Translate></h2>
            </div>
            <button type="button" aria-label={t("Close guest card")} onClick={() => setIsOpen(false)} className="absolute -right-2 -top-[22px] z-30 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--guest-border)] bg-[var(--guest-button-text)] text-[var(--guest-ink)] transition-transform hover:scale-105">
              <HiX aria-hidden="true" className="h-5 w-5" />
            </button>
          </header>

          <form onSubmit={handleSubmit} className="absolute inset-x-5 inset-y-4 grid grid-cols-[90px_minmax(0,1fr)] gap-5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-9">
            <div>
              <aside className="relative ml-[5px] mt-[72px] h-[113px] w-[90px] sm:ml-[10px] sm:h-[150px] sm:w-[120px]">
                <Image alt="" aria-hidden="true" src="/figma/guest-card/stamp-frame.svg" fill sizes="(min-width: 640px) 120px, 90px" className="z-10 object-fill" />
                <Image unoptimized={postageImage === "custom"} alt={`${selectedPostage.label} postcard stamp`} src={selectedPostage.src} fill sizes="(min-width: 640px) 100px, 75px" className="z-20 !bottom-auto !left-[8.33%] !right-auto !top-[7.33%] !h-[85.33%] !w-[83.34%] rounded-sm object-cover" />
              </aside>
              <p className="guest-card-caption mb-0 ml-[5px] mt-2 w-[90px] whitespace-nowrap text-center text-[8px] font-bold leading-tight text-[var(--guest-muted)] sm:ml-[10px] sm:w-[120px] sm:text-[9px]"><Translate>Thank you for visiting</Translate></p>
            </div>

            <div className="self-center pr-1 sm:pr-3">
              <label className="relative block">
                <span className="sr-only">{t("Your name")}</span>
                <input dir={language === "ar" ? "rtl" : "auto"} value={name} onChange={(event) => setName(event.target.value)} maxLength={MAX_NAME_LENGTH} required placeholder={t("Your name")} className="block h-[25px] w-full border-0 border-b border-[var(--guest-rule)] bg-transparent p-0 text-[13px] font-medium text-[var(--guest-ink)] outline-none placeholder:text-[var(--guest-muted)] focus:border-[var(--guest-ink)] focus:ring-0" />
                <span aria-label={language === "ar" ? `${name.length} من ${MAX_NAME_LENGTH} حرفًا للاسم` : `${name.length} of ${MAX_NAME_LENGTH} name characters`} className="absolute -bottom-[11px] right-0 text-[8px] font-medium tabular-nums text-[var(--guest-muted)]">
                  {name.length}/{MAX_NAME_LENGTH}
                </span>
              </label>
              <label className="relative mt-[16px] block">
                <span className="sr-only">{t("Leave your short messages")}</span>
                <textarea dir={language === "ar" ? "rtl" : "auto"} value={message} onChange={(event) => setMessage(event.target.value)} maxLength={MAX_MESSAGE_LENGTH} required rows={6} placeholder={t("Leave your short messages")} className="postcard-detail-lines block h-[120px] w-full resize-none border-0 bg-transparent p-0 text-xs font-medium leading-5 text-[var(--guest-ink)] outline-none placeholder:text-[var(--guest-muted)] focus:ring-0" />
                <span aria-label={language === "ar" ? `${message.length} من ${MAX_MESSAGE_LENGTH} حرفًا للرسالة` : `${message.length} of ${MAX_MESSAGE_LENGTH} message characters`} className="absolute -bottom-[11px] right-0 text-[8px] font-medium tabular-nums text-[var(--guest-muted)]">
                  {message.length}/{MAX_MESSAGE_LENGTH}
                </span>
              </label>
              <div className="absolute bottom-3 right-3 flex items-center justify-end gap-3">
                <p role="status" aria-live="polite" className="m-0 text-[10px] font-medium text-[var(--guest-ink)]">
                  {t(submitError) || (message.length >= MAX_MESSAGE_LENGTH ? (language === "ar" ? `تم بلوغ الحد الأقصى: ${MAX_MESSAGE_LENGTH} حرفًا.` : `${MAX_MESSAGE_LENGTH} character limit reached.`) : sent ? t("Sent. Thank you!") : "")}
                </p>
                <button type="submit" disabled={loading} className="inline-flex h-8 min-w-20 items-center justify-center rounded-lg border border-white/35 bg-[var(--guest-ink)] px-5 text-xs font-semibold text-[var(--guest-button-text)] transition-[filter] hover:brightness-90 disabled:cursor-wait disabled:opacity-60">
                  <Translate>{loading ? "Sending" : "Submit"}</Translate>
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>

        <div
          aria-label={t("Card customization")}
          aria-hidden={!isOpen}
          className={`absolute -bottom-[113px] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 transition-[transform,opacity] delay-300 duration-300 ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
          role="group"
        >
          <div aria-label={t("Card color")} className="flex items-center gap-2" role="group">
          {CARD_COLORS.map((color) => (
            <button
              key={color.id}
              type="button"
              aria-label={language === "ar" ? `لون البطاقة: ${t(color.label)}` : `${color.label} card`}
              aria-pressed={cardColor === color.id}
              title={t(color.label)}
              onClick={() => setCardColor(color.id)}
              className={`h-6 w-6 rounded-full border-2 transition-[transform,box-shadow] hover:scale-110 ${
                cardColor === color.id
                  ? "scale-110 border-white shadow-[0_0_0_2px_#3f372d,0_3px_10px_rgba(0,0,0,0.3)]"
                  : "border-white/70 shadow-sm"
              }`}
              style={{ backgroundColor: color.swatch }}
            />
          ))}
          </div>

          <div
            aria-label={t("Postage image")}
            className="flex max-w-[calc(100vw-2rem)] items-center gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
          >
            <input ref={uploadInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
            <div className="relative h-[33px] w-11 shrink-0">
              <button
                type="button"
                aria-label={t("Upload custom postage image")}
                aria-pressed={postageImage === "custom"}
                title={t("Upload image")}
                onClick={() => uploadInputRef.current?.click()}
                className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded border bg-white/90 text-zinc-700 transition-[transform,box-shadow] hover:scale-105 ${
                  postageImage === "custom"
                    ? "scale-105 border-white shadow-[0_0_0_2px_#3f372d,0_3px_10px_rgba(0,0,0,0.3)]"
                    : "border-zinc-400/70 shadow-sm"
                }`}
              >
                {customImage ? (
                  <Image unoptimized alt="" aria-hidden="true" src={customImage} fill sizes="44px" className="object-cover" />
                ) : (
                  <span className="absolute inset-[3px] flex flex-col items-center justify-center border border-dashed border-zinc-500/35 leading-none">
                    <HiPlus aria-hidden="true" className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="mt-0.5 text-[6px] font-semibold uppercase tracking-[0.04em] sm:text-[8px] sm:tracking-[0.08em]">{t("Upload")}</span>
                  </span>
                )}
              </button>
              {customImage && (
                <button
                  type="button"
                  aria-label={t("Remove custom postage image")}
                  title={t("Remove custom image")}
                  onClick={clearCustomImage}
                  className="absolute -right-1.5 -top-1.5 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-zinc-800 text-xs font-bold leading-none text-white shadow-md transition-transform hover:scale-110"
                >
                  ×
                </button>
              )}
            </div>
            {POSTCARD_IMAGES.map((image) => (
              <button
                key={image.id}
                type="button"
                aria-label={language === "ar" ? `صورة الطابع: ${t(image.label)}` : `${image.label} postage`}
                aria-pressed={postageImage === image.id}
                title={t(image.label)}
                onClick={() => setPostageImage(image.id)}
                className={`relative h-[33px] w-11 shrink-0 overflow-hidden rounded border-2 bg-white transition-[transform,box-shadow] hover:scale-105 ${
                  postageImage === image.id
                    ? "scale-105 border-white shadow-[0_0_0_2px_#3f372d,0_3px_10px_rgba(0,0,0,0.3)]"
                    : "border-white/70 shadow-sm"
                }`}
              >
                <Image alt="" aria-hidden="true" src={image.src} fill sizes="44px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
