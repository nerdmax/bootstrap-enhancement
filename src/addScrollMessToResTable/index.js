import getJquery from './../utilities/getJquery';

function displayResTableHeading(parentEle, displayMessage) {
  setTimeout(() => {
    const parentEleSafe =
      parentEle === undefined ? document.getElementsByTagName('BODY')[0] : parentEle;
    // console.log('parentEleSafe: ', parentEleSafe);
    getJquery().then(($) => {
      $(parentEleSafe)
        .find('.table-responsive[bse-resTableMess]')
        .each((index, tableWrapperElement) => {
          // console.log(tableWrapperElement);
          $(tableWrapperElement).each(() => {
            // console.log($(tableWrapperElement));
            const tableWrapperWidth = $(tableWrapperElement).width();
            const tableWidth = $(tableWrapperElement)
              .find('table')
              .width();
            // console.log(tableWrapperWidth);
            // console.log(tableWidth);
            const isMessageExist =
              $(tableWrapperElement).siblings('.table-responsive-heading').length !== 0;
            // console.log('isMessageExist: ', isMessageExist);
            if (
              tableWrapperWidth !== 0 &&
              tableWidth !== 0 &&
              tableWidth > tableWrapperWidth &&
              !isMessageExist
            ) {
              $(`<p class="table-responsive-heading">${
                displayMessage === undefined
                  ? 'Scroll table horizontally to see more.'
                  : displayMessage
              }</p>`).insertBefore($(tableWrapperElement));
            } else if (
              tableWrapperWidth !== 0 &&
              tableWidth !== 0 &&
              tableWidth <= tableWrapperWidth &&
              isMessageExist
            ) {
              $(tableWrapperElement)
                .siblings('.table-responsive-heading')[0]
                .remove();
            }
          });
        });
    });
  }, 1);
}

/**
 * Add a message when the table in .table-responsive is scrollable.
 * Add bse-resTableMess attribute to div.table-responsive and run bse.addScrollMessToResTable.init();
 * @example
 * <div class="table-responsive" bse-resTableMess>
 *   <table class="table">
 *     <thead>
 *     </thead>
 *     <tbody>
 *     </tbody>
 *   </table>
 * </div>
 * bse.addScrollMessToResTable.init();
 * @param {string} displayMessage - Message that you want to display, default value is:
 * Scroll table horizontally to see more.
 */
export function init(displayMessage) {
  displayResTableHeading(undefined, displayMessage);
  getJquery().then(($) => {
    $('.collapse').on('show.bs.collapse', () => {
      const that = this;
      displayResTableHeading(that, displayMessage);
    });
    $(window).on('hashchange', () => {
      console.log('REGRESH');
      displayResTableHeading(undefined, displayMessage);
    });
  });
}

// Force upate
export function update(displayMessage) {
  displayResTableHeading(undefined, displayMessage);
}
