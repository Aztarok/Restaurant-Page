
function aboutLoad() {
    let main = document.querySelector(".main");
    let content = document.createElement("h1");
    content.textContent = "If you want to explore our food from across the galaxy contact us down below!";
    main.replaceChildren(content);   
}

export default aboutLoad;