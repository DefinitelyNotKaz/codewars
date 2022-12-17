/*
 * Codekata: https://www.codewars.com/kata/52223df9e8f98c7aa7000062
 * How can you tell an extrovert from an introvert at NSA?
 * Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
 *
 * I found this joke on USENET, but the punchline is scrambled.
 * Maybe you can decipher it? According to Wikipedia,
 * ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.
 *
 * Hint: For this task you're only supposed to substitue characters.
 * Not spaces, punctuation, numbers etc.
 *
 * Test examples:
 *
 * "EBG13 rknzcyr." --> "ROT13 example."
 *
 * "This is my first ROT13 excercise!" --> "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return str
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      const index = alphabet.indexOf(char.toUpperCase());
      if (index === -1) return char;

      const target = (index + 13) % 26;
      const targetChar = alphabet[target];
      return charCode < 97 ? targetChar : targetChar.toLocaleLowerCase();
    })
    .join('');
}

// Tests provided by CodeWars.
console.log(rot13('EBG13 rknzcyr.'), 'ROT13 example.');
console.log(
  rot13('This is my first ROT13 excercise!'),
  'Guvf vf zl svefg EBG13 rkprepvfr!'
);
