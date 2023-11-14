function repeatWord(word, count) {
    let res = [];
    for (let i = 1; i <= count; i++) {
        res.push(word + i)
    }
    return res.join(', ');
}

console.log(repeatWord('word', 3))
