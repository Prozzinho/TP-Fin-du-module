// Script pour faire défiler les slides

const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let currentSlide = 0;

// On ajoute la classe 'active' à la première slide pour l'afficher
slides[currentSlide].classList.add('active');

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide >= slideCount) {
        currentSlide = 0;
    }
    slides[currentSlide].classList.add('active');
    slides[currentSlide].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}, 20000);

// Gestion des clics sur les boutons de navigation

// On récupère tout les labels (bouton) dans .navigation-clic
const labels = document.querySelectorAll('.navigation-clic label');

// On ajoute un écouteur d'événement pour chaque label
labels.forEach(label => {
    label.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = parseInt(label.getAttribute('data-slide'));
        slides[currentSlide].classList.add('active');
    });
});

    