import getJquery from './../utilities/getJquery';

/**
 * Add class names to the left most position to avoid overwriting original class's style
 * @example
 * prependClass(domElement, 'test-class');
 * @param {Object} sel - Dom element that you want to add class to.
 * @param {string} strClass - Class name that you want add.
 */
export default function prependClass(sel, strClass) {
  getJquery().then(($) => {
    const $el = $(sel);

    /* prepend class */
    let classes = $el.attr('class') ? $el.attr('class') : '';
    classes = `${strClass} ${classes}`;
    $el.attr('class', classes);
  });
}
