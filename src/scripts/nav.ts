// Header navigation behavior (modern-web-guidance: navbar). See Header.astro / header.css.

// Popover is only Newly available: load the polyfill when it's missing. Never the `popover` IDL property
// (it would not be mirrored as an attribute before the polyfill loads).
if (!Object.hasOwn(HTMLElement.prototype, 'popover')) {
  import('@oddbird/popover-polyfill');
}

// :is() so browsers without :popover-open (polyfilled ones use a class) don't reject the whole selector.
const isOpen = (el: HTMLElement) => el.matches(':is(:popover-open, .\\:popover-open)');

const header = document.querySelector<HTMLElement>('[data-site-header]');
const inner = document.querySelector<HTMLElement>('[data-header-inner]');

if (header && inner) {
  const dropdowns = [...header.querySelectorAll<HTMLElement>('.dropdown')];

  /* ---------- Wide or collapsed: decided by whether the inline row fits ---------- */

  let lastWidth = 0;

  const measure = () => {
    const width = header.clientWidth;
    const wasWide = header.classList.contains('is-wide');
    // While collapsed, only remeasure when there is more room than last time; otherwise every shrink
    // would flip to inline just to measure and thrash.
    if (!wasWide && width <= lastWidth) {
      lastWidth = width;
      return;
    }
    lastWidth = width;

    header.classList.add('is-measuring'); // no transitions while measuring
    header.classList.add('is-wide');
    const fits = inner.scrollWidth <= inner.clientWidth;
    header.classList.toggle('is-wide', fits);
    requestAnimationFrame(() => header.classList.remove('is-measuring'));

    inner.setAttribute('data-ready', '');
    if (fits && !wasWide) document.dispatchEvent(new CustomEvent('site-nav-wide'));
    if (!fits) closeAll();
  };

  const closeAll = () => {
    for (const menu of dropdowns) {
      if (isOpen(menu)) menu.hidePopover();
    }
  };

  new ResizeObserver(measure).observe(header);
  document.fonts?.ready.then(() => {
    lastWidth = 0; // fonts change text widths: force a full remeasure
    measure();
  });
  measure();

  /* ---------- Dropdowns ---------- */

  const canHover = matchMedia('(hover: hover)');
  const supportsAnchor = CSS.supports('position-area', 'block-end');

  for (const li of header.querySelectorAll<HTMLElement>('.nav-item--dropdown')) {
    const trigger = li.querySelector<HTMLButtonElement>('.nav-trigger')!;
    const menu = li.querySelector<HTMLElement>('.dropdown')!;
    let previewed = false; // opened by hover only, not yet pinned by a click

    // The native toggle event is the source of truth for aria-expanded.
    menu.addEventListener('toggle', (event) => {
      const open = (event as ToggleEvent).newState === 'open';
      trigger.setAttribute('aria-expanded', String(open));
      if (!open) previewed = false;
      if (open && !supportsAnchor) placeWithoutAnchor(trigger, menu);
    });

    // Hover preview: mouse only, wide layout only. Keyboard focus never opens a menu; Enter/Space does.
    li.addEventListener('pointerenter', (event) => {
      if (!canHover.matches || event.pointerType === 'touch' || !header.classList.contains('is-wide')) return;
      if (isOpen(menu)) return;
      previewed = true;
      (menu as any).showPopover({ source: trigger });
    });
    li.addEventListener('pointerleave', () => {
      if (previewed) {
        previewed = false;
        menu.hidePopover();
      }
    });

    // Clicking while previewing pins the menu open instead of toggling it closed.
    trigger.addEventListener('click', (event) => {
      if (previewed) {
        previewed = false;
        event.preventDefault();
      }
    });

    // Tabbing or Shift+Tabbing out of the whole item closes it.
    li.addEventListener('focusout', (event) => {
      const next = event.relatedTarget as Node | null;
      if (next && !li.contains(next) && isOpen(menu)) menu.hidePopover();
    });
  }
}

/** No Anchor Positioning (Firefox): place the dropdown under its trigger, flipping above and clamping to the viewport. */
function placeWithoutAnchor(trigger: HTMLElement, menu: HTMLElement) {
  const t = trigger.getBoundingClientRect();
  const m = menu.getBoundingClientRect();
  const top = t.bottom + m.height > innerHeight ? Math.max(0, t.top - m.height) : t.bottom;
  const left = Math.min(Math.max(0, t.left), Math.max(0, innerWidth - m.width));
  menu.style.top = `${top}px`;
  menu.style.left = `${left}px`;
}
