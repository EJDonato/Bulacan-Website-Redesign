/**
 * Visual-only feedback (system-design §6.4). No sound and no haptics, by design.
 * `data-feedback` drives color and outline changes in CSS, so the state is visible even when motion is reduced.
 */
const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const RESET_MS = 1600;
const timers = new WeakMap<HTMLElement, number>();

function mark(el: HTMLElement, state: 'error' | 'success') {
  el.setAttribute('data-feedback', state);
  clearTimeout(timers.get(el));
  timers.set(el, window.setTimeout(() => el.removeAttribute('data-feedback'), RESET_MS));
}

export const feedback = {
  /** Short horizontal shake (about 300ms) plus an error state. */
  error(el: HTMLElement) {
    mark(el, 'error');
    if (prefersReducedMotion()) return;
    el.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-8px)' },
        { transform: 'translateX(8px)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(-3px)' },
        { transform: 'translateX(0)' },
      ],
      { duration: 300, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    );
  },

  /** Brief pop plus a success state. */
  success(el: HTMLElement) {
    mark(el, 'success');
    if (prefersReducedMotion()) return;
    el.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.04)' }, { transform: 'scale(1)' }],
      { duration: 280, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    );
  },
};
