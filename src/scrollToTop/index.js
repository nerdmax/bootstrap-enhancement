import { getJquery, addStyles } from '../utilities/index';

export function init(innerElement) {
  getJquery()
    .then(($) => {
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
        }

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
    })
    .catch((e) => {
      console.error(e);
    });
}

export function update() {}
