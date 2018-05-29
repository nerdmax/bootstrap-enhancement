import getJquery from './../utilities/getJquery';

export default function prependClass(sel, strClass) {
  getJquery().then(($) => {
    const $el = $(sel);

    /* prepend class */
    let classes = $el.attr('class') ? $el.attr('class') : '';
    classes = `${strClass} ${classes}`;
    $el.attr('class', classes);
  });
}
