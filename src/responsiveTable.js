const $ = require("jquery");

// Init
exports.init = function(displayMessage) {
  setTimeout(function() {
    displayResTableHeading(undefined, displayMessage);
  }, 1);
  $(".collapse").on("show.bs.collapse", function() {
    var that = this;
    setTimeout(function() {
      displayResTableHeading(that, displayMessage);
    }, 1);
  });
};

// Force upate
exports.update = function(displayMessage) {
  displayResTableHeading(undefined, displayMessage);
};

function displayResTableHeading(parentEle, displayMessage) {
  if (parentEle == undefined) {
    parentEle = document.getElementsByTagName("BODY")[0];
  }
  $(parentEle)
    .find(".table-responsive")
    .each(function() {
      $(this).each(function() {
        // console.log($(this));
        var tableWrapperWidth = $(this).width();
        var tableWidth = $(this)
          .find("table")
          .width();
        // console.log(tableWrapperWidth);
        // console.log(tableWidth);
        if (
          tableWrapperWidth != 0 &&
          tableWidth != 0 &&
          tableWidth > tableWrapperWidth
        ) {
          $(this).prepend(
            `<p class="table-responsive-heading">${
              displayMessage === undefined
                ? "Scroll horizontally for more details"
                : displayMessage
            }</p>`
          );
          // $(this)
          //   .find(".table-responsive-heading")
          //   .show();
        }
        //console.log(tableWrapperWidth);
        //console.log(tableWidth);
      });
    });
}
