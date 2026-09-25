import { Reveal } from "@/components/atoms/reveal";
import type { WorkExperience } from "@/types/portfolio";

type ExperienceProps = {
  items: WorkExperience[];
};

function parseExperienceTitle(title: string) {
  const match = title.match(/^(.*?)\s+at\s+(.*?)\s+\((.*?)\)$/);

  if (!match) {
    return { role: title, company: "", period: "" };
  }

  return {
    role: match[1],
    company: match[2],
    period: match[3],
  };
}

const DELAY_CLASSES = [
  "reveal-d1",
  "reveal-d2",
  "reveal-d3",
  "reveal-d4",
  "reveal-d5",
] as const;

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience">
      <Reveal>
        <div className="eyebrow-line">Experience</div>
      </Reveal>

      <Reveal className="reveal-d1">
        <h2 className="h-big" style={{ fontSize: "clamp(30px, 5vw, 48px)" }}>
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="timeline">
        {items.map((item, i) => {
          const { role, company, period } = parseExperienceTitle(item.title);

          return (
            <Reveal
              key={item.id ?? item.title}
              as="div"
              className={`tl-item ${DELAY_CLASSES[i % DELAY_CLASSES.length]}`}
            >
              <div className="tl-main">
                <h3>{role}</h3>
                {company ? <div className="role-co">{company}</div> : null}
                <ul>
                  {item.desc.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.links && item.links.length > 0 ? (
                  <div className="info-card-links" style={{ marginTop: "14px" }}>
                    {item.links
                      .flatMap((obj) => Object.entries(obj))
                      .map(([label, url]) => (
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
              {period ? <div className="tl-date">{period}</div> : null}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
