function checkLuck(chance) {
    let percent = chance / 100;
    return Math.random() <= percent;
}

const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};


function flipCoin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(50)) {
                resolve('heads');
            } else {
                resolve('tails');
            }
        }, random(50, 200));
    })
}


let flips = Array.from({length: 100000}).map(() => flipCoin());

Promise.all(flips).then(results => {
    const counts = results.reduce((counts, result) => {
        counts[result]++;
        return counts;
    }, {heads: 0, tails: 0});
    console.log('All tries promises ', counts)
});


