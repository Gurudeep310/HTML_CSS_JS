let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add('bg-container');
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement('ul');
listContainerEl.classList.add('list-container');
bgContainerEl.appendChild(listContainerEl);

let groceryItems = ['Milk','Butter','Chocolate','Noodles','Cup Cakes','Tomato'];
for (let items of groceryItems){
    let listItemEl = document.createElement('li');
    listItemEl.textContent = items;
    listContainerEl.appendChild(listItemEl);
}

let checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';
checkboxEl.id = 'deliveryMode';
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement('label');
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = 'Need Home Delivery';
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement('br');
bgContainerEl.appendChild(breakEl);

let btnEl = document.createElement('button');
btnEl.classList.add('btn','btn-primary');
btnEl.textContent = 'Proceed to Pay';
bgContainerEl.appendChild(btnEl);