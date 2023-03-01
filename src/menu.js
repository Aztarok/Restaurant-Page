import hamburger from "../assets/hamburger.png";
import milkshake from "../assets/milkshake.png";

function menuLoad() {
    let main = document.querySelector(".main");
    let menu = document.createElement("h2");
    menu.innerText = "Here are today's specials";
    const hamburgerimg = document.createElement("img");
    hamburgerimg.src = hamburger;
    hamburgerimg.classList.add("menu-img");
    const milkshakeimg = document.createElement("img");
    milkshakeimg.classList.add("menu-img");
    milkshakeimg.src = milkshake;
    let content = document.createElement("div");
    content.classList.add("menu");

    let hamburgertxt = document.createElement("h3");
    hamburgertxt.textContent = "Here we have the space burger which will take you through an out of body experience.";
    let menuItemOne = document.createElement("div");
    menuItemOne.appendChild(hamburgerimg);
    menuItemOne.appendChild(hamburgertxt);

    let milkshaketxt = document.createElement("h3");
    milkshaketxt.textContent = "These are the cosmic shakes that lead you into the abyss of space.";
    let menuItemTwo = document.createElement("div");
    menuItemTwo.appendChild(milkshakeimg);
    menuItemTwo.appendChild(milkshaketxt);

    content.appendChild(menu);
    content.appendChild(menuItemOne);
    content.appendChild(menuItemTwo);
    main.replaceChildren(content);
}

export default menuLoad;