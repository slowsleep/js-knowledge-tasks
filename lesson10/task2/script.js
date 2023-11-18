import {random} from "../task1/random.js";

let colors = ['blue', 'cian', 'violet', 'whitesmoke', 'gray', 'yellow', 'orange'];

let paragraphs = document.querySelectorAll('p');

const changeColor = (arr) => {
    let length = paragraphs.length;
    const timeout = setInterval(() => {
        arr.forEach((p) => {
            p.style.backgroundColor = colors[random(0, colors.length)];
        })
    }, 1000);
}

changeColor(paragraphs);
