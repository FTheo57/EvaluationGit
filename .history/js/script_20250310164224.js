<<<<<<< HEAD
const cells = document.querySelectorAll(".cell");
const turnText = document.getElementById("turn");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(player) {
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === player)
  );
}

function checkDraw() {
  return board.every((cell) => cell !== "");
}

function handleClick(event) {
  const index = event.target.dataset.index;

  if (board[index] !== "" || checkWin("X") || checkWin("O")) return;

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    turnText.textContent = `🎉 Le joueur ${currentPlayer} a gagné !`;
    return;
  }

  if (checkDraw()) {
    turnText.textContent = "Match nul !";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  turnText.textContent = `Tour du joueur : ${currentPlayer}`;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  turnText.textContent = "Tour du joueur : X";
  cells.forEach((cell) => (cell.textContent = ""));
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);

turnText.textContent = "Tour du joueur : X";


const rulesBtn = document.getElementById('rules-btn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');


rulesBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});


closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
>>>>>>> 69c720e6e22b1e5ef24edbe2a1595e3b43fc8b64
