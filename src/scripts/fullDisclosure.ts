// Full Disclosure Report: show one year at a time (deep-linkable by #fdr-YYYY) and filter its documents.
// Without script every year is on the page and the chips are plain anchors.
const root = document.querySelector<HTMLElement>('[data-fdr]');

if (root) {
  const chips = [...root.querySelectorAll<HTMLAnchorElement>('[data-fdr-year]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-fdr-panel]')];
  const find = root.querySelector<HTMLElement>('[data-fdr-find]')!;
  const input = find.querySelector('input')!;
  const status = root.querySelector<HTMLElement>('[data-fdr-status]')!;
  const empty = root.querySelector<HTMLElement>('[data-fdr-empty]')!;
  const years = panels.map((p) => p.dataset.fdrPanel!);

  find.hidden = false;
  let current = years[0];

  function filter() {
    const q = input.value.trim().toLowerCase();
    const panel = panels.find((p) => p.dataset.fdrPanel === current)!;
    let shown = 0;
    panel.querySelectorAll<HTMLElement>('[data-fdr-item]').forEach((item) => {
      const match = !q || (item.textContent ?? '').toLowerCase().includes(q);
      item.hidden = !match;
      if (match) shown++;
    });
    panel.querySelectorAll<HTMLElement>('[data-fdr-block]').forEach((block) => {
      block.hidden = !!q && !block.querySelector('[data-fdr-item]:not([hidden])');
    });
    status.textContent = q ? `${shown} ${shown === 1 ? 'report' : 'reports'} found in ${current}` : '';
    empty.hidden = !q || shown > 0;
  }

  function show(year: string) {
    if (!years.includes(year)) year = years[0];
    current = year;
    panels.forEach((p) => (p.hidden = p.dataset.fdrPanel !== year));
    chips.forEach((c) =>
      c.dataset.fdrYear === year ? c.setAttribute('aria-current', 'true') : c.removeAttribute('aria-current'),
    );
    filter();
  }

  chips.forEach((chip) =>
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const year = chip.dataset.fdrYear!;
      history.replaceState(null, '', `#fdr-${year}`);
      show(year);
    }),
  );
  input.addEventListener('input', filter);

  const fromHash = () => (location.hash.match(/^#fdr-(\d{4})$/) ?? [])[1];
  window.addEventListener('hashchange', () => show(fromHash() ?? years[0]));
  show(fromHash() ?? years[0]);
}
