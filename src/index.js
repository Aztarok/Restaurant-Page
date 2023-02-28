import pageLoad from "./pageload";
import "./style.css";
pageLoad();
let navbar = document.querySelector(".header")
let main = document.querySelector(".content");

let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log(e.target);
    })
});

// This will have the toggle to change pages