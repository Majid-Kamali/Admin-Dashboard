"use strict";

const menuItems = document.querySelectorAll('.menu-list__item');
const toggleNavbar = document.querySelector('.navbar-toggle');
const sidebar = document.querySelector('.sidebar');
const panel = document.querySelector('.panel');
const headerNotification = document.querySelector('.header-actions-notification__icon');
const headerNotificationDropdown = document.querySelector('.header-notification__dropdown');
const headerNotificationTabs = document.querySelectorAll('.header-notification-tabs__btn');


// Show active menu Item and open panel menu if closed
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

// Toggle sidebar menu
toggleNavbar.addEventListener('click', () => {
    sidebar.classList.toggle("hidden");
    panel.classList.toggle("hidden");
    toggleNavbar.classList.toggle("rotate");
});

// Toggle header notification 
headerNotification.addEventListener('click', () => {
    headerNotificationDropdown.classList.toggle('open')
});



// Active panels for each tabs 
headerNotificationTabs.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        headerNotificationTabs.forEach(btn => btn.classList.remove('header-notification-tabs--active'));
        button.classList.add('header-notification-tabs--active');
        document.querySelectorAll('.notification-panel').forEach(panel => panel.classList.remove('active'));
        document.querySelector(`.notification-panel[data-tab="${tabId}"]`).classList.add('active');
    })
});
