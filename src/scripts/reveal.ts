// Scroll reveal (system-design §6.3). Mark an element `data-reveal` and it fades and rises into view once.
// Put `data-reveal-stagger` on a parent to stagger its direct children (each gets --i, one --stagger apart).
// Only opacity and translate animate. Without JS, or when IntersectionObserver is missing, everything stays visible.

const parents = document.querySelectorAll<HTMLElement>('[data-reveal-stagger]');
for (const parent of parents) {
  [...parent.children].forEach((child, i) => {
    (child as HTMLElement).dataset.reveal = '';
    (child as HTMLElement).style.setProperty('--i', String(i));
  });
}

const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-revealed'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  targets.forEach((el) => observer.observe(el));
}
