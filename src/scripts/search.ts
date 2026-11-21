import { feedback } from './feedback';
import { loadIndex, search } from './siteSearch';

// The header's search panel is site-only: suggestions come from the build-time index, and Enter goes to the
// highlighted suggestion (or the best match).
const form = document.querySelector<HTMLFormElement>('[data-search-form]');
const message = document.querySelector<HTMLElement>('[data-search-message]');
const list = document.querySelector<HTMLUListElement>('[data-search-results]');
const panel = document.getElementById('search-panel');
const input = form?.querySelector<HTMLInputElement>('input');

if (form && message && list && input) {
  let active = -1;
  let seq = 0;

  const options = () => [...list.querySelectorAll<HTMLElement>('[role="option"]')];
  const clear = () => {
    list.hidden = true;
    list.replaceChildren();
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
  };
  const setActive = (i: number) => {
    const opts = options();
    opts.forEach((o, j) => o.setAttribute('aria-selected', String(j === i)));
    active = i;
    if (opts[i]) {
      input.setAttribute('aria-activedescendant', opts[i].id);
      opts[i].scrollIntoView({ block: 'nearest' });
    } else input.removeAttribute('aria-activedescendant');
  };

  async function update() {
    const q = input!.value.trim();
    message!.textContent = '';
    if (!q) return clear();
    const mine = ++seq;
    const results = search(await loadIndex(), q, 6);
    if (mine !== seq) return; // a newer keystroke already replaced this
    list!.replaceChildren(
      ...results.map((r, i) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.id = `search-result-${i}`;
        li.setAttribute('aria-selected', 'false');
        const a = document.createElement('a');
        a.href = r.href;
        a.tabIndex = -1;
        const title = document.createElement('span');
        title.className = 'search-result-title';
        title.textContent = r.title;
        const kind = document.createElement('span');
        kind.className = 'search-result-kind';
        kind.textContent = r.kind;
        a.append(title, kind);
        li.append(a);
        return li;
      }),
    );
    if (!results.length) {
      const li = document.createElement('li');
      li.className = 'search-result-empty';
      li.textContent = `No results for "${q}".`;
      list!.append(li);
    }
    list!.hidden = false;
    input!.setAttribute('aria-expanded', 'true');
    active = -1;
    input!.removeAttribute('aria-activedescendant');
  }

  input.addEventListener('focus', () => void loadIndex());
  input.addEventListener('input', () => void update());
  input.addEventListener('keydown', (e) => {
    const n = options().length;
    if (e.key === 'ArrowDown' && n) {
      e.preventDefault();
      setActive((active + 1) % n);
    } else if (e.key === 'ArrowUp' && n) {
      e.preventDefault();
      setActive((active - 1 + n) % n);
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const q = input.value.trim();
    const picked = options()[Math.max(active, 0)]?.querySelector('a');
    if (picked) {
      location.href = picked.href;
      return;
    }
    const first = q ? search(await loadIndex(), q, 1)[0] : undefined;
    if (first) {
      location.href = first.href;
      return;
    }
    message.textContent = q ? '' : 'Type what you are looking for.';
    feedback.error(form);
    if (q) await update();
  });

  panel?.addEventListener('toggle', (event) => {
    if ((event as ToggleEvent).newState === 'closed') {
      message.textContent = '';
      form.reset();
      clear();
    }
  });
}
