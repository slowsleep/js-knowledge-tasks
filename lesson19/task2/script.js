const SECRET = "+_)(*&^%$#@!"

function serialize(arr) {
    let res = []
    arr.map((item) => {
        if (item instanceof Date) {
            res.push(SECRET + item.getTime())
        } else {
            res.push(JSON.stringify(item))
        }
    })
    return JSON.stringify(res)
}

function deserialize(str) {
    let arr = JSON.parse(str)
    let newArr = []
    arr.map((item) => {
        if (typeof item === "string") {
            if (item.startsWith(SECRET)) {
                let strDate = item.replace(SECRET, "")
                newArr.push(new Date(parseInt(strDate)))
            } else {
                newArr.push(JSON.parse(item))
            }
        }
    })
    return newArr
}


const arr = [
    new Date(),
    new Date(123123),
    [1, 2, 3, 4, 5],
    { name: "Jack", age: 22 },
    123321999777,
    '1973-11-28T08:06:39.777Z',
];

console.log(arr)

let ser = serialize(arr)
console.log(ser)

let deser = deserialize(ser)
console.log(deser)

console.log(arr.toString() == deser.toString())
