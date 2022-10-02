let userInputEl = document.getElementById("userInput");
let keyCondeListEl = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keyCode) {
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("mt-1");
    listItemEl.textContent = keycode;
    keyCodeListEl.appendChild(listItemEl);
}

function onKeydown(event) {
    createAndAppendKeyCode(event.keycode);
}

userInputEl.addEventListener("keydown", onKeydown);