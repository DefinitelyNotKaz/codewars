// CodeKata: https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
    let divisors = 0;
    for (let i = 0; i <= n / i; i++) {
        if (n % i == 0) {
            if (n / i == i) {
                divisors++;
            } else {
                divisors += 2;
            }
        }
    }
    return divisors;
}