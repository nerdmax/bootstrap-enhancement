import getJquery from './../utilities/getJquery';
import { addStyles } from '../utilities/index';

/**
 * Add scroll to top anchor on the right bottom of the whole page.
 * @example
 * bse.scrollToTop.init(`<span class="fa-stack fa-lg">
 *    <i class="fa fa-circle fa-stack-2x"></i>
 *    <i class="fa fa-chevron-up fa-stack-1x fa-inverse"></i>
 *  </span>`);
 * @param {string} innerElement - Dom element string that you want to add to that anchor.
 */
export function init(innerElement) {
  getJquery().then(($) => {
    addStyles(`
    .scroll-to-top {
      display: none;
      position: fixed;
      /*z-index should be smaller than .page-loading-spinner*/
      z-index: 9998;
      bottom: 5px;
      right: 5px;
      font-size: 15px;
      filter: alpha(opacity=40); /* For IE8 and earlier */
    
    .scroll-to-top:hover {
      cursor: pointer;
      opacity: 0.8;
      filter: alpha(opacity=80); /* For IE8 and earlier */
    }
      `);

    const $scrollAnchor = $(`<a class="scroll-to-top" href="">${innerElement}</a>`);

    $('body').append($scrollAnchor);

    $(window).scroll(() => {
      if ($(window).scrollTop() > 100) {
        $scrollAnchor.fadeIn();
      } else {
        $scrollAnchor.fadeOut();
      }
    });

    $scrollAnchor.click((e) => {
      e.preventDefault();
      $('body, html').animate(
        {
          scrollTop: 0,
        },
        800,
      );
    });
  });
}

export function update() {}
