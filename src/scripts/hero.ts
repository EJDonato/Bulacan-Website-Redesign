// Hero carousel controls (system-design §5.1, design-system §9.5).
// The track is natively scrollable and snaps; this only adds prev/next, the counter, the progress scrubber,
// an opt-in play/pause, and polite announcements. Everything is driven from the real scroll position.

const AUTO_MS = 7000;

const root = document.querySelector<HTMLElement>('[data-hero]');
const track = root?.querySelector<HTMLElement>('[data-hero-track]') as HTMLElement;

if (root && track) {
  const slides = [...track.children] as HTMLElement[];
  const total = slides.length;
  const segs = [...root.querySelectorAll<HTMLElement>('.hero__seg')];
  const counter = root.querySelector<HTMLElement>('[data-hero-current]')!;
  const scrub = root.querySelector<HTMLInputElement>('[data-hero-scrub]')!;
  const prev = root.querySelector<HTMLButtonElement>('[data-hero-prev]')!;
  const next = root.querySelector<HTMLButtonElement>('[data-hero-next]')!;
  const play = root.querySelector<HTMLButtonElement>('[data-hero-play]')!;
  const status = root.querySelector<HTMLElement>('[data-hero-status]')!;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  let ready = false;
  let current = 0; // slide the UI shows
  let settled = 0; // last slide announced
  let target: number | null = null; // slide a click or key is scrolling to
  let userMoved = false;
  let playing = false;
  let hovering = false;
  let timer = 0;
  let frame = 0;

  const indexFromScroll = () => Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth)));

  function render(i: number) {
    if (i === current && ready) return;
    current = i;
    counter.textContent = String(i + 1);
    scrub.value = String(i + 1);
    scrub.setAttribute('aria-valuetext', `Slide ${i + 1} of ${total}: ${slides[i].dataset.title ?? ''}`);
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

  function goTo(i: number, instant = false) {
    const to = Math.min(total - 1, Math.max(0, i));
    target = to;
    userMoved = true;
    render(to); // the UI answers when the user decides, not when the slide lands
    track.scrollTo({ left: to * track.clientWidth, behavior: instant || reduced.matches ? 'instant' : 'smooth' });
  }

  function onSettled() {
    target = null;
    const i = indexFromScroll();
    render(i);
    if (i !== settled) {
      settled = i;
      // Stay silent for initial load; announce only after the user moved the carousel.
      if (userMoved) status.textContent = `Slide ${i + 1} of ${total}: ${slides[i].dataset.title ?? ''}`;
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

  // ---- Optional auto-advance: off until the person starts it ----
  const frameEl = root.querySelector<HTMLElement>('.hero__frame')!;

  function schedule() {
    clearInterval(timer);
    if (!playing || hovering || document.hidden) return;
    timer = window.setInterval(() => {
      current === total - 1 ? goTo(0, true) : goTo(current + 1);
    }, AUTO_MS);
  }

  function setPlaying(on: boolean) {
    playing = on;
    play.dataset.playing = String(on);
    play.setAttribute('aria-label', on ? 'Pause automatic slide change' : 'Start automatic slide change');
    play.style.setProperty('--icon', on ? 'var(--icon-pause)' : 'var(--icon-play)');
    schedule();
  }

  play.addEventListener('click', () => setPlaying(!playing));
  // Never move a slide while someone is reading it or using the controls.
  frameEl.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hovering = true; schedule(); } });
  frameEl.addEventListener('pointerleave', () => { hovering = false; schedule(); });
  frameEl.addEventListener('focusin', () => { hovering = true; schedule(); });
  frameEl.addEventListener('focusout', () => { hovering = false; schedule(); });
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', () => reduced.matches && setPlaying(false));

  // Keep the position when the width changes (rotation, resize).
  new ResizeObserver(() => {
    if (target === null) track.scrollTo({ left: current * track.clientWidth, behavior: 'instant' });
  }).observe(track);

  render(0);
  ready = true;
  scrub.setAttribute('aria-valuetext', `Slide 1 of ${total}: ${slides[0].dataset.title ?? ''}`);
}

export {};
