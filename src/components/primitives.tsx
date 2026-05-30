import { ArrowRight } from "lucide-react";

export function ArrowBtn({
  children,
  href,
  variant = "primary",
  large = false,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "ink" | "on-dark";
  large?: boolean;
}) {
  const cls =
    variant === "ghost"
      ? "btn btn-ghost"
      : variant === "ink"
      ? "btn btn-ink"
      : variant === "on-dark"
      ? "btn btn-on-dark"
      : "btn btn-primary";

  return (
    <a className={`${cls}${large ? " btn-lg" : ""}`} href={href}>
      {children}
      <ArrowRight aria-hidden="true" className="size-[14px]" strokeWidth={2.2} />
    </a>
  );
}

export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${onDark ? "eyebrow-on-dark" : ""} ${className}`}>
      <span className="dot" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  onDark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div>
      {eyebrow ? (
        <div className="mb-[18px]">
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <div
        className="grid items-end gap-10 border-b pb-9 mb-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
        style={{ borderColor: onDark ? "rgba(248,250,252,.25)" : "var(--color-ink)" }}
      >
        <h2
          className="display"
          style={{
            fontSize: "clamp(36px, 5.5vw, 88px)",
            color: onDark ? "#f8fafc" : "var(--color-ink)",
          }}
        >
          {title}
        </h2>
        {description ? (
          <p
            className="max-w-[540px] font-serif italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: onDark ? "rgba(248,250,252,.72)" : "var(--color-ink-soft)",
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
