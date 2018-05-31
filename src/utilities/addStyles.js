/**
 * Add some css styles to the top most position in head tag.
 * @example
 * bse.utilities.addStyles('.test{color: red}');
 * @param {string} css - Css styles that you want to add.
 */
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
