const accordions = document.querySelectorAll('.accordion');

for(let item of accordions) {
    item.addEventListener("click", function() {
        this.querySelector(".panel").classList.toggle("panel--hidden");
    })
}
