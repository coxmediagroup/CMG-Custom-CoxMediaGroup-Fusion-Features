/* eslint-disable */
/* replacement for $(document).on('click', fn) */
export function delegateEvent(eventType, fn, matcher, el = document) {
  el.addEventListener(eventType, e => {
    if (
      !matcher ||
      e.target.matches(matcher) /* firefox */ ||
      e.currentTarget.activeElement.matches(matcher) /* chrome */ ||
      /* safari, check for parentElement fixes bug where document is element clicked on */
      (e.target.parentElement && e.target.parentElement.matches(matcher))
    ) {
      e.stopPropagation();
      fn(e);
    }
  });
}
