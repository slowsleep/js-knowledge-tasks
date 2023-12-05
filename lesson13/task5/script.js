function reverseStr(str) {
    return str == "" ? "" : reverseStr(str.slice(1)) + str[0];
}

console.log(reverseStr("привет"));
