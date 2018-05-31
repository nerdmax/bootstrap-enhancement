/**
 * Check if the current page has scroll bar.
 * @example
 * hasScrollBar();
 * @return {boolean} Return true if current page has scroll bar, false if doesn't have scroll bar or scroll bar is transparent(Eg: Safari on iPhone/iPad).
 */
export default function hasScrollBar() {
  // The Modern solution
  if (typeof window.innerWidth === 'number') {
    return window.innerWidth > document.documentElement.clientWidth;
  }

  // rootElem for quirksmode
  const rootElem = document.documentElement || document.body;

  // Check overflow style property on body for fauxscrollbars
  let overflowStyle;

  if (typeof rootElem.currentStyle !== 'undefined') overflowStyle = rootElem.currentStyle.overflow;

  overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow;

  // Also need to check the Y axis overflow
  let overflowYStyle;

  if (typeof rootElem.currentStyle !== 'undefined') {
    overflowYStyle = rootElem.currentStyle.overflowY;
  }

  overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;

  const contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
  const overflowShown =
    /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
  const alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

  return (contentOverflows && overflowShown) || alwaysShowScroll;
}
