let checkboxWithLabelContainerEl = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainerEl.classList.add("text-center","p-5");
let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for","checkbox");
labelEl.textContent = "Click Me!";
labelEl.classList.add("ml-2");
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);