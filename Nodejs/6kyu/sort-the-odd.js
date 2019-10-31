// Codekata: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    if(array.length === 0) return array;
    let odd = array.filter(x => x % 2 === 1).sort((a, b) => { return a - b });
    return array.map(x => x % 2 === 1 ? odd.shift() : x);
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
console.log(sortArray([]), [])