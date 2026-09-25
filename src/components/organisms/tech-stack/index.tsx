import { Reveal } from "@/components/atoms/reveal";
import type { TechStackGroup } from "@/types/portfolio";

type TechStackProps = {
  groups: TechStackGroup[];
};

const DELAY_CLASSES = [
  "reveal-d1",
  "reveal-d2",
  "reveal-d3",
  "reveal-d4",
  "reveal-d5",
] as const;

export function TechStack({ groups }: TechStackProps) {
  if (!groups.length) return null;

  return (
    <section id="stack">
      <Reveal>
        <div className="eyebrow-line">Tech stack</div>
      </Reveal>

      <Reveal className="reveal-d1">
        <h2 className="h-big" style={{ fontSize: "clamp(30px, 5vw, 48px)" }}>
          Tools I work with
        </h2>
      </Reveal>

      <div className="stack">
        {groups.map((group, i) => (
          <Reveal
            key={group.title}
            className={`stack-group ${DELAY_CLASSES[i % DELAY_CLASSES.length]}`}
          >
            <h4>{group.title}</h4>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
