function changeVowels(str) {
    let strMatch = [...str.matchAll(/[aeiouy]|[аеёиоуыэюя]/g)];
    let strArr = str.split('');

    for (let i = 0; i < strMatch.length; i++) {
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[j] == strMatch[i][0]) {
                strArr[j] = strMatch[i].index
                break;
            }
        }
    }

    return strArr.join("");
}


console.log(changeVowels("привет"));
console.log(changeVowels("Здр3вств8йт11 р14б16т18!"));
console.log(changeVowels("Здр3вств8йт11 р14б16т18!") == "Здр3вств8йт11 р14б16т18!");
