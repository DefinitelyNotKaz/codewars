// CodeKata: https://www.codewars.com/kata/5b609dbf6d0db7ca6300069

function knockKnock(str) {
    let strings = str.split(' ');
    let result = '!'
    strings.forEach((element) => {
        let index = strings.indexOf(element);
        if (index != 0) {
            let match = element.match(new RegExp(`[${strings[index - 1]}]`));
            match === null ? result += '^' : result += match
        }
    });
    return result;
}