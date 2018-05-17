export default function getJquery() {
  return new Promise((resolve, reject) => {
    let $$;
    if (window.$) {
      $$ = window.$;
    } else if (window.jQuery) {
      $$ = window.jQuery;
    } else {
      reject(new Error('Please make sure you loaded jQuery and added it to the window object'));
    }
    resolve($$);
  });
}
