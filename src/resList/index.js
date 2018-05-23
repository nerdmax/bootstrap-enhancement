import $ from 'jquery';
import { prependClass } from '../utilities/index';

function convertListToDropdown(config) {
  // console.log(config);
  const { breakPoint = 'lg', className } = config;
  const windowUrl = window.location.href;
  // console.log('windowUrl: ', windowUrl);
  $('body')
    .find('ul[bse-resList]')
    .each((ulIndex, ulElement) => {
      // Loop through all menus
      prependClass(ulElement, `d-none d-${breakPoint}-flex`);
      const isDropdownExist = $(ulElement).siblings('select').length !== 0;
      if (isDropdownExist) {
        // Update drop down list's select
        const $dropDown = $($(ulElement).siblings('select')[0]);
        $dropDown.find('option').each((optionIndex, optionElement) => {
          const href = optionElement.value;
          const isActived = windowUrl.indexOf(href) !== -1;
          if (isActived) {
            optionElement.selected = true;
          } else {
            optionElement.selected = false;
          }
          // console.log(optionElement.selected);
          // console.log(optionElement.value);
        });
      } else {
        // Crete new drop down list
        const $dropDown = $('<select />', {
          class: `d-${breakPoint}-none ${className}`,
        });
        $(ulElement)
          .find('li')
          .each((liIndex, liElement) => {
            // console.log(liElement);
            // console.log($(liElement).find('a'));
            $(liElement)
              .find('a')
              .each((aIndex, aElement) => {
                const href = $(aElement).attr('href');
                const text = $(aElement).text();
                const isActived = windowUrl.indexOf(href) !== -1;
                const $option = $('<option />', {
                  value: href,
                  text,
                  selected: isActived,
                });
                $option.appendTo($dropDown);
              });
          });
        // console.log($dropDown);
        $dropDown.insertAfter($(ulElement));
        // Add navigate funcitonality to options
        $dropDown.on('change', (event) => {
          // console.log(event.currentTarget);
          window.location = $(event.currentTarget)
            .find('option:selected')
            .val();
        });
      }
    });
}

// Init
export function init(config) {
  convertListToDropdown(config);
  $(window).on('hashchange', () => {
    convertListToDropdown(config);
  });
}

// Force upate
export function update() {}
