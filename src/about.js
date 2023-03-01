
function aboutLoad() {
    let main = document.querySelector(".main");
    let info = document.createElement("h1");
    info.textContent = "If you want to explore our food from across the galaxy contact us down below!";
    let phones = document.createElement("h5");
    phones.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur labore magni tempore architecto eum reiciendis nostrum laboriosam distinctio autem facilis, expedita corporis odio praesentium, recusandae sunt. Aspernatur, cum voluptates!";
    info.appendChild(phones);
    main.replaceChildren(info);
}

export default aboutLoad;