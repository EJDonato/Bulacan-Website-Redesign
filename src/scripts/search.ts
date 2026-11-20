import { feedback } from './feedback';

// Visual only (PRD §3): the form never submits anywhere and nothing is stored.
const form = document.querySelector<HTMLFormElement>('[data-search-form]');
const message = document.querySelector<HTMLElement>('[data-search-message]');
const panel = document.getElementById('search-panel');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = "Search isn't available in this concept.";
    feedback.error(form);
  });

  panel?.addEventListener('toggle', (event) => {
    if ((event as ToggleEvent).newState === 'closed') {
      message.textContent = '';
      form.reset();
    }
  });
}
