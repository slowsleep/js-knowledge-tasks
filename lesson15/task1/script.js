function random (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

function createRandomProduct() {
    return {
        price: random(300, 10000),
        name: names[random(0, names.length - 1)]
    }
}

function serverMock(latency, cb) {
    let products = Array.from({length:random(5,10)}).map(createRandomProduct);
    setTimeout(() => {
        cb(products)
    }, latency);
}

let names = ["глобус", "рюкзак", "аккумулятор", "стеклянная банка", "компас", "капкан", "зонт", "бокал", "динамик", "топор", "мегафон", "книга", "табурет", "наушники", "торшер", "будильник", "колба"];

serverMock(1000, (products) => {
    console.log(products)
});

