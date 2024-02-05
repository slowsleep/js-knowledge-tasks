const random = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

function checkLuck(chance) {
    let percent = chance / 100
    return Math.random() <= percent
}

function flipCoin() {
    if (checkLuck(50)) {
        return "tails"
    } else {
        return "heads"
    }
}

async function* flipCoins() {
    while(true) {
        await new Promise((resolve) => setTimeout(resolve, random(200, 400)))
        yield flipCoin()
    }
}

async function main() {
    let counter = 0
    let generator = flipCoins()
    let t0 = performance.now()

    for await (let coin of generator) {
        console.log(coin)
        if(counter++ == 10) break
    }
    let t1 = performance.now()

    let timeDiff = t1 - t0

    console.log("Tt's all took " + (timeDiff).toFixed(4) + " milliseconds, or " + (timeDiff / 1000).toFixed(4) + " seconds")
}

main()
