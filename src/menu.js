
function menuLoad() {
    let main = document.querySelector(".main");
    let menu = document.createElement("div");
    menu.innerText = "Here are today's specials";
    main.replaceChildren(menu);
    
}

export default menuLoad;