function countEverySecond(n) {
    let startNum = 1;
    setTimeout(function start(){
        if (startNum <= n) {
            console.log(startNum++);
            setTimeout(start, 1000);
        }
    }, 1000);
}

countEverySecond(4);
