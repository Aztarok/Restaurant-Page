import logo from "../assets/logo.jpg";
const body = document.getElementById("content");

function headerLoad() {
    let header = document.createElement("div");
    header.classList.add("header");
    let home = document.createElement("button");
    home.classList.add("btn");
    home.innerHTML = "Home";
    let menu = document.createElement("button");
    menu.innerHTML = "Menu";
    menu.classList.add("btn");
    let about = document.createElement("button");
    about.innerHTML = "About Us";
    about.classList.add("btn");
    const headLogo = document.createElement("img");
    headLogo.src = logo;
    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btns");
    btnGroup.appendChild(home);
    btnGroup.appendChild(menu);
    btnGroup.appendChild(about);
    header.appendChild(headLogo);
    header.appendChild(btnGroup);
    console.log(header);
    body.appendChild(header);
}

function contentLoad() {
    let content = document.createElement("div");
    content.classList.add("content");
    let changable = document.createElement("div");
    changable.innerHTML = "Here is the best restaurant in the universe. It will really change your perspective on life.";
    content.appendChild(changable);
    body.appendChild(content);
}

function footerLoad() {
    let footer= document.createElement("div");
    footer.classList.add("footer");
    let changable = document.createElement("h4");
    changable.innerHTML = "Here is the best restaurant in the universe. It will really change your perspective on life.";
    footer.appendChild(changable);
    body.appendChild(footer);
}

function pageLoad() {
    headerLoad();
    contentLoad();
    footerLoad();
}

export default pageLoad;