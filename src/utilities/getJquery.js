/**
 * Get jQuery from window.
 * Must use this way to get jQuery if we want to attach something to bootstrap's event.
 * @example
 * bse.utilities.getJquery().then(($)=>{console.log($)});
 * @return {Promise<Object, MyError>} Promise with jQuery from window.
 */
export default function getJquery() {
  return new Promise((resolve, reject) => {
    let $$;
    if (window.$) {
      $$ = window.$;
    } else if (window.jQuery) {
      $$ = window.jQuery;
    } else {
      console.error('Please make sure you loaded jQuery and added it to the window object');
      reject(new Error('Please make sure you loaded jQuery and added it to the window object'));
    }
    resolve($$);
  });
}
