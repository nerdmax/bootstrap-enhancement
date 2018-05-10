const $ = require('jquery');

function displayResTableHeading(parentEle, displayMessage) {
  const parentEleSafe =
    parentEle === undefined ? document.getElementsByTagName('BODY')[0] : parentEle;
  $(parentEleSafe)
    .find('.table-responsive')
    .each(() => {
      $(this).each(() => {
        // console.log($(this));
        const tableWrapperWidth = $(this).width();
        const tableWidth = $(this)
          .find('table')
          .width();
        // console.log(tableWrapperWidth);
        // console.log(tableWidth);

        if (tableWrapperWidth !== 0 && tableWidth !== 0 && tableWidth > tableWrapperWidth) {
          $(this).prepend(`<p class="table-responsive-heading">${
            displayMessage === undefined ? 'Scroll horizontally for more details' : displayMessage
          }</p>`);
          // $(this)
          //   .find(".table-responsive-heading")
          //   .show();
        }
        // console.log(tableWrapperWidth);
        // console.log(tableWidth);
      });
    });
}

// Init
exports.init = function init(displayMessage) {
  setTimeout(() => {
    displayResTableHeading(undefined, displayMessage);
  }, 1);
  $('.collapse').on('show.bs.collapse', () => {
    const that = this;
    setTimeout(() => {
      displayResTableHeading(that, displayMessage);
    }, 1);
  });
};

// Force upate
exports.update = (displayMessage) => {
  displayResTableHeading(undefined, displayMessage);
};
