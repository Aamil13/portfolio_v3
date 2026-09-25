import { Reveal } from "@/components/atoms/reveal";

export function Hero({isOpenToWork}:{isOpenToWork:boolean}) {
  return (
    <section id="home">
      {/* Headings animate in on mount — they're above the fold so no IO needed */}
      <h1
        className="h-big hero-h1"
        style={{ animationDelay: "0.05s" }}
      >
        SOFTWARE
      </h1>
      <h1
        className="h-big ghost hero-h1"
        style={{ animationDelay: "0.18s" }}
      >
        ENGINEER
      </h1>

      <Reveal className="reveal-d1">
        <p className="lede">
          Hi, I&apos;m Aamil — a software engineer with hands-on experience
          across product-based startups, currently working as an SDE‑1 building
          real-time, full-stack products.
        </p>
      </Reveal>


{
  isOpenToWork ?
 <Reveal className="reveal-d2">
        <div className="open-to-work-badge">
          <span className="otw-dot" />
          Open to work — let&apos;s talk
        </div>
      </Reveal> : null
}
     

      <Reveal className="reveal-d3">
        <div className="stats">
          <div className="stat stat-animate">
            <b>2.6+</b>
            <span>Years of Experience</span>
          </div>
        </div>
      </Reveal>

      <div className="feature-row">
        <Reveal className="reveal-d1">

          <div className="feature orange">
            <svg
              className="ficon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0c0b0a"
              strokeWidth="1.8"
            >
              <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
            </svg>
            <div className="flabel">
              Real-time features:
              <br />
              Socket.IO, Redis, BullMQ
            </div>
            <span className="arrow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0c0b0a"
                strokeWidth="2"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </div>
        </Reveal>

        <Reveal className="reveal-d2">
          <div className="feature lime">
            <svg
              className="ficon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0c0b0a"
              strokeWidth="1.8"
            >
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M8 21h8M12 18v3" />
            </svg>
            <div className="flabel">React, Next.js, Node.js, AWS</div>
            <span className="arrow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0c0b0a"
                strokeWidth="2"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
