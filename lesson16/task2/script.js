function checkLuck(chance) {
    let percent = chance / 100;
    return Math.random() <= percent;
}

const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const productNames = [
    "Орехи",
    "Морковь",
    "Спаржа",
    "Печенье",
    "Наушники",
    "Молоко",
    "Сок",
    "Контейнер",
    "JS-разработчик",
    "Прямые руки",
    "Водка",
];
const getRandomProductName = () => {
    return productNames[random(0, productNames.length - 1)];
};
const getRandomPrice = () => random(300, 10000);

const getRandomProducts = () => {
    return Array.from({ length: random(5, 10) }).map(() => ({
        name: getRandomProductName(),
        price: getRandomPrice(),
    }));
}

const serverMock = (latency, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = checkLuck(30);
            if (shouldFail) {
                reject("Произошла ошибка");
            } else {
                resolve(getRandomProducts())
            }
        }, latency);

    })
};

serverMock(3000)
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

