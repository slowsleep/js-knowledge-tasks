function checkLuck(chance) {
    let percent = chance / 100;
    return Math.random() <= percent;
}

const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const LATENCY = 400;

function getProduct(productId) {
    let products = {
        0: { name: 'аккумулятор', rackId: 2 },
        1: { name: 'глобус', rackId: 2 },
        2: { name: 'торшер', rackId: 1 },
        3: { name: 'топор', rackId: 2 },
        4: { name: 'рюкзак', rackId: 1 },
        5: { name: 'торшер', rackId: 1 },
        6: { name: 'динамик', rackId: 1 },
        7: { name: 'стеклянная банка', rackId: 2 },
        8: { name: 'книга', rackId: 2 },
        9: { name: 'табурет', rackId: 1 }
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(10)) {
                reject('getProduct failed')
            } else {
                resolve(products[productId]);
            }
        }, LATENCY)
    })
}

function getBoxId(productId, rackId) {
    // rackId: boxes: { boxId0: productId2, boxId1: productId4 }
    let boxes = {
        1: [2, 4, 5, 6, 9],
        2: [0, 1, 3, 7, 8],
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(10)) {
                reject('getBoxId failed')
            } else {
                resolve(boxes[rackId].indexOf(productId));
            }
        }, LATENCY)
    })
}

function getProductWeight(rackId, boxId) {
    let boxWeight = {
        1: [10, 11, 12, 13, 14],
        2: [15, 16, 17, 17, 19],
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(10)) {
                reject('getProductWeight failed')
            } else {
                resolve(boxWeight[rackId][boxId]);
            }
        }, LATENCY)
    })
}

const getWeight = (productId) => {
    let rackIndex;
    let productName;
    let boxIndex;
    getProduct(productId)
        .then(({name, rackId}) => {
            rackIndex = rackId;
            productName = name;
            return getBoxId(productId, rackIndex);
        })
        .then((boxId) => {
            boxIndex = boxId;
            return getProductWeight(rackIndex, boxIndex);
        })
        .then((boxWeight) => {
            console.log(`Коробка №${boxIndex} c ${productName} находится на стеллаже №${rackIndex} и весит ${boxWeight} кг.`);
        })
        .catch((error) => console.log(error))
}

getWeight(random(0,9))
