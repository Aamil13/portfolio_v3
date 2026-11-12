"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project } from "@/types/portfolio";

type CarouselState = {
  images: string[];
  index: number;
  title: string;
};


type ProjectsProps = {
  items: Project[];
};

const itemsPerPage = 4;

function initials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function Projects({ items: projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [carousel, setCarousel] = useState<CarouselState | null>(null);

  const openCarousel = (project: Project, startIndex = 0) => {
    if (!project.img?.length) return;
    setCarousel({ images: project.img, index: startIndex, title: project.title });
  };

  const closeCarousel = useCallback(() => setCarousel(null), []);

  const goNext = useCallback(() => {
    setCarousel((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev,
    );
  }, []);

  const goPrev = useCallback(() => {
    setCarousel((prev) =>
      prev
        ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }
        : prev,
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!carousel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [carousel, closeCarousel, goNext, goPrev]);

  const categories = useMemo(() => {
    const fixed = ["Featured", "All", "Backend", "Mobile"];
 
  
    const all = [...fixed];
    return all.filter((c, i, list) => list.indexOf(c) === i);
  }, [projects]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.type?.includes(selectedCategory));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects">
      <div className="eyebrow-line">Projects</div>
      <h2 className="h-big" style={{ fontSize: "clamp(30px, 5vw, 48px)" }}>
        Selected work
      </h2>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? "active" : undefined}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects">
        {currentProjects.length ? (
          currentProjects.map((project, i) => {
            const isBackend = selectedCategory === "Backend";
            const displayStack = isBackend
              ? (project["be-stack"] ?? project.stack)
              : project.stack;
            const displayGit = isBackend
              ? (project["be-git"] ?? project.git)
              : project.git;
            const displayDescription = isBackend
              ? (project["be-description"] ?? project.description)
              : project.description;
            const displayImg = project.img?.[0];

            return (
              <div
                key={project.title}
                className="proj"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div
                  className={`thumb${displayImg ? " thumb-clickable" : ""}`}
                  style={
                    displayImg
                      ? {
                          backgroundImage: `url(${displayImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                  onClick={displayImg ? () => openCarousel(project, 0) : undefined}
                  role={displayImg ? "button" : undefined}
                  tabIndex={displayImg ? 0 : undefined}
                  aria-label={displayImg ? `View ${project.title} images` : undefined}
                  onKeyDown={
                    displayImg
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openCarousel(project, 0);
                          }
                        }
                      : undefined
                  }
                >
                  {displayImg ? null : initials(project.title)}
                </div>
                <div className="p-info">
                  <h3>{project.title}</h3>
                  <p>{displayDescription}</p>
                  {displayStack?.length ? (
                    <div className="p-tags flex flex-wrap">
                      {displayStack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="p-links">
                  {project.link ? (
                    <a
                      className="live"
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                    >
                      Live
                    </a>
                  ) : null}
                  {displayGit ? (
                    <a href={displayGit} target="_blank" rel="noopener">
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })
        ) : (
          <p className="project-empty">No projects in this category.</p>
        )}
      </div>

      {totalPages > 1 ? (
        <div className="project-pager">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                className={currentPage === page ? "active" : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ),
          )}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
          >
            Next
          </button>
        </div>
      ) : null}

      {/* ── Carousel modal ──────────────────────────────────────────── */}
      {carousel ? (
        <div
          className="carousel-overlay"
          onClick={closeCarousel}
          role="dialog"
          aria-modal="true"
          aria-label={`${carousel.title} image carousel`}
        >
          <div className="carousel-box" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              type="button"
              className="carousel-close"
              onClick={closeCarousel}
              aria-label="Close carousel"
            >
              ✕
            </button>

            {/* Image */}
            <div className="carousel-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={carousel.images[carousel.index]}
                src={carousel.images[carousel.index]}
                alt={`${carousel.title} — image ${carousel.index + 1} of ${carousel.images.length}`}
                className="carousel-img"
              />
            </div>

            {/* Nav arrows (only shown when >1 image) */}
            {carousel.images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow-prev"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow-next"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            ) : null}

            {/* Dots */}
            {carousel.images.length > 1 ? (
              <div className="carousel-dots">
                {carousel.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`carousel-dot${i === carousel.index ? " active" : ""}`}
                    onClick={() =>
                      setCarousel((prev) => (prev ? { ...prev, index: i } : prev))
                    }
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            ) : null}

            {/* Counter */}
            {carousel.images.length > 1 ? (
              <p className="carousel-counter">
                {carousel.index + 1} / {carousel.images.length}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
