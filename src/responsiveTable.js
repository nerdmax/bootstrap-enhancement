const $ = require("jquery");

// Responsive table
exports.responsiveTable = function() {
  displayResTableHeading();
  $(".collapse").on("show.bs.collapse", function() {
    var that = this;
    setTimeout(function() {
      displayResTableHeading(that);
    }, 1);
  });
};

function displayResTableHeading(parentEle) {
  if (parentEle == undefined) {
    parentEle = document.getElementsByTagName("BODY")[0];
  }
  $(parentEle)
    .find(".table-responsive")
    .each(function() {
      $(this).each(function() {
        //console.log($(this));
        var tableWrapperWidth = $(this).width();
        var tableWidth = $(this)
          .find("table")
          .width();
        //console.log(tableWrapperWidth);
        //console.log(tableWidth);
        if (
          tableWrapperWidth != 0 &&
          tableWidth != 0 &&
          tableWidth > tableWrapperWidth
        ) {
          $(this)
            .find(".table-responsive-heading")
            .show();
        }
        //console.log(tableWrapperWidth);
        //console.log(tableWidth);
      });
    });
}
