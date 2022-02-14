function gcd(num1,num2){
    if (num1 === 0) return num2;
    if (num2 === 0) return num1;
    let remainder,divider
    if (num1 >= num2){
        remainder = num1 % num2
        divider = num2
    } else {
        remainder = num2 % num1
        divider = num1
    }
    while (remainder !== 0){
        let temp = remainder
        remainder = divider % remainder
        divider = temp
    }
    return divider;
}

function lcm(n1, n2) {
    function gcd(num1,num2){
        if (num1 === 0) return num2;
        if (num2 === 0) return num1;
        let remainder,divider
        if (num1 >= num2){
            remainder = num1 % num2
            divider = num2
        } else {
            remainder = num2 % num1
            divider = num1
        }
        while (remainder !== 0){
            let temp = remainder
            remainder = divider % remainder
            divider = temp
        }
        return divider;
    }
    if (n1 === 0 || n2 === 0) return 0;
    return n1 * n2 / gcd(n1,n2);
}

// test
console.log(lcm(0,9));
console.log(lcm(27,9));
console.log(gcd(0,20));