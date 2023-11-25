function multiply1(a, b) {
    if (b < 0) return -multiply1(a, -b);
    if (b === 1) return a;
    if (a === 0 || b === 0) return 0;
    return a + multiply1(a, b - 1);
}

function multiply2(a, b) {
    if (b < 0) return -multiply2(a, -b);
    if (b === 1) return a;
    if ((b & 1) === 1) return a + multiply2(a, b - 1); // обработка нечётных
    return multiply2(a, b >> 1) << 1; // логарифмический спуск на чётных
}

console.log(multiply1(2, 3));
console.log(multiply1(-1, 7));
console.log(multiply1(8, -10));
console.log(multiply1(-4, -4));
console.log(multiply1(0, -9));
console.log(multiply1(0, 0));

console.log(multiply2(2, 3));
console.log(multiply2(-1, 7));
console.log(multiply2(8, -10));
console.log(multiply2(-4, -4));
console.log(multiply1(0, -9));
console.log(multiply1(0, 0));
