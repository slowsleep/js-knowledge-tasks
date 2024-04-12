function mapOfSets(obj) {
    let entries = Object.entries(obj).map(([key, value]) => [key, new Set(value)])
    return new Map(entries)
}

let arr = {
    "key1": [1, 1, 1, 2, 2, 2, 3, 3, 3],
    "key2": [4, 4, 4, 5, 5, 5, 6, 6, 6],
    "key3": [7, 7, 7, 8, 8, 8, 9, 9, 9],
}

console.log(mapOfSets(arr))
