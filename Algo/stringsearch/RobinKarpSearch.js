function RobinKarpSearch(str = '', ptn = '') {
    if (ptn.length > str.length) return false;
    if (ptn === '') return true;
    let code = 0, ptnCode = 0;
    let len = ptn.length;
    let R = 11;
    let mod = 1e9+7;
    for (let i=0; i<len; i++) {
        code = ((code % mod) * (R % mod)) % mod + str[i].charCodeAt(0) % mod;
        ptnCode = ((ptnCode % mod) * (R % mod)) % mod + ptn[i].charCodeAt(0) % mod;
    }
    // [a,b,c],d,e -> a,[b,c,d],e
    // ( code - code[i] * R^(len-1) ) * R + code[i+len]
    let RPow = 1;
    for (let i=0; i<len-1; i++) RPow = ((RPow % mod) * (R % mod)) % mod;
    for (let i=0; i+len-1<str.length; i++) {
        if (code === ptnCode) return true;
        if (i+len < str.length) {
            let a = (str[i].charCodeAt(0)* RPow) % mod;
            let b = (code + mod - a) % mod;
            code = ((b % mod) * (R % mod)) % mod + str[i+len].charCodeAt(0) % mod;
        }
        // code = (code + R - str[i].charCodeAt(0) * RPow) * R + str[i+len].charCodeAt(0);
    }
    return false;
}

// test
let str = 'kldsfjskldflkfj1klsd2afj3lsdafjlzsafieonbuiowhiwenc4442123';
let ptn = '123';
console.log(RobinKarpSearch(str, ptn));