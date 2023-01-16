const Logger = require('../utils/logger')
const Factory = require('./factory')

module.exports = class GameMain {
  constructor(numberOfExecutions = 1) {
    this.numberOfExecutions = numberOfExecutions
    this.playersNegativeSold = []
    this.playersPositiveSold = []
    this.winnerGame = {}
  }

  startGame() {
    for (let index = 0; index < this.numberOfExecutions; index++) {
      const board = new Factory().createBoard()
      while (!board.winner) {
        for (const player of board.players) {
          if (player.gameOver) {
            this.playersNegativeSold.push(player)
            board.remove(player)
          }
          const winner = board.checkWinner(player)
          if (winner) {
            this.winnerGame = winner
            board.winner = winner
          }
          board.play(player, board)
        }
        board.played += 1
      }
      this.playersPositiveSold.push(...board.players)
      Logger.info(board.finish())
    }
  }

  findWinnerOfGame() {
    return this.winnerGame
  }

  listOfPlayers() {
    return [...this.playersNegativeSold, ...this.playersPositiveSold]
  }
}
