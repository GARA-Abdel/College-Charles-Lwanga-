/* ============================================
   COLLÈGE CHARLES LWANGA - NOUNA
   Script principal
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ----------------------------------------
       1. MENU HAMBURGER (mobile)
       ---------------------------------------- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
            // Change l'icône ☰ en ✕ quand ouvert
            menuToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
        });

        // Ferme le menu quand on clique sur un lien
        navMenu.querySelectorAll('a').forEach(function (lien) {
            lien.addEventListener('click', function () {
                navMenu.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });
    }

    /* ----------------------------------------
       2. ANNÉE AUTOMATIQUE DANS LE FOOTER
       ---------------------------------------- */
    const anneeElement = document.querySelector('#annee');
    if (anneeElement) {
        anneeElement.textContent = new Date().getFullYear();
    }

    /* ----------------------------------------
       3. LIEN ACTIF DANS LE MENU
       ---------------------------------------- */
    const pageActuelle = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(function (lien) {
        const href = lien.getAttribute('href');
        if (href === pageActuelle) {
            lien.classList.add('active');
        }
    });

});