class Todo {
    constructor(options) {
        this.text = options.text;
        this.color = options.color;
        this.status = options.status;

        this.editMode = false;

        this.Init();
    }
    inputCheckClick() {
        this.status = !this.status;
    }
    btnEditClick() {
        this.li.classList.toggle("editMode");
        this.editMode = !this.editMode;
        this.btnEdit.innerText = this.editMode ? "Save" : "Edit";
        this.inputColor.style.display = this.editMode ? "block" : "none";
        this.text = this.inputText.value;
        this.label.innerText = this.text;
        this.li.style.backgroundColor = this.inputColor.value;
    }
    Events() {
        this.inputCheck.addEventListener("change", () => this.inputCheckClick());

        this.btnEdit.addEventListener("click", () => this.btnEditClick());

        this.btnDelete.addEventListener("click", () => {
            this.Delete();
        });
    }
    Init() {
        this.li = document.createElement("li");
        this.li.style.backgroundColor = this.color;

        this.inputCheck = document.createElement("input");
        this.inputCheck.type = "checkbox";
        this.checked = this.status;

        this.label = document.createElement("label");
        this.label.innerText = this.text;

        this.inputText = document.createElement("input");
        this.inputText.type = "text";
        this.inputText.value = this.text;

        this.inputColor = document.createElement("input");
        this.inputColor.type = "color";
        this.inputColor.value = this.color;
        this.inputColor.style.display = "none";

        this.btnEdit = document.createElement("button");
        this.btnEdit.innerText = "Edit";
        this.btnEdit.classList.add("edit");

        this.btnDelete = document.createElement("button");
        this.btnDelete.innerText = "Delete";
        this.btnDelete.classList.add("delete");

        this.li.appendChild(this.inputCheck);
        this.li.appendChild(this.label);
        this.li.appendChild(this.inputText);
        this.li.appendChild(this.inputColor);
        this.li.appendChild(this.btnEdit);
        this.li.appendChild(this.btnDelete);

        this.Events();
    }
    Delete() {
        this.li.remove();
    }
    get data() {
        return {
            text: this.text,
            color: this.color,
            status: this.status
        };
    }
}

let t = new Todo({
    text: "hello",
    color: "#ff0000",
    status: false
});

class Todos {
    constructor() {
        this.incomplete = document.getElementById("incomplete-tasks");
        this.complete = document.getElementById("completed-tasks");
        this.todo = [];

        this.Init();
        this.Render();
        this.Events();
    }
    Init() {
        this.Read();
    }
    Create() {
        let inputText = document.getElementById("new-task");
        let inputColor = document.getElementById("new-color");

        let text = inputText.value;
        let color = inputColor.value;
        let t = new Todo({
            text: text,
            color: color,
            status: false
        });

        inputText.value = '';
        inputColor.value = '#000000';

        this.todo.push(t);
        this.UpdateTodo(this.todo[this.todo.length - 1]);
        this.Save();
    }
    Read() {
        let json = localStorage.getItem("todos");
        let arr = JSON.parse(json);

        for (const item of arr) {
            this.todo.push(new Todo(item));
        }
    }
    Update() {
        this.Save();
    }
    Delete(todo) {
        let index = this.todo.indexOf(todo);
        delete this.todo[index];
        this.todo.splice(index, 1);
        this.Save();
    }
    Save() {
        localStorage.setItem("todos", "");
        let buf = [];
        for (const todo of this.todo) {
            buf.push(todo.data);
        }
        localStorage.setItem("todos", JSON.stringify(buf));
    }
    Render() {
        for (const todo of this.todo) {
            this.UpdateTodo(todo);
        }
    }
    UpdateTodo(todo) {
        console.log(todo.status);
        if (todo.status) {
            this.complete.appendChild(todo.li);
        }
        else {
            this.incomplete.appendChild(todo.li);
        }
    }
    Events() {
        for (const todo of this.todo) {
            todo.inputCheck.addEventListener("change", () => { this.UpdateTodo(todo); });
            todo.inputCheck.addEventListener("change", () => { this.Update(); });
            todo.btnEdit.addEventListener("click", () => { this.Update(); });
            todo.btnDelete.addEventListener("click", () => { this.Delete(todo); });
        }
        document.getElementById("add").addEventListener("click", () => { this.Create(); });
    }
}

new Todos();