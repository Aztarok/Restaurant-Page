import pageLoad from "./pageload";
import homeLoad from "./home";
import menuLoad from "./menu";
import aboutLoad from "./about";
import "./style.css";
pageLoad();
let navbar = document.querySelector(".header")
let currentPage = "home";

let btns = document.querySelectorAll(".btn");


btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let current = e.target.getAttribute("data-page");
        currentPage = current;
        if (current === "home") {
            homeLoad();
            
        }
        else if (current === "menu") {
            menuLoad();
        }
        else if (current === "about") {
            aboutLoad();
        }
    })
});

// This will have the toggle to change pages