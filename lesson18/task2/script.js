const fib = {
    [Symbol.iterator]() {
        let prevPrev = 1;
        let prev = 1;
        let current = 0;
        return {
            next() {
                if (current++ < 2) {
                    return {done: false, value: 1};
                }
                const value = prevPrev + prev;
                prevPrev = prev;
                prev = value;
                return {done: false, value};
            }
        }
    }
};

let counter = 0;

for (let i of fib) {
    console.log(i);
    if (counter++ === 15) {
        break;
    }
}
