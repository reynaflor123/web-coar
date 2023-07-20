const buttonNavigationMenuOpen = document.querySelector('#button-navigation-open');
const buttonNavigationMenuClose = document.querySelector('#button-navigation-close');

const navigationMenu = document.querySelector('#menu-navigation');


function showNavigationMenu(){
    navigationMenu.classList.add('navigation-menu-actived');
}

function closeNavigationMenu(){
    navigationMenu.classList.remove('navigation-menu-actived');
}


buttonNavigationMenuOpen.addEventListener('click',showNavigationMenu)
buttonNavigationMenuClose.addEventListener('click',closeNavigationMenu)