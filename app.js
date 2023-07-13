const hamburger = document.querySelector(".hamburger");
const nav2 = document.querySelector(".nav2");
const close = document.querySelector(".close-menu");
const menu = document.querySelector(".menu-bar");
const header = document.querySelector(".header");

menu.addEventListener('click', () => {    
    hamburger.classList.toggle('active');
    close.classList.toggle('active');
    nav2.classList.toggle('visible');  
    header.classList.toggle('menu');                      
})
