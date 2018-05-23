import $ from 'jquery';

export default function prependClass(sel, strClass) {
  const $el = $(sel);

  /* prepend class */
  let classes = $el.attr('class') ? $el.attr('class') : '';
  classes = `${strClass} ${classes}`;
  $el.attr('class', classes);
}
