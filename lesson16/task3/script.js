function promiseTimeout(ms, promise) {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timed out in ${ms} ms.`))
        }, ms)
    })
    return Promise.race([timeout, promise]);
}

const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Fetched data');
    }, 1003)
})

promiseTimeout(1000, fetchData())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

promiseTimeout(1005, fetchData())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))