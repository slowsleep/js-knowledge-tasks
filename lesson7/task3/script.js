function countChars(str) {
    let count = {};
    str.split('').forEach(letter => {
        letter = letter.toLowerCase();
        count[letter] ? count[letter] += 1 : count[letter] = 1;
    });
    return count;
}

console.log(countChars('Арарат'));
