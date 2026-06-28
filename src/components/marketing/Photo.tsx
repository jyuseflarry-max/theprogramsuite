/**
 * Photo slot system for the redesign.
 *
 * Every emotional / lifestyle image on the page is referenced by a stable `id`.
 * The PHOTOS registry below maps each id to either a real file under
 * /public/marketing/redesign (once you generate it) or `null`, in which case a
 * styled, labelled placeholder renders instead — so the layout is complete and
 * shippable before any photography exists.
 *
 * To drop in a real image: generate it per the prompt in IMAGE-PROMPTS.md, save
 * it as /public/marketing/redesign/<id>.jpg, then set that id's value below to
 * `"/marketing/redesign/<id>.jpg"`. Nothing else changes.
 */

export type PhotoId =
  | "hero-field"
  | "hero-coach"
  | "problem-buried"
  | "problem-embrace"
  | "founder"
  | "tools-practice"
  | "tools-training"
  | "tools-communication"
  | "tools-graphics"
  | "tools-inventory"
  | "story-1"
  | "story-2"
  | "story-3"
  | "story-4"
  | "live-better";

/** Set a value to a path string once the real image exists; null = placeholder. */
const PHOTOS: Record<PhotoId, string | null> = {
  "hero-field": "/marketing/redesign/hero-field.jpg",
  "hero-coach": "/marketing/redesign/hero-coach.jpg",
  "problem-buried": "/marketing/redesign/problem-buried.jpg",
  "problem-embrace": "/marketing/redesign/problem-embrace.jpg",
  // We already ship a founder photo — wire it straight in.
  founder: "/marketing/founder.png",
  "tools-practice": "/marketing/redesign/tools-practice.jpg",
  "tools-training": "/marketing/redesign/tools-training.jpg",
  "tools-communication": "/marketing/redesign/tools-communication.jpg",
  "tools-graphics": "/marketing/redesign/tools-graphics.jpg",
  "tools-inventory": "/marketing/redesign/tools-inventory.jpg",
  "story-1": "/marketing/redesign/story-1.jpg",
  "story-2": "/marketing/redesign/story-2.jpg",
  "story-3": "/marketing/redesign/story-3.jpg",
  "story-4": null,
  "live-better": "/marketing/redesign/live-better.jpg",
};

type PhotoProps = {
  id: PhotoId;
  alt: string;
  /** Caption shown inside the placeholder; falls back to `alt`. */
  label?: string;
  ratio?: string;
  className?: string;
  /** dark = light caption on a deep gradient (for placeholders over dark UI). */
  tone?: "dark" | "light";
};

export function Photo({ id, alt, label, ratio = "4 / 5", className, tone = "dark" }: PhotoProps) {
  const src = PHOTOS[id];
  if (src) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={src}
        alt={alt}
        className={"rx-photo" + (className ? " " + className : "")}
        style={{ aspectRatio: ratio }}
      />
    );
  }
  return (
    <div
      className={"rx-ph rx-ph--" + tone + (className ? " " + className : "")}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={alt}
    >
      <span className="rx-ph-grain" aria-hidden="true" />
      <span className="rx-ph-body">
        <span className="rx-ph-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 17l4.5-4 3 2.5L16 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="rx-ph-label">{label ?? alt}</span>
        <span className="rx-ph-tag">photo slot · {id}</span>
      </span>
    </div>
  );
}
