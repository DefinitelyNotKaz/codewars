// CodeKata: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let result;
        args.forEach(element => {
            result === undefined ? result = element : result > element ? result = element : result
        });
        return result;
    }
}