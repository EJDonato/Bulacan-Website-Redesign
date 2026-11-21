// "Find" box for a list. Markup (all hooks are data attributes, so any page can use it):
//   <div data-filter>
//     <div data-filter-box hidden> <input data-filter-input> <p data-filter-status></p> </div>
//     <ul> <li data-filter-item>...</li> </ul>
//     <p data-filter-empty hidden>...</p>
//   </div>
// The box is hidden until this script runs, so without script the full list is simply shown.
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

document.querySelectorAll<HTMLElement>('[data-filter]').forEach((root) => {
  const box = root.querySelector<HTMLElement>('[data-filter-box]');
  const input = root.querySelector<HTMLInputElement>('[data-filter-input]');
  const status = root.querySelector<HTMLElement>('[data-filter-status]');
  const empty = root.querySelector<HTMLElement>('[data-filter-empty]');
  const noun = root.dataset.filter || 'results';
  const items = [...root.querySelectorAll<HTMLElement>('[data-filter-item]')];
  if (!input || !box) return;

  const text = items.map((el) => fold(el.textContent ?? ''));
  box.hidden = false;

  const run = () => {
    const words = fold(input.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    items.forEach((el, i) => {
      const match = words.every((w) => text[i].includes(w));
      el.hidden = !match;
      if (match) shown++;
    });
    if (status) status.textContent = words.length ? `${shown} of ${items.length} ${noun}` : '';
    if (empty) empty.hidden = shown > 0;
  };
  input.addEventListener('input', run);
});
