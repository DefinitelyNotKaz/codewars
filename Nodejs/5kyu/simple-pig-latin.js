// CodeKata: https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    return str.split(' ').map(word => {
        if (word.match(/([A-Z]|[a-z])/)) {
            let sliced = word.split('').slice(1);
            sliced.push(word[0]);
            sliced.push('a', 'y');
            return sliced.join('');
        } else {
            return word;
        }
    }).join(' ');
}