const boxPopups = document.querySelectorAll('.box-popup');
const boxToDisplay = document.querySelector('#box-template-popup');
var nombreBox = boxPopups.length;
const body = document.querySelector('body');
const closePopupButton = document.querySelector('#close-popup');
const maPage = document.querySelector('html');


boxPopups.forEach(box => {

        box.addEventListener('click', () => {

            // Récupère le titre et le paragraphe de la box et la couleur de fond
            const titre = box.querySelector('h3').textContent;
            const paragraphe = box.querySelector('.text-popup').innerHTML; // Utilise innerHTML pour conserver les balises HTML
            const colorBox = getComputedStyle(box).backgroundColor;
            

            // Met à jour le contenu du template
            const templateHeader = document.querySelector('#box-template-header h3');
            const templateBody = document.querySelector('#box-template-body div');
        

            boxToDisplay.style.backgroundColor = colorBox; // Change la couleur de fond de la box 
            templateHeader.textContent = titre;
            templateBody.innerHTML = paragraphe; // Utilise innerHTML pour conserver les balises HTML

            // Affiche le template
            boxToDisplay.style.display = 'block';
            document.querySelector('main').classList.add('blur'); // Applique le flou au contenu principal
            setTimeout(() => {
                boxToDisplay.classList.add('open'); // Ajoute la classe pour l'animation
            }, 10);
        });
    });


            closePopupButton.addEventListener('click', () => {
                boxToDisplay.style.display = 'none'; // Masque le template
                boxToDisplay.classList.remove('open'); // Enlève la classe pour l'animation
                document.querySelector('main').classList.remove('blur'); // Retire le flou du contenu principal
                setTimeout(() => {
                    boxToDisplay.style.display = 'none'; // Assure que la box est complètement masquée
                    }, 300); // Correspond à la durée de la transition
            });

            document.addEventListener('keydown', (event) => {
                if (event.key == 'Escape') {
                    boxToDisplay.style.display = 'none'; // Masque le template
                    boxToDisplay.classList.remove('open'); // Enlève la classe pour l'animation
                    document.querySelector('main').classList.remove('blur'); // Retire le flou du contenu principal
                    setTimeout(() => {
                        boxToDisplay.style.display = 'none'; // Assure que la box est complètement masquée
                    }, 300); // Correspond à la durée de la transition
                }
            });

            document.addEventListener('click', (event) => {
                if (boxToDisplay.style.display === 'block' && !boxToDisplay.contains(event.target) && !event.target.closest('.box-popup')) { 
                    boxToDisplay.style.display = 'none'; // Masque le template
                    boxToDisplay.classList.remove('open'); // Enlève la classe pour l'animation
                    document.querySelector('main').classList.remove('blur'); // Retire le flou du contenu principal
                    setTimeout(() => {
                        boxToDisplay.style.display = 'none'; // Assure que la box est complètement masquée
                    }, 300); // Correspond à la durée de la transition
            }});
            


