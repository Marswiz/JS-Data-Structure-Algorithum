function quickPow(a = 1, n = 0) {
    if (a === 0 && n === 0) return 1;
    let res = 1;
    let c = a;
    while (n > 0) {
        if (n & 1) {
            res *= c;
        }
        c *= c;
        n >>= 1;
    }
    return res;
}

function quickPowBigInt(a = 1n, n = 0n) {
    if (a === 0n && n === 0n) return 1n;
    a = BigInt(a);
    n = BigInt(n);
    let res = 1n;
    let c = a;
    while (n > 0n) {
        if (n & 1n) {
            res *= c;
        }
        c *= c;
        n >>= 1n;
    }
    return res;
}

function quickPowBigIntWithMod(a = 1n, n = 0n) {
    if (a === 0n && n === 0n) return 1n;
    let mod = 1000000007n;
    a = BigInt(a);
    n = BigInt(n);
    let res = 1n;
    let c = a;
    while (n > 0n) {
        if (n & 1n) {
            res *= c;
            res %= mod;
        }
        c *= c;
        c %= mod;
        n >>= 1n;
    }
    return res;
}

// test
console.log(quickPowBigIntWithMod(1,2));
console.log(quickPowBigIntWithMod(2,5));
console.log(quickPowBigIntWithMod(2,10));
console.log(quickPowBigIntWithMod(4,50));