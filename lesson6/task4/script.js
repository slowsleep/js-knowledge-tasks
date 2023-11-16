function calculate(arr) {
    return arr.map(a => a % 2 == 0 ? a + 4 : a - 2).filter(a => a % 13 != 0).reduce((ac, sum) => ac + sum);
}

console.log(calculate([15, 2, 3, 5, 6]));
