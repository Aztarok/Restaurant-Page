import logo from "../assets/logo.png";
import homeLoad from "./home";
const body = document.getElementById("content");

function headerLoad() {
    let header = document.createElement("div");
    header.classList.add("header");
    const headLogo = document.createElement("img");
    headLogo.src = logo;
    let leftHead = document.createElement("div");
    leftHead.classList.add("left-head");
    let title = document.createElement("h1");
    title.textContent = "Welcome to Cosmosaria";
    leftHead.appendChild(headLogo);
    leftHead.appendChild(title);
    header.appendChild(leftHead);
    buttonLoad(header);
    body.appendChild(header);
}

function buttonLoad(header) {
    let home = document.createElement("button");
    home.classList.add("btn");
    home.dataset.page = "home";
    home.innerHTML = "Home";
    let menu = document.createElement("button");
    menu.innerHTML = "Menu";
    menu.classList.add("btn");
    menu.dataset.page = "menu";
    let about = document.createElement("button");
    about.innerHTML = "About Us";
    about.classList.add("btn");
    about.dataset.page = "about";
    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btns");
    btnGroup.appendChild(home);
    btnGroup.appendChild(menu);
    btnGroup.appendChild(about);

    header.appendChild(btnGroup);
}

function contentLoad() {
    console.log("home page");
    let content = document.createElement("div");
    content.classList.add("main");
    body.appendChild(content);
    homeLoad();
}

function footerLoad() {
    let footer= document.createElement("div");
    footer.classList.add("footer");
    let changable = document.createElement("h4");
    changable.innerHTML = "Made by Aztarok";
    footer.appendChild(changable);
    body.appendChild(footer);
}

function pageLoad() {
    headerLoad();
    contentLoad();
    footerLoad();
}

export default pageLoad;