import { getJquery } from '../bseUtilities/index';

export function init() {
  getJquery()
    .then(($) => {
      $('.collapse').on('show.bs.collapse', (event) => {
        // console.log('show.bs.collapse');
        // console.log(event);
        // console.log(event.currentTarget);
        const $chevronIcon = $(document)
          .find(`[href='#${$(event.target).attr('id')}']`)
          .find('svg[bse]');
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
