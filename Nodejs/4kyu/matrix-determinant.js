// CoddeKata: https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript


// THIS IS A NO GO, JUST TRYING TO FIGURE OUT HOW MATRICES WERE SOLVED (test are passing though :))
// TODO: REFACTOR!
function determinant(m) {
    if(m.length === 1) return m[0][0];
    if(m.length === 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
    if(m.length === 3) return m[0][0] * ((m[1][1] * m[2][2]) - (m[1][2] * m[2][1])) - m[0][1] * ((m[1][0] * m[2][2]) - (m[1][2] * m[2][0])) + m[0][2] * ((m[1][0] * m[2][1]) - (m[1][1] * m[2][0]));
};



let m1 = [[1, 3], [2, 5]]
let m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]]

console.log(determinant([[1]]), 1)
console.log(determinant(m1), -1)
console.log(determinant(m2), -20)