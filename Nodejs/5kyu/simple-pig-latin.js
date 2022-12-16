/**
 * CodeKata: ⁡⁣⁢⁣https://www.codewars.com/kata/520b9d2ad5c005041100000f⁡
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word.
 * Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      if (!word.match(/([A-Z]|[a-z])/)) return word;
      word += word.slice(0, 1) + 'ay';
      return word.substring(1);
    })
    .join(' ');
}

// Codewars provided tests.
console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay');
