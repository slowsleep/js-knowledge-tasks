const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const field = document.querySelector('.field');
const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    console.log(field.offsetWidth, this.offsetWidth);
    console.log(field.offsetHeight, this.offsetHeight);

    this.style.top = "0";
    this.style.left = "0";

    this.style.transform = "translate(" + random(0, field.offsetWidth - this.offsetWidth) + "px, " + random(0, field.offsetHeight - this.offsetHeight) + "px )";
    // this.style.transform = "translate(" + random(0, 10) + "px, " + random(0, 10) + "px )";
});
