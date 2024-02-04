function* getFib() {
    let prevPrev = 1;
    let prev = 1;
    let current = 0;

    while (true) {
        if (current++ < 2) {
            yield {done: false, value: 1};
        } else {
            const value = prevPrev + prev;
            prevPrev = prev;
            prev = value;
            yield {done: false, value};
        }
    }
}

let counter = 0;

for (let i of getFib()) {
    console.log(i.value);
    if (counter++ === 15) {
        break;
    }
}
