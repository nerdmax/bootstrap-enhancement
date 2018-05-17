const $ = require('jquery');

/**
 * Checks if the span is set to display lock via CSS
 */
function checkIfBlock(target) {
  const isTargetBlcok = $(target).css('display') === 'block';
  return isTargetBlcok;
}

export default function checkSize() {
  // Add some invisible elements with Bootstrap CSS visibile utility classes
  const $testElement = $("<div style='display:none;' class='breakpoint-check'><span class='xs d-block d-sm-inline'></span><span class='sm d-sm-block d-md-inline'></span><span class='md d-md-block d-lg-inline'></span><span class='lg d-lg-block d-xl-inline'></span><span class='xl d-xl-block'></span></div>");
  $('body').append($testElement);
  // Set some variables to use with the if checks below
  const xs = checkIfBlock('.breakpoint-check .xs');
  const md = checkIfBlock('.breakpoint-check .md');
  const sm = checkIfBlock('.breakpoint-check .sm');
  const lg = checkIfBlock('.breakpoint-check .lg');
  const xl = checkIfBlock('.breakpoint-check .xl');
  $testElement.remove();

  // add the breakpoint to the console
  if (xs === true) {
    return 'xs';
  }

  if (sm === true) {
    return 'sm';
  }

  if (md === true) {
    return 'md';
  }

  if (lg === true) {
    return 'lg';
  }

  if (xl === true) {
    return 'xl';
  }

  return 'null';
}
