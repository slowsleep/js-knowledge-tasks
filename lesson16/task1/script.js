function checkLuck(chance) {
    let percent = chance / 100;
    return Math.random() <= percent;
}

let tries = {
    true: 0,
    false: 0
}

for (let i = 0; i < 1000000; i++) {
    if (checkLuck(30)){
        tries.true++;
    }
    tries.false++;
}

console.log(tries);

