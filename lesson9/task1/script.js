function countEverySecond(n) {
    let startNum = 0;
    let timer = setInterval(() => {
        startNum++;
        console.log(startNum);
        if (startNum == n) {
            clearInterval(timer);
        }
    }, 1000);
}

countEverySecond(7);
