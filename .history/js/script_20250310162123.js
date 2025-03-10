
const rulesBtn = document.getElementById('rules-btn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');


rulesBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});


closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
