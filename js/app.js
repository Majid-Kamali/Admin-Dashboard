"use strict";

const menuItems = document.querySelectorAll('.menu-list__item');
const toggleNavbar = document.querySelector('.navbar-toggle');
const sidebar = document.querySelector('.sidebar');
const panel = document.querySelector('.panel');


// show active menu Item and open panel menu if closed
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuItems.forEach(menu => menu.classList.remove('menu-list__item--active'));
        item.classList.add('menu-list__item--active');
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove("hidden");
            panel.classList.remove("hidden");
            toggleNavbar.classList.remove("rotate");
        }
    })
});

// toggle sidebar menu
toggleNavbar.addEventListener('click', () => {
    sidebar.classList.toggle("hidden");
    panel.classList.toggle("hidden");
    toggleNavbar.classList.toggle("rotate");
});
