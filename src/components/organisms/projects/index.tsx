"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/portfolio";

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

  const categories = useMemo(() => {
    return ["Featured", "All"].filter(
      (category, index, list) => list.indexOf(category) === index,
    );
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
          currentProjects.map((project, i) => (
            <div
              key={project.title}
              className="proj"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div
                className="thumb"
                style={
                  project.img
                    ? {
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                {project.img ? null : initials(project.title)}
              </div>
              <div className="p-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.stack?.length ? (
                  <div className="p-tags">
                    {project.stack.slice(0, 6).map((tag) => (
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
                {project.git ? (
                  <a href={project.git} target="_blank" rel="noopener">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ))
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
    </section>
  );
}
