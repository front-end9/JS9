let btnAdd = document.getElementById("add");

btnAdd.addEventListener("click", () => {
    let text = document.getElementById("new-task").value;

    document.getElementById("new-task").value = "";

    let li = document.createElement("li");
    let inputCheck = document.createElement("input");
    let checkAttr = document.createAttribute("type");
    checkAttr.value = "checkbox";
    inputCheck.attributes.setNamedItem(checkAttr);
    inputCheck.addEventListener("click", checkClick);

    li.appendChild(inputCheck);

    let label = document.createElement("label");
    label.innerText = text;

    li.appendChild(label);

    let inputText = document.createElement("input");
    let inputAttr = document.createAttribute("type");
    inputAttr.value = "text";
    let inputValue = document.createAttribute("value");
    inputValue.value = text;
    inputText.attributes.setNamedItem(inputAttr);
    inputText.attributes.setNamedItem(inputValue);

    li.appendChild(inputText);

    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";
    btnEdit.classList.add("edit");

    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.classList.add("delete");

    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    btnEdit.addEventListener("click", function () {
        let li = this.parentElement;
        li.classList.toggle("editMode");
        this.innerText = li.classList.contains("editMode") ? "Save" : "Edit";
        let inputText = li.childNodes[2].value;
        let label = li.childNodes[1];
        label.innerText = inputText;
    });

    btnDelete.addEventListener("click", function () {
        this.parentElement.remove();
    });

    document.getElementById("incomplete-tasks").appendChild(li);
});

let checkbox = document.querySelectorAll("input[type=checkbox]");
console.log(checkbox);

for (let i = 0; i < checkbox.length; i++) {
    const element = checkbox[i];
    element.addEventListener("click", checkClick);
}

function checkClick() {
    let li = this.parentElement;

    if (this.checked) {
        document.getElementById("completed-tasks").appendChild(li);
    }
    else {
        document.getElementById("incomplete-tasks").appendChild(li);
    }
}