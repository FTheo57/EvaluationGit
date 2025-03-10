// Récupérer les éléments du DOM
const rulesBtn = document.getElementById('rules-btn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');

// Ouvrir la popup
rulesBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Fermer la popup
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
