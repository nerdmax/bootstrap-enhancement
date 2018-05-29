export default function addToWindow(keyValue, element) {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined') {
      if (typeof window[keyValue] === 'undefined') {
        window[keyValue] = element;
      } else {
        console.error(`'${keyValue}' has been used on window object.`);
        reject(new Error(`'${keyValue}' has been used on window object.`));
      }
    } else {
      console.error('Cannot get window object');
      reject(new Error('Cannot get window object'));
    }
    resolve();
  });
}
