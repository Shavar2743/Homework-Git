function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((array) => {
            array.forEach((taskObjekt) => {
                adding(taskObjekt.title, taskObjekt.completed);
            });
        });
}

function adding(aufgabe, completed) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let DELbutton = document.createElement("button");

    label.textContent = aufgabe;

    DELbutton.textContent = "X";
    DELbutton.addEventListener("click", () => {
        li.remove();
    });
    
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    li.appendChild(DELbutton);
    li.appendChild(checkbox);
    li.appendChild(label);
    list.appendChild(li);
}

addbutton.onclick = function addit() {
    adding(inputarea.value, false);
    inputarea.value = "";
};

getTodos();
