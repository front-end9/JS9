class User {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.username = options.username;
        this.email = options.email;
        this.phone = options.phone;
        this.website = options.website;
        this.info = false;
        this.posts = false;
    }
    RenderUser() {
        return `${this.name}`;
    }
    RenderUserInfo() {
        return `email: ${this.email}
            phone: ${this.phone}
            website: ${this.website}
        `;
    }
}

class Blog {
    constructor() {
        this.users = [];
        this.root = document.getElementById('root');
        this.temp = [];
        this.tempInfo = {};
        this.Init();
    }
    Init() {
        this.Get('/users', this.SetUsers);
    }
    SetUsers(arr, self) {
        for (const el of arr) {
            self.users.push(new User(el));
        }
        self.RenderUsers();
    }
    RenderUsers() {
        let ul = document.createElement('ul');
        for (const user of this.users) {
            let li = document.createElement('li');
            li.innerText = user.RenderUser();
            li.addEventListener("click", () => {
                this.Get(`/users?id=${user.id}`, this.SetUserInfo, li);
            });
            ul.appendChild(li);
        }
        this.root.appendChild(ul);
    }
    SetUserInfo(arr, self, li) {
        self.tempInfo = arr[0];
        // for (const key in arr[0]) {
        //     if (arr[0].hasOwnProperty(key)) {
        //         const element = arr[0][key];
        //         self.tempInfo[key] = element;
        //     }
        // }
        self.RenderUserInfo(li);
    }
    RenderUserInfo(li) {
        let user = this.users[this.tempInfo.id - 1];
        if (!user.info) {
            let div = document.createElement('div');
            div.innerText = user.RenderUserInfo();
            let btn = document.createElement('button');
            btn.addEventListener("click", () => {
                this.Get(`/posts?userId=${user.id}`, this.SetPosts, div);
            });
            btn.innerText = "show posts";
            div.appendChild(btn);
            li.appendChild(div);
            user.info = true;
        }
    }
    SetPosts(arr, self, el) {
        self.temp = [];
        for (const el of arr) {
            self.temp.push(el);
        }
        self.RenderPost(el);
    }
    RenderPost(el) {
        let user = this.users[this.temp[0].userId];
        if (!user.posts) {
            for (const art of this.temp) {
                let article = document.createElement("article");
                el.appendChild(article);
                article.innerHTML = `
                <h2>${art.title}</h2>
                <p>${art.body}</p>`;
            }
            user.posts = true;
        }
    }
    Get(partURL, func, el) {
        let self = this;
        fetch(`https://jsonplaceholder.typicode.com${partURL}`)
            .then(response => response.json())
            .then(json => {
                func(json, self, el);
            });
    }
    ShowInConsole(arr) {
        console.log(arr);
    }
}

let b = new Blog();