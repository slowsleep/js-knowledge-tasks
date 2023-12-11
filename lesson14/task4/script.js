function changeStr(str) {
    const regexp = /password=(\S+)/g;
    const passMatch = regexp.exec(str);

    if (!passMatch) {
        return str;
    }

    const pass = passMatch[1];
    const stars = Array.from({ length: pass.length }).fill('*').join('');
    const censuredStr = str.replace(pass, stars);
    return censuredStr;
}


console.log(changeStr("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345"));
console.log(changeStr("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=efrou4hnaow4n"));
