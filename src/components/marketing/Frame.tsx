/* Browser frame around a real product screenshot */
export function Frame({
  src,
  alt,
  url = "app.theprogramsuite.com",
  flush = false,
}: {
  src: string;
  alt: string;
  url?: string;
  flush?: boolean;
}) {
  return (
    <div className={"frame" + (flush ? " frame--flush" : "")}>
      <div className="frame-bar">
        <span className="frame-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame-url">{url}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="frame-img" src={src} alt={alt} loading="lazy" />
    </div>
  );
}

/* Placeholder for a module screenshot we don't have yet */
export function ShotPlaceholder({ title, note }: { title: string; note: string }) {
  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame-url">app.theprogramsuite.com</span>
      </div>
      <div className="shot-ph">
        <div className="tag">
          <b>{title}</b>
          {note}
        </div>
      </div>
    </div>
  );
}
