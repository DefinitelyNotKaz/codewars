// CodeKata: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
    let encoded = '';
    let chars = word.split('')
    chars.forEach(val => chars.filter(char => char.toLowerCase() === val.toLowerCase()).length > 1 ? encoded += ')' : encoded += '(');
    return encoded;
}