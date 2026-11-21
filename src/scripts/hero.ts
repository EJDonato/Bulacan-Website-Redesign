// Hero carousel controls (system-design §5.1, design-system §9.5).
// The track is natively scrollable and snaps; this only adds prev/next, the progress scrubber and polite
// announcements. Slides never advance on their own. Everything is driven from the real scroll position.

const root = document.querySelector<HTMLElement>('[data-hero]');
const track = root?.querySelector<HTMLElement>('[data-hero-track]') as HTMLElement;

if (root && track) {
  const slides = [...track.children] as HTMLElement[];
  const total = slides.length;
  const segs = [...root.querySelectorAll<HTMLElement>('.hero__seg')];
  const scrub = root.querySelector<HTMLInputElement>('[data-hero-scrub]')!;
  const prev = root.querySelector<HTMLButtonElement>('[data-hero-prev]')!;
  const next = root.querySelector<HTMLButtonElement>('[data-hero-next]')!;
  const status = root.querySelector<HTMLElement>('[data-hero-status]')!;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  let ready = false;
  let current = 0; // slide the UI shows
  let settled = 0; // last slide announced
  let target: number | null = null; // slide a click or key is scrolling to
  let userMoved = false;
  let frame = 0;

  const indexFromScroll = () => Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth)));
  const describe = (i: number) => `Slide ${i + 1} of ${total}: ${slides[i].dataset.title ?? ''}`;

  function render(i: number) {
    if (i === current && ready) return;
    current = i;
    scrub.value = String(i + 1);
    scrub.setAttribute('aria-valuetext', describe(i));
    segs.forEach((seg, j) => {
      seg.classList.toggle('is-done', j <= i);
      seg.classList.toggle('is-current', j === i);
    });
    slides.forEach((slide, j) => slide.classList.toggle('is-active', j === i));

    // A disabled control must never hold focus: hand it to the opposite one.
    prev.disabled = i === 0;
    next.disabled = i === total - 1;
    if (prev.disabled && document.activeElement === prev) next.focus();
    if (next.disabled && document.activeElement === next) prev.focus();
  }

  function goTo(i: number, byUser = true) {
    const to = Math.min(total - 1, Math.max(0, i));
    target = to;
    if (byUser) userMoved = true;
    render(to); // the UI answers when the user decides, not when the slide lands
    track.scrollTo({ left: to * track.clientWidth, behavior: reduced.matches ? 'instant' : 'smooth' });
  }

  function onSettled() {
    target = null;
    const i = indexFromScroll();
    render(i);
    if (i !== settled) {
      settled = i;
      // Stay silent on initial load; announce only after the user moved the carousel.
      if (userMoved) status.textContent = describe(i);
    }
  }

  track.addEventListener(
    'scroll',
    () => {
      if (target !== null || frame) return; // a scripted scroll already updated the UI
      frame = requestAnimationFrame(() => {
        frame = 0;
        render(indexFromScroll());
      });
    },
    { passive: true },
  );

  // A direct swipe or key press counts as user movement too.
  track.addEventListener('pointerdown', () => (userMoved = true), { passive: true });
  track.addEventListener('keydown', () => (userMoved = true));

  if ('onscrollend' in window) {
    track.addEventListener('scrollend', onSettled);
  } else {
    let t = 0;
    track.addEventListener('scroll', () => {
      clearTimeout(t);
      t = window.setTimeout(onSettled, 120);
    });
  }

  prev.addEventListener('click', () => goTo((target ?? current) - 1));
  next.addEventListener('click', () => goTo((target ?? current) + 1));
  scrub.addEventListener('input', () => goTo(Number(scrub.value) - 1));

  // Keep the position when the width changes (rotation, resize).
  new ResizeObserver(() => {
    if (target === null) track.scrollTo({ left: current * track.clientWidth, behavior: 'instant' });
  }).observe(track);

  render(0);
  ready = true;
  scrub.setAttribute('aria-valuetext', describe(0));

  // Auto-advance every 3 seconds; pause on hover, focus, hidden tab, or reduced motion.
  const INTERVAL_MS = 3000;
  let timer = 0;
  let paused = false;

  const stopTimer = () => {
    clearInterval(timer);
    timer = 0;
  };
  const startTimer = () => {
    stopTimer();
    if (paused || reduced.matches || document.hidden) return;
    timer = window.setInterval(() => {
      goTo((current + 1) % total, false);
    }, INTERVAL_MS);
  };

  root.addEventListener('pointerenter', () => { paused = true; stopTimer(); });
  root.addEventListener('pointerleave', () => { paused = false; startTimer(); });
  root.addEventListener('focusin', () => { paused = true; stopTimer(); });
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget as Node | null)) { paused = false; startTimer(); }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTimer(); else startTimer();
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) stopTimer(); else startTimer();
  });

  startTimer();
}

export {};
