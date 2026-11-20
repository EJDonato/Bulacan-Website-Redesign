// Governor's Message dialog (design-system §9.7.2). The native <dialog> does focus, Esc and focus return.
// The button already opens it declaratively (command="show-modal"); this adds the "grows out of the link"
// origin, a click fallback for browsers without invoker commands, and light dismiss where `closedby` is missing.

const dialog = document.querySelector<HTMLDialogElement>('[data-gov-dialog]');
const opener = document.querySelector<HTMLElement>('[data-gov-open]');

if (dialog && opener) {
  const hasCommands = 'commandForElement' in HTMLButtonElement.prototype;

  opener.addEventListener('click', () => {
    if (!hasCommands && !dialog.open) dialog.showModal();
    // Wait a frame so the dialog is open (declaratively or by the fallback above), then aim the origin at the link.
    requestAnimationFrame(() => {
      if (!dialog.open) return;
      const o = opener.getBoundingClientRect();
      const d = dialog.getBoundingClientRect();
      // Use the unscaled box: the dialog may already be mid-scale at this frame.
      const left = (d.left + d.right) / 2 - dialog.offsetWidth / 2;
      const top = (d.top + d.bottom) / 2 - dialog.offsetHeight / 2;
      dialog.style.setProperty('--ox', `${o.left + o.width / 2 - left}px`);
      dialog.style.setProperty('--oy', `${o.top + o.height / 2 - top}px`);
    });
    dialog.querySelector<HTMLElement>('.gov-dialog__body')!.scrollTop = 0;
  });

  if (!('closedBy' in HTMLDialogElement.prototype)) {
    // Press and release both outside the box, so a text-selection drag that ends on the backdrop does not dismiss.
    const outside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => (pressedOutside = outside(e)));
    dialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e)) dialog.close();
    });
  }
}

export {};
