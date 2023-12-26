async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

(async function run() {
    for (let i = 1; i<= 10; i++) {
        await delay(100);
        console.log(i);
    }
})()
