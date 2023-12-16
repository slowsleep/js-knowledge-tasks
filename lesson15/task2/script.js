const LATENCY = 400;

function getProduct(productId, cb) {
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
    setTimeout(cb, LATENCY, products[productId]);
}

function getBoxId(productId, rackId, cb) {
    // rackId: boxes: { boxId0: productId2, boxId1: productId4 }
    let boxes = {
        1: [2, 4, 5, 6, 9],
        2: [0, 1, 3, 7, 8],
    }
    setTimeout(cb, LATENCY, boxes[rackId].indexOf(productId));
}

function getProductWeight(rackId, boxId, cb) {
    let boxWeight = {
        1: [10, 11, 12, 13, 14],
        2: [15, 16, 17, 17, 19],
    }
    setTimeout(cb, LATENCY, boxWeight[rackId][boxId]);
}


const printProduct = (productId) => {
    getProduct(productId, ({rackId}) => {
        getBoxId(productId, rackId, (boxId) => {
            getProductWeight(rackId, boxId, (boxWeight) => {
                console.log(`продукт ${productId} находится на стеллаже ${rackId} в коробке под номером ${boxId}, которая весит - ${boxWeight}`)
            })
        })
    })
}

printProduct(5);