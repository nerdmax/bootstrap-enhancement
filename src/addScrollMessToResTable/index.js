import $ from 'jquery';

function displayResTableHeading(parentEle, displayMessage) {
  setTimeout(() => {
    const parentEleSafe =
      parentEle === undefined ? document.getElementsByTagName('BODY')[0] : parentEle;
    // console.log('parentEleSafe: ', parentEleSafe);
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
          }
        });
      });
  }, 1);
}

// Init
export function init(displayMessage) {
  displayResTableHeading(undefined, displayMessage);
  $('.collapse').on('show.bs.collapse', () => {
    const that = this;
    displayResTableHeading(that, displayMessage);
  });
  $(window).on('hashchange', () => {
    console.log('REGRESH');
    displayResTableHeading(undefined, displayMessage);
  });
}

// Force upate
export function update(displayMessage) {
  displayResTableHeading(undefined, displayMessage);
}
