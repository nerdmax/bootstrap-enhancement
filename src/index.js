import * as utilities from './utilities/index';
import * as addScrollMessToResTable from './addScrollMessToResTable/index';
import * as fixModalShifting from './fixModalShifting/index';
import * as toggleCollapseChevron from './toggleCollapseChevron/index';
import * as scrollToTop from './scrollToTop/index';
import * as resList from './resList/index';

/**
 * utilities
 */
const bse = {
  utilities,
  addScrollMessToResTable,
  fixModalShifting,
  toggleCollapseChevron,
  scrollToTop,
  resList,
};

/**
 * This is the main object that contains all methods
 * @type {Object}
 * @property {Object} bse.utilities
 * Utilityies related to bootstrap
 * @property {function(sel: Object, strClass: string)} bse.utilities.prependClass
 * Add class names to the left most position to avoid overwriting original class's style
 * @property {function():Promise<Object, MyError>} bse.utilities.getJquery
 * Must use this way to get jQuery if we want to attach something to bootstrap's event.
 * @property {function():boolean} bse.utilities.hasScrollBar
 * Check if the current page has scroll bar.
 * @property {function():number} bse.utilities.getScrollBarWidth
 * Get scroll bar's width.
 * @property {function(css: string)} bse.utilities.addStyles
 * Add some css styles to the top most position in head tag.
 * @property {Object} bse.utilities.checkBreakPoint
 * @property {function():string} bse.utilities.checkBreakPoint.checkSize
 * Get window width's info in bootstrap 4's grid system standards.
 * @property {function():boolean} bse.utilities.checkBreakPoint.is
 * Check which grid level is window in.
 * @property {function(keyValue: string, element: Object):Promise<Object, MyError>} bse.utilities.addToWindow
 * Attach object to window without overwriting anything else.
 *
 * @property {Object} bse.addScrollMessToResTable
 * Add a message when the table in .table-responsive is scrollable.
 * @property {function(displayMessage: string)} bse.addScrollMessToResTable.init
 * Init addScrollMessToResTable
 * @property {function(displayMessage: string)} bse.addScrollMessToResTable.update
 * Update addScrollMessToResTable
 *
 * @property {Object} bse.fixModalShifting
 * Fix bootstrap modal's shifting issue.
 * @property {function()} bse.fixModalShifting.init
 * Init fixModalShifting
 *
 * @property {Object} bse.toggleCollapseChevron
 * Automatically toggle bootstrap collapse's chevron based on show or hide collapse.
 * @property {function()} bse.toggleCollapseChevron.init
 * Init toggleCollapseChevron
 *
 * @property {Object} bse.scrollToTop
 * Add scroll to top anchor on the right bottom of the whole page.
 * @property {function(innerElement: string)} bse.scrollToTop.init
 * Init scrollToTop
 *
 * @property {Object} bse.resList
 * Convert a ul li menu to a select options element and display it on small device
 * @property {function(config: Object)} bse.resList.init
 * Init resList
 */
export default bse;

utilities.addToWindow('bse', bse);
