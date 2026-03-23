const initNav = () => {
  const toggle = document.querySelector<HTMLElement>('[data-nav-toggle]');
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  const workDropdown = document.querySelector<HTMLElement>('[data-work-dropdown]');
  const workToggle = document.querySelector<HTMLButtonElement>('[data-work-toggle]');
  if (!toggle || !drawer) return;

  const closeWorkMenu = () => {
    if (!workDropdown || !workToggle) return;
    workDropdown.classList.remove('is-open');
    workToggle.setAttribute('aria-expanded', 'false');
  };

  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    closeWorkMenu();
  };

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  if (workDropdown && workToggle) {
    workToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = workDropdown.classList.toggle('is-open');
      workToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (
      drawer.contains(target)
      || toggle.contains(target)
      || (workDropdown?.contains(target) ?? false)
    ) return;
    closeNav();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 980) closeNav();
  });
};

const initRotators = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const rotators = document.querySelectorAll<HTMLElement>('[data-rotator]');
  rotators.forEach((rotator) => {
    const words = JSON.parse(rotator.dataset.words ?? '[]') as string[];
    if (words.length < 2) return;

    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % words.length;
      rotator.classList.add('is-swapping');
      window.setTimeout(() => {
        rotator.textContent = words[index];
        rotator.classList.remove('is-swapping');
      }, 220);
    }, 2800);
  });
};

const initReveal = () => {
  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!nodes.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  nodes.forEach((node) => observer.observe(node));
};

const initCurrentYear = () => {
  document.querySelectorAll<HTMLElement>('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
};

const initSkillsCarousel = () => {
  const carousels = document.querySelectorAll<HTMLElement>('[data-skills-carousel]');
  if (!carousels.length) return;

  const getPageSize = () => {
    if (window.innerWidth <= 759) return 1;
    if (window.innerWidth <= 1080) return 2;
    return 3;
  };

  carousels.forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('[data-skills-track]');
    const prevButton = carousel.querySelector<HTMLButtonElement>('[data-skills-prev]');
    const nextButton = carousel.querySelector<HTMLButtonElement>('[data-skills-next]');
    if (!track || !prevButton || !nextButton) return;

    const slides = Array.from(track.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
    if (!slides.length) return;

    let pageIndex = 0;
    let resizeTimer: number | undefined;

    const update = () => {
      const pageSize = getPageSize();
      const totalPages = Math.max(1, Math.ceil(slides.length / pageSize));
      pageIndex = Math.min(pageIndex, totalPages - 1);

      const slideWidth = slides[0]?.getBoundingClientRect().width ?? 0;
      const gapValue = window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || '0';
      const gap = Number.parseFloat(gapValue) || 0;
      const offset = pageIndex * (slideWidth + gap) * pageSize;

      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      prevButton.disabled = pageIndex === 0;
      nextButton.disabled = pageIndex >= totalPages - 1;
      carousel.classList.toggle('is-static', totalPages === 1);
    };

    prevButton.addEventListener('click', () => {
      pageIndex = Math.max(0, pageIndex - 1);
      update();
    });

    nextButton.addEventListener('click', () => {
      const totalPages = Math.max(1, Math.ceil(slides.length / getPageSize()));
      pageIndex = Math.min(totalPages - 1, pageIndex + 1);
      update();
    });

    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(update, 120);
    });

    update();
  });
};

export const initSite = () => {
  initNav();
  initRotators();
  initReveal();
  initCurrentYear();
  initSkillsCarousel();
};
