/**
 * @description
 * Slugify a text, removing/replacing all special characters and spaces with dashes '-'
 *
 * @param {string} str The string to sanitize
 *
 * @return {string} The modified string
 *
 * @example
 *  slugify('Hello World!'); // 'hello-world'
 */
const slugify = (text) => {
  let str = text.replace(/^\s+|\s+$/g, '') // trim
    .toLowerCase()
    .replace(/\./g, '-') // Replace a dot for a -
    .replace(/\*/g, '-') // Replace a * for a -
    .replace(/\+/g, '-'); // Replace a + for a -

  // Remove accents, swap ñ for n, etc...
  const from = 'àáäâãèéëêìíïîòóöôõùúüûýÿñç·/_,:;';
  const to = 'aaaaaeeeeiiiiooooouuuuyync------';

  for (let i = 0, len = from.length; i < len; i += 1) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
    .replace(/\s+/g, '-') // Collapse whitespace and replace by -
    .replace(/-+/g, '-'); // Collapse dashes

  if (str.charAt(0) === '-') str = str.substr(1);
  if (str.charAt(str.length - 1) === '-') str = str.substr(0, str.length - 1);

  return str;
};

export default slugify;
