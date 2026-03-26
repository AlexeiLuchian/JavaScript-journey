function gcd(a, b) {
    let t;
    while (b !== 0) {
        t = b;
        b = a % b;
        a  = t;
    }
    return a;
}

console.log(gcd(10, 5));  // 5
console.log(gcd(17, 13)); // 1
console.log(gcd(36, 24)); // 12