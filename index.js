function addItem(){
    const newItem = document.getElementById("new-item");
    const unorderedList = document.getElementById("list");
    const listItem = document.createElement("li");

    const textElement = document.createElement("span");
    textElement.textContent = newItem.value;
    listItem.append(textElement);

    const editInputElement = document.createElement("input");
    editInputElement.setAttribute('type','text');
    editInputElement.setAttribute('name','edit-item');
    editInputElement.setAttribute('class','hide');
    editInputElement.value = newItem.value;
    listItem.appendChild(editInputElement);

    newItem.value = "";
    
    listItem.appendChild(createWhiteSpaceElement());

    const removeButton = document.createElement("button");
    removeButton.setAttribute('name','remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', removeItem);
    listItem.appendChild(removeButton);

    listItem.appendChild(createWhiteSpaceElement());

    const editButton = document.createElement('button');
    editButton.setAttribute('name', 'edit-button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editItem);
    listItem.appendChild(editButton);

    unorderedList.appendChild(listItem);
}

function editItem(event) {
    const editButton = event.target;
    const listItem = event.target.parentNode;
    const textElement = listItem.getElementsByTagName("span")[0];
    const inputElement = listItem.getElementsByTagName("input")[0];

    if(editButton.textContent == "Edit") {   
        editButton.textContent = "Save";
        textElement.setAttribute('class', 'hide');
        inputElement.removeAttribute('class');
    } else {
        editButton.textContent = "Edit";
        textElement.textContent = inputElement.value;
        inputElement.setAttribute('class', 'hide');
        textElement.removeAttribute('class');
    }
}

function createWhiteSpaceElement() {
    return document.createTextNode(" ");
}

const addItemButton = document.getElementById("add-item");
addItemButton.addEventListener('click', addItem);

function removeItem(clickEvent){
    clickEvent.target.parentElement.remove();
}
