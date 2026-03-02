let navbar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".rightNav");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});