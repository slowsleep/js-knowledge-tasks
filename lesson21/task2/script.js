function uniqueChars(str) {
    return new Set(str.split("")).size
}

console.log(uniqueChars("abrakadabra"))
console.log(uniqueChars("banana"))
