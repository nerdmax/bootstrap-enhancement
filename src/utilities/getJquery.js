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
