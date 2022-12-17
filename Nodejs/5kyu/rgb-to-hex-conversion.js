/**
 * CodeKata: https://www.codewars.com/kata/513e08acc600c94f01000001
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values
 * will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255.
 * Any values that fall out of that range must be rounded to the closest valid value.
 *
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 *
 * The following are examples of expected output values:
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 *
 */

function roundValue(value) {
  return value > 255 ? (value = 255) : value < 0 ? (value = 0) : value;
}

function stringify(value) {
  let hex = value.toString(16).toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgb(r, g, b) {
  return `${stringify(roundValue(r))}${stringify(roundValue(g))}${stringify(roundValue(b))}`;
}

// Codewars provided tests.
console.log(rgb(0, 0, 0) === '000000');
console.log(rgb(0, 0, -20) === '000000');
console.log(rgb(300, 255, 255) === 'FFFFFF');
console.log(rgb(173, 255, 47) === 'ADFF2F');
