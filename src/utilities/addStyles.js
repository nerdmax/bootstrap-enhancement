export default function addStyles(css) {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.type = 'text/css';
  // Polyfill IE8 and below
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.insertBefore(style, head.childNodes[0]);
}
