function highPrecisionAdd(str1, str2) {
    if (str1.length < 15 && str2.length < 15) {
        return (+str1 + +str2) + '';
    }
    let res = [];
    let adder = 0;
    let p1 = str1.length-1, p2 = str2.length-1;
    while (p1 >= 0 || p2 >= 0 || adder) {
        let a = p1 >= 0 ? +str1[p1] : 0;
        let b = p2 >= 0 ? +str2[p2] : 0;
        let cur = a + b + adder;
        adder = cur >= 10 ? 1 : 0;
        cur %= 10;
        res.push(cur);
        p1 -= 1;
        p2 -= 1;
    }
    res.reverse();
    return res.join('');
}

// test
let a = highPrecisionAdd('1111111111111111','11111111111111112');
console.log(a);