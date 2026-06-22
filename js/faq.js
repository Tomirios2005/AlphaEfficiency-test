

(function () {
  'use strict';

  const init = () => {
    const items = document.querySelectorAll('.faq__item');

    if (!items.length) return;

    items.forEach((item) => {
      const trigger = item.querySelector('.faq__trigger');
      const panel   = item.querySelector('.faq__panel');

      if (!trigger || !panel) return;

      /* Give the panel an id and link it to the button for a11y */
      const id = `faq-panel-${Math.random().toString(36).slice(2, 8)}`;
      panel.id = id;
      trigger.setAttribute('aria-controls', id);
      panel.setAttribute('aria-hidden', 'true');

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        /* Close every other item first */
        items.forEach((otherItem) => {
          const otherTrigger = otherItem.querySelector('.faq__trigger');
          const otherPanel   = otherItem.querySelector('.faq__panel');
          if (otherTrigger && otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherPanel.setAttribute('aria-hidden', 'true');
          }
        });

        /* Toggle the clicked item */
        const nextState = !isOpen;
        trigger.setAttribute('aria-expanded', String(nextState));
        panel.setAttribute('aria-hidden', String(!nextState));
      });
    });
  };

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();