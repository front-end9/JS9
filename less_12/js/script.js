class User {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.username = options.username;
    }
    RenderUser() {
        return `${this.name}`;
    }
}

class Blog {
    constructor() {
        this.users = [];
        this.root = document.getElementById('root');
        this.Init();
    }
    Init() {
        this.Get('/users', this.SetUsers);
        // this.Get(`/posts?uderId=${this.id}`);
    }
    SetUsers(arr, self) {
        for (const el of arr) {
            console.log(self);
            self.users.push(new User(el));
        }
        self.RenderUsers();
    }
    RenderUsers() {
        let ul = document.createElement('ul');
        for (const user of this.users) {
            let li = document.createElement('li');
            li.innerText = user.RenderUser();
            ul.appendChild(li);
        }
        this.root.appendChild(ul);
    }
    Get(partURL, func) {
        let self = this;
        fetch(`https://jsonplaceholder.typicode.com${partURL}`)
            .then(response => response.json())
            .then(json => {
                func(json, self);
            });
    }
    ShowInConsole(arr) {
        console.log(arr);
    }
}

let b = new Blog();