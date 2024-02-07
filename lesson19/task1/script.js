function isValidJson(str) {
    if (!str || typeof str !== 'string') return false
    try {
        JSON.parse(str)
        return true
    } catch (e) {
        return false
    }
}

let s1 = `{"name":"julie","age":15}`
let s2 = `{name:"julie";"age":15}`
let s3 = `i'm just string`
let s4 = 123
let s5 = true
let s6;

console.log([s1, s2, s3, s4, s5, s6].map(isValidJson))
