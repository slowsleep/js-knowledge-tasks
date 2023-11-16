function change(arr) {
    let res = {};
    arr.forEach(item => {
        res[item[0]] = item[1];
    });
    return res;
}

console.log(change([['ключ1', 'значение1'], ['ключ2', 'значение2']]))
