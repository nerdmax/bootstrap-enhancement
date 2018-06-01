import bse from '../dist/bootstrap-enhancement';

const { $ } = window;

// console.log($);
// console.log(bse);

$(() => {
  if (document.title === 'Bootstrap Enhancement Samples - utilities - prependClass') {
    console.log(bse.utilities.prependClass);
    $('#prependClass').on('click', () => {
      const testEle = document.getElementById('testDom');
      bse.utilities.prependClass(testEle, 'text-success');
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - utilities - getJquery') {
    console.log(bse.utilities.getJquery);
    $('#getJquery').on('click', () => {
      bse.utilities.getJquery().then((jQueryFromWindow) => {
        console.log(jQueryFromWindow);
      });
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - utilities - hasScrollBar') {
    console.log(bse.utilities.hasScrollBar);
    $('#checkScrollBar').on('click', () => {
      console.log(bse.utilities.hasScrollBar());
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - utilities - getScrollBarWidth') {
    console.log(bse.utilities.getScrollBarWidth);
    $('#getScrollBar').on('click', () => {
      console.log(bse.utilities.getScrollBarWidth());
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - utilities - addStyles') {
    console.log(bse.utilities.addStyles);
    $('#addStyles').on('click', () => {
      bse.utilities.addStyles(`
        .test{color: red}
      `);
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - utilities - checkBreakPoint') {
    console.log(bse.utilities.checkBreakPoint);
    $('#checkSize').on('click', () => {
      console.log(bse.utilities.checkBreakPoint.checkSize());
    });
    $('#is').on('click', () => {
      console.log(bse.utilities.checkBreakPoint.is('>md'));
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - utilities - addToWindow') {
    console.log(bse.utilities.addToWindow);
    $('#addToWindow').on('click', () => {
      bse.utilities.addToWindow('test', { name: 'testObject' });
      console.log(window.test);
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - addScrollMessToResTable') {
    console.log(bse.addScrollMessToResTable);
    $('#addScrollMessToResTableInit').on('click', () => {
      bse.addScrollMessToResTable.init();
    });
    $('#addScrollMessToResTableUpdate').on('click', () => {
      bse.addScrollMessToResTable.update();
    });
  }

  if (document.title === 'Bootstrap Enhancement Samples - fixModalShifting') {
    console.log(bse.fixModalShifting);
    $('#fixModalShiftingInit').on('click', () => {
      bse.fixModalShifting.init();
    });
  }

  // TODO: Need to load font awesome to make it working
  if (document.title === 'Bootstrap Enhancement Samples - toggleCollapseChevron') {
    console.log(bse.toggleCollapseChevron);
    // $('#fixModalShiftingInit').on('click', () => {
    //   bse.fixModalShifting.init();
    // });
  }

  if (document.title === 'Bootstrap Enhancement Samples - scrollToTop') {
    console.log(bse.scrollToTop);
    $('#scrollToTopInit').on('click', () => {
      bse.scrollToTop.init('<p class="text-danger">SCROLL TO TOP</p>');
    });
    // $(() => {
    //   bse.scrollToTop.init('TESTSETTSE');
    // });
  }

  if (document.title === 'Bootstrap Enhancement Samples - resList') {
    console.log(bse.resList);
    $('#resListInit').on('click', () => {
      bse.resList.init();
    });
  }
});

bse.resList.init();

// console.log(process.version);
