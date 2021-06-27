export default class GameView {
  constructor() {}

  updateBoard(game) {
    this.updateTurn(game);

    const winningCombination = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index="${i}"]`);

      let tiletype = game.board[i] == "X" ? "tilex" : "tileo";

      tile.innerHTML = `<span class="${tiletype}">${
        game.board[i] ? game.board[i] : " "
      }</span>`;

      tile.classList.remove("tile-winner");

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
        this.updateWinner(game);
      }
    }
  }

  // for changing the players css
  updateTurn(game) {
    let playerx = document.querySelector(".player-x");
    let playero = document.querySelector(".player-o");

    if (game.turn == "X") {
      playero.classList.remove("active");
      playerx.classList.add("active");
    }

    if (game.turn == "O") {
      playerx.classList.remove("active");
      playero.classList.add("active");
    }
  }

  updateWinner(game) {
    const winningCombination = game.findWinningCombinations();

    const [a, b, c] = winningCombination;

    let winner = game.board[a];
    let winnerhtml = document.querySelector(".winner");

    winnerhtml.innerHTML = `<span>Winner : Player - ${winner}</span>`;
  }
}
