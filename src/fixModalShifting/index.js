import { addStyles, hasScrollBar } from '../bseUtilities';

function addStyleToFixModalShifting() {
  if (hasScrollBar()) {
    addStyles(`
    body.modal-open {
      padding-right: 15px;
    }

    // Fix fixed header jump to right issues
    body.modal-open nav.affix {
      right: 15px;
    }
  `);
  }
}

export function init() {
  addStyleToFixModalShifting();
}

export function update() {}
