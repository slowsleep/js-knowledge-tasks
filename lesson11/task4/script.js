const btn = document.querySelector('button');

window.onresize = function() {
    btn.textContent = `Ширина экрана ${window.innerWidth} пикселей`;
}
