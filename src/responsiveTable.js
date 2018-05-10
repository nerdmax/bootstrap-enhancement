const $ = require('jquery');

function displayResTableHeading(parentEle, displayMessage) {
  setTimeout(() => {
    const parentEleSafe =
      parentEle === undefined ? document.getElementsByTagName('BODY')[0] : parentEle;
    console.log('parentEleSafe: ', parentEleSafe);
    $(parentEleSafe)
      .find('.table-responsive')
      .each((index, tableWrapperElement) => {
        console.log(tableWrapperElement);
        $(tableWrapperElement).each(() => {
          console.log($(tableWrapperElement));
          const tableWrapperWidth = $(tableWrapperElement).width();
          const tableWidth = $(tableWrapperElement)
            .find('table')
            .width();
          console.log(tableWrapperWidth);
          console.log(tableWidth);
          const isMessageExist =
            $(tableWrapperElement).siblings('.table-responsive-heading').length !== 0;
          console.log('isMessageExist: ', isMessageExist);
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
exports.init = function init(displayMessage) {
  displayResTableHeading(undefined, displayMessage);
  $('.collapse').on('show.bs.collapse', () => {
    const that = this;
    displayResTableHeading(that, displayMessage);
  });
};

// Force upate
exports.update = (displayMessage) => {
  displayResTableHeading(undefined, displayMessage);
};
