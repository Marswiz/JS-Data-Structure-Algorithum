function morseCode(str = '') {
    str = str.toLowerCase();
    let res = [];
    let alpha = new Map();
    let a = [
        // 0 di
        // 1 dah
        ['a', '01'],
        ['b', '1000'],
        ['c', '1010'],
        ['d', '100'],
        ['e', '0'],
        ['f', '0010'],
        ['g', '110'],
        ['h', '0000'],
        ['i', '00'],
        ['j', '0111'],
        ['k', '101'],
        ['l', '0100'],
        ['m', '11'],
        ['n', '10'],
        ['o', '111'],
        ['p', '0110'],
        ['q', '1101'],
        ['r', '010'],
        ['s', '000'],
        ['t', '1'],
        ['u', '001'],
        ['v', '0001'],
        ['w', '011'],
        ['x', '1001'],
        ['y', '1011'],
        ['z', '1100'],
    ];
    for (let [x,y] of a) {
        alpha.set(x, y);
    }
    let cur = [];
    for (let i of str) {
        if (i === ' ') {
            res.push(cur.join('-'));
            cur.length = 0;
        } else {
            cur.push(alpha.get(i));
        } 
    }
    res.push(cur.join('-'));
    return res.join('/');
}

// test
console.log(morseCode('you are so cute'));