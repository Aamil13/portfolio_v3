import { Reveal } from "@/components/atoms/reveal";
import type { GridItem } from "@/types/portfolio";

type AboutProps = {
  items: GridItem[];
};

const DELAY_CLASSES = [
  "reveal-d1",
  "reveal-d2",
  "reveal-d3",
  "reveal-d4",
  "reveal-d5",
] as const;

export function About({ items }: AboutProps) {
  return (
    <section id="about">
      <Reveal>
        <div className="eyebrow-line">About</div>
      </Reveal>

      <Reveal className="reveal-d1">
        <h2 className="h-big" style={{ fontSize: "clamp(30px, 5vw, 48px)" }}>
          Background
        </h2>
      </Reveal>

      <div className="about-grid">
        {items.map((item, i) => {
          // Flatten array of objects into [label, url] pairs
          const linkEntries = item.links
            ? item.links.flatMap((obj) => Object.entries(obj))
            : [];

          return (
            <Reveal
              key={item.id ?? item.title}
              className={DELAY_CLASSES[i % DELAY_CLASSES.length]}
            >
              <div className="info-card">
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
                {linkEntries.length > 0 ? (
                  <div className="info-card-links">
                    {linkEntries.map(([label, url]) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-card-link"
                      >
                        {label}
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
