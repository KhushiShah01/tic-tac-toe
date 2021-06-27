import Game from "./Game.js";
import GameView from "./GameView.js";


let game = new Game();
let gameview = new GameView();


document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
  let removechild = document.querySelector(".winner");
  removechild.removeChild(removechild.firstChild);
});


let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});


function onTileClick(i) {
  game.makeMove(i);
  gameview.updateBoard(game);
}

function onRestartClick() {
  game = new Game();
  gameview.updateBoard(game);
}

gameview.updateBoard(game);
