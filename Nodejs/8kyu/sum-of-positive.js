// CodeKata: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let total = 0;
    if (arr.length != 0) {
        arr.forEach(element => {
            if (element > 0) {
                total += element
            }
        });
    }
    return total;
}