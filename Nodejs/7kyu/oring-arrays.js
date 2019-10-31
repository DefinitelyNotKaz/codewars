// CodeKata: https://www.codewars.com/kata/5ac5e9aa3853da25d9000102

function orArrays(arr1, arr2, def = 0) {
    let primary, secondary;
    if (arr1.length > arr2.length) {
        primary = arr1;
        secondary = arr2;
    } else {
        primary = arr2;
        secondary = arr1;
    }
    return primary.map((num, i) => {
        if (!secondary[i]) secondary[i] = def;
        return primary[i] | secondary[i]
    })
}