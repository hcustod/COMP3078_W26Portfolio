/** @jsxImportSource preact */
import { useMemo, useState } from 'preact/hooks';

export interface ExplorerProject {
  slug: string;
  title: string;
  track: string;
  category: string;
  summary: string;
  tech: string[];
  imageSrc: string;
  code: string;
  demo?: string;
  docker?: string;
  features: string[];
}

interface Props {
  projects: ExplorerProject[];
  detailMode?: boolean;
  initialCount?: number;
}

export default function ProjectsExplorerClient({
  projects,
  detailMode = false,
  initialCount = 6,
}: Props) {
  const [query, setQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const tracks = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.track)))],
    [projects]
  );

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTrack = selectedTrack === 'All' || project.track === selectedTrack;
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const searchSpace = [
        project.title,
        project.track,
        project.category,
        project.summary,
        project.tech.join(' '),
        project.features.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchSpace.includes(normalizedQuery);
      return matchesTrack && matchesCategory && matchesQuery;
    });
  }, [projects, query, selectedTrack, selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const resetVisibleCount = () => setVisibleCount(initialCount);

  const handleTrackChange = (track: string) => {
    setSelectedTrack(track);
    resetVisibleCount();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    resetVisibleCount();
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    resetVisibleCount();
  };

  return (
    <div class="project-toolbar">
      <div class="project-toolbar-row">
        <label class="search-field">
          <span class="sr-only">Search projects</span>
          <svg class="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm8 2-3.5-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
          <input
            type="search"
            placeholder="Search title, tech, or feature"
            value={query}
            onInput={(event) => handleQueryChange((event.currentTarget as HTMLInputElement).value)}
          />
        </label>
        <div class="project-filter-groups">
          <div class="project-filter-group">
            <span class="project-filter-label">Work type</span>
            <div class="project-filters" role="tablist" aria-label="Project work types">
              {tracks.map((track) => {
                const isActive = track === selectedTrack;
                return (
                  <button
                    key={track}
                    class={`filter-chip${isActive ? ' is-active' : ''}`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleTrackChange(track)}
                  >
                    {track}
                  </button>
                );
              })}
            </div>
          </div>
          <div class="project-filter-group">
            <span class="project-filter-label">Category</span>
            <div class="project-filters" role="tablist" aria-label="Project categories">
              {categories.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <button
                    key={category}
                    class={`filter-chip${isActive ? ' is-active' : ''}`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div class="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.slug} class="project-card">
            <a class="project-image-link" href={project.demo ?? project.code} target="_blank" rel="noreferrer">
              <img src={project.imageSrc} alt={project.title} loading="lazy" />
            </a>
            <div class="project-card-body">
              <div class="project-meta-row">
                <span class="tag-chip tag-chip-accent">{project.track}</span>
                <span class="tag-chip">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div class="tech-row">
                {project.tech.map((tech) => (
                  <span key={`${project.slug}-${tech}`} class="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div class="project-links">
                {project.demo && (
                  <a class="project-link-button project-link-button-primary" href={project.demo} target="_blank" rel="noreferrer">
                    <span>Live Demo</span>
                  </a>
                )}
                <a class="project-link-button" href={project.code} target="_blank" rel="noreferrer">
                  <span>Source Code</span>
                </a>
                {project.docker && (
                  <a class="project-link-button" href={project.docker} target="_blank" rel="noreferrer">
                    <span>Docker Image</span>
                  </a>
                )}
              </div>
              {detailMode && (
                <div class="detail-stack">
                  <div>
                    <h4>Key features</h4>
                    <ul class="bullet-list compact">
                      {project.features.map((feature) => (
                        <li key={`${project.slug}-${feature}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {!filteredProjects.length && (
        <div class="empty-state">
          <p>No projects matched the current search and filter combination.</p>
        </div>
      )}

      {filteredProjects.length > visibleProjects.length && (
        <div class="toolbar-actions">
          <button class="button-secondary" type="button" onClick={() => setVisibleCount((count) => count + initialCount)}>
            <span>Load more</span>
          </button>
        </div>
      )}
    </div>
  );
}
