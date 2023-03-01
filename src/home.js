function homeLoad() {
    let main = document.querySelector(".main");
    let content = document.createElement("h1");
    content.textContent = "Here is the best restaurant in the universe. It will really change your perspective on life.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam consequuntur architecto dolores veniam atque.";
    content.classList.add("home");
    main.replaceChildren(content);   
}

export default homeLoad;