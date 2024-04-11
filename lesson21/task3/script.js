function onlyUniqueLength(arr) {
    let res = []
    let a = new Set()
    arr.forEach(item => {
        if (!a.has(item.length)) {
            res.push(item)
            a.add(item.length)
        }
    })
    return res
}


console.log(onlyUniqueLength(['1', '2', '3', '44']))
console.log(onlyUniqueLength(['123', '21', '75', '4321', '3', '22', '6']))
