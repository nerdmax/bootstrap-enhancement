import { getJquery } from '../utilities/index';
/**
 * Automatically toggle bootstrap collapse's chevron based on show or hide collapse.
 * Add bse-toggleCollapChevron attribute to chevron link and run bse.toggleCollapseChevron.init();
 * @example
 * <a data-toggle="collapse" href="#test">
 *   <i class="fas fa-chevron-down" bse-toggleCollapChevron></i>
 * </a>
 * bse.toggleCollapseChevron.init();
 */
export function init() {
  getJquery()
    .then(($) => {
      $('.collapse').on('show.bs.collapse', (event) => {
        // console.log('show.bs.collapse');
        // console.log(event);
        // console.log(event.currentTarget);
        const $chevronIcon = $(document)
          .find(`[href='#${$(event.target).attr('id')}']`)
          .find('svg[bse-toggleCollapChevron]');
        // console.log($chevronIcon);
        $chevronIcon.attr('data-icon', 'chevron-up');
        // $(`#${this.id}-chevron`).toggleClass('fa-chevron-down fa-chevron-up');
        // $(`#${this.id}-hvr`).toggleClass('hvr-icon-hang hvr-icon-bob');
      });
      $('.collapse').on('hide.bs.collapse', (event) => {
        const $chevronIcon = $(document)
          .find(`[href='#${$(event.target).attr('id')}']`)
          .find('svg[bse]');
        $chevronIcon.attr('data-icon', 'chevron-down');
      });
    })
    .catch((e) => {
      console.error(e);
    });
}

export function update() {}
