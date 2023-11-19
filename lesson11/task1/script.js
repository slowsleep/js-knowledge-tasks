function handler() {
    const newBtn = document.createElement("button");
    newBtn.classList.add("btn");
    newBtn.textContent = "кнопка";
    newBtn.addEventListener("click", handler);
    document.querySelector("body").appendChild(newBtn);
}

document.querySelector(".btn").addEventListener("click", handler);
