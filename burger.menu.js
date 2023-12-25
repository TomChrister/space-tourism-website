/*
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeIcon = document.getElementById('closeIcon');

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {
        const isOpen = hamburgerMenu.style.transform === 'translateX(0%)';

        if (isOpen) {
            hamburgerMenu.style.transform = 'translateX(100%)';
        } else {
            hamburgerMenu.style.transform = 'translateX(0%)';
        }
    }
});
*/

// Update the JavaScript code in burger.menu.js

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeIcon = document.getElementById('closeIcon');

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {
        const isOpen = hamburgerMenu.style.transform === 'translateX(0%)';

        if (isOpen) {
            hamburgerMenu.style.transform = 'translateX(100%)';
            closeIcon.style.display = 'none'; // Hide close icon when menu is closed
        } else {
            hamburgerMenu.style.transform = 'translateX(0%)';
            closeIcon.style.display = 'block'; // Show close icon when menu is open
        }
    }
});
