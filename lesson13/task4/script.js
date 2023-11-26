function len(str) {
    if (str === "") return 0;
    return 1 + len(str.slice(0, -1));
}

console.log(len("оченьдлинноеслово") === "оченьдлинноеслово".length);
console.log(len(""));
console.log(len("hello"));
