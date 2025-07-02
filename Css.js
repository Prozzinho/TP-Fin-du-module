// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments qui peuvent déclencher un menu déroulant
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            // Empêche le comportement par défaut du lien (qui est de remonter en haut de la page)
            event.preventDefault();

            // Trouve l'élément parent `<li>`
            const parentMenuItem = this.parentElement;
            
            // Trouve le sous-menu à l'intérieur de cet élément parent
            const submenu = parentMenuItem.querySelector('.submenu');

            // Ajoute ou retire la classe 'open' sur le sous-menu
            submenu.classList.toggle('open');
            
            // Ajoute ou retire la classe 'open' sur le déclencheur (pour la rotation de la flèche)
            this.classList.toggle('open');
        });
    });
});