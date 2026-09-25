"use client";

import { useState } from "react";
import Image from "next/image";
import type { SocialMedia } from "@/types/portfolio";
import mine from "@/data/images/mine.jpeg";

type SidebarProps = {
  social: SocialMedia[];
};

function socialLabel(link: string) {
  if (link.includes("github")) return "GitHub";
  if (link.includes("linkedin")) return "LinkedIn";
  return "Social";
}

function SocialIcon({ link }: { link: string }) {
  if (link.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    );
  }

  if (link.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM.5 8.99h4.96V23H.5V8.99zM8.79 8.99h4.75v1.92h.07c.66-1.25 2.28-2.57 4.69-2.57 5.02 0 5.95 3.3 5.95 7.6V23h-4.96v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V23H8.79V8.99z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93" />
      <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.07" />
    </svg>
  );
}

export function Sidebar({ social }: SidebarProps) {
  const [emailLabel, setEmailLabel] = useState("Copy my email address");

  const handleCopyEmail = () => {
    const email = "your.email@example.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailLabel("Copied — " + email);
      })
      .catch(() => {
        setEmailLabel(email);
      });
  };

  return (
    <aside className="sidebar sidebar-animate">
      {/* Avatar with spinning dash arc */}
      <div className="avatar-frame">
        <span className="dash d1" aria-hidden="true" />
        <div className="avatar-photo-clip avatar-scale-in">
          <Image
            src={mine}
            alt="Aamil Shafi"
            fill
            className="avatar-photo"
            priority
            sizes="300px"
          />
        </div>
      </div>

      {/* Name + badge */}
      <div className="name sidebar-fade-d1">
        Aamil Shafi
        <span className="badge" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2c0 4-4 5-4 9a4 4 0 008 0c0-2-1-3-1-5 2 1 3 3 3 6a6 6 0 11-12 0c0-5 4-6 6-10z"
              fill="#fff"
            />
          </svg>
        </span>
      </div>

      {/* Bio */}
      <p className="bio sidebar-fade-d2">
        Software engineer building fast, reliable products for product-based
        startups — from React interfaces to Node.js backends.
      </p>

      {/* Social links */}
      <div className="socials sidebar-fade-d3">
        {social.map((item) => (
          <a
            key={item.id ?? item.link}
            href={item.link}
            target="_blank"
            rel="noopener"
            aria-label={socialLabel(item.link)}
          >
            <SocialIcon link={item.link} />
          </a>
        ))}
        <a href="#contact" aria-label="Contact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18v12H3z" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
      </div>

      {/* Copy email */}
      <button
        className="email-copy sidebar-fade-d4"
        onClick={handleCopyEmail}
        type="button"
      >
        <span>{emailLabel}</span>
        <span aria-hidden="true">⧉</span>
      </button>
    </aside>
  );
}
