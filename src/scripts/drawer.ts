// Navigation drawer behavior (modern-web-guidance: navigation-drawer). See MobileDrawer.astro / drawer.css.
const drawer = document.querySelector<HTMLDialogElement>('[data-drawer]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-drawer-open]');

if (drawer && openBtn) {
  const scroller = drawer.querySelector<HTMLElement>('.drawer-scroller')!;
  const sheet = drawer.querySelector<HTMLElement>('.drawer-sheet')!;
  const closeBtn = drawer.querySelector<HTMLButtonElement>('#drawer-close')!;

  // The sheet is the second column: scroll 0 is closed, the end of the scroller is open.
  const openDrawer = () => {
    drawer.showModal();
    scroller.scrollTo({ left: scroller.scrollWidth, behavior: 'auto' });
  };

  // Slide out by scrolling back to the spacer. The observer below closes the dialog once the sheet is
  // gone, so the exit animation stays visible.
  const closeDrawer = () => scroller.scrollTo({ left: 0, behavior: 'auto' });

  // Source of truth for state: how much of the sheet is visible, however it moved (swipe, button, snap).
  // "Fully open" is >= 0.98, not === 1: a settled sheet is often a fraction of a pixel short of 1.
  const visibleThreshold = 1 / window.innerWidth;
  const OPEN_RATIO = 0.98;
  new IntersectionObserver(
    (entries) => {
      const entry = entries.at(-1);
      if (!entry) return;
      if (entry.intersectionRatio < visibleThreshold && drawer.open) {
        drawer.close();
        openBtn.setAttribute('aria-expanded', 'false');
      }
      if (entry.intersectionRatio >= OPEN_RATIO) openBtn.setAttribute('aria-expanded', 'true');
    },
    { root: drawer, threshold: [visibleThreshold, OPEN_RATIO, 1] },
  ).observe(sheet);

  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);

  // Light dismiss: a tap on the dimmed area. closedby="any" would close without the slide-out.
  drawer.addEventListener('click', (event) => {
    if (!sheet.contains(event.target as Node)) closeDrawer();
  });

  // Escape: slide out instead of closing instantly. (Browsers may make repeated cancels non-cancelable.)
  drawer.addEventListener('cancel', (event) => {
    if (event.cancelable) {
      event.preventDefault();
      closeDrawer();
    }
  });

  // Fallback for browsers without scroll-driven animations: write the scrim value from scroll position.
  if (!CSS.supports('animation-timeline: scroll()')) {
    scroller.addEventListener('scroll', () => {
      drawer.style.setProperty('--drawer-backdrop', String(scroller.scrollLeft / sheet.offsetWidth));
    });
  }

  // Accordion sections inside the sheet. A button + hidden panel, not <details>/<summary>: summary is
  // announced inconsistently by screen readers.
  drawer.addEventListener('click', (event) => {
    const trigger = (event.target as Element).closest<HTMLButtonElement>('[data-accordion]');
    if (!trigger) return;
    const panel = document.getElementById(trigger.getAttribute('aria-controls') ?? '');
    if (!panel) return;
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
  });

  // If the header switches to the inline nav while the drawer is open, close it right away.
  document.addEventListener('site-nav-wide', () => {
    if (drawer.open) {
      drawer.close();
      openBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
