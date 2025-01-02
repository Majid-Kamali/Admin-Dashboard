"use strict";

const menuItems = document.querySelectorAll('.menu-list__item');
const toggleNavbar = document.querySelector('.navbar-toggle');
const sidebar = document.querySelector('.sidebar');
const panel = document.querySelectorAll('.panel');
const headerNotification = document.querySelector('.header-actions-notification__icon');
const headerNotificationDropdown = document.querySelector('.header-notification__dropdown');
const headerNotificationTabs = document.querySelectorAll('.header-notification-tabs__btn');


// Show active menu Item and open panel menu if closed
menuItems.forEach((item) => {
    item.addEventListener('click', () => {

        const panelId = item.getAttribute('data-panel');
        menuItems.forEach(menu => menu.classList.remove('menu-list__item--active'));
        item.classList.add('menu-list__item--active');
        panel.forEach(panel => panel.classList.remove('panel--active'));
        document.querySelector(`.panel[data-panel="${panelId}"]`).classList.add('panel--active');


        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove("hidden");
            menuItems.forEach((item) => {
                item.addEventListener('click', () => {
                    const panelId = item.getAttribute('data-panel');
                    menuItems.forEach(menu => menu.classList.remove('menu-list__item--active'));
                    item.classList.add('menu-list__item--active');
                    panel.forEach(panel => panel.classList.remove('panel--active'));
                    document.querySelector(`.panel[data-panel="${panelId}"]`).classList.add('panel--active');
                })
            });
            toggleNavbar.classList.remove("rotate");
        }

    })
});

// Toggle sidebar menu
toggleNavbar.addEventListener('click', () => {
    sidebar.classList.toggle("hidden");

    if (sidebar.classList.contains("hidden")) {
        menuItems.forEach(menu => menu.classList.remove('menu-list__item--active'));
        panel.forEach(panel => panel.classList.remove('panel--active'));
    } else {
        const menuItem = document.querySelectorAll('.menu-list__item')[3];
        const panelId = menuItem.getAttribute('data-panel');
        menuItem.classList.add('menu-list__item--active');
        document.querySelector(`.panel[data-panel="${panelId}"]`).classList.add('panel--active');
    }

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
        document.querySelectorAll('.notification-panel').forEach(panel => panel.classList.remove('notification-panel--active'));
        document.querySelector(`.notification-panel[data-tab="${tabId}"]`).classList.add('notification-panel--active');
    })
});
