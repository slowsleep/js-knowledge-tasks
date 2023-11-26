function pow(a, b) {
    if (a === 1 || b === 0) return 1;
    if (b === 1) return a;
    if (a === 0) return 0;
    if (b < 0) return 1 / a * pow(a, ++b);
    return a * pow(a, --b);
}

console.log(pow(2,3));
console.log(pow(4,0));
console.log(pow(0,8));
console.log(pow(1,13));
console.log(pow(7,-3));

