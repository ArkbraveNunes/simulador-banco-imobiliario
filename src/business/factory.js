const PlayerCautious = require('./players/player-cautious')
const PlayerDemanding = require('./players/player-demanding')
const PlayerImpulsive = require('./players/player-impulsive')
const PlayerRandom = require('./players/player-random')
const GameBoard = require('./game-board')

module.exports = class Factory {
  constructor() {
    this._typeOfPlayers = ['impulsive', 'demanding', 'cautious', 'randomer']
    this._strategies = {
      impulsive: PlayerImpulsive,
      demanding: PlayerDemanding,
      cautious: PlayerCautious,
      randomer: PlayerRandom,
    }
  }

  createPlayer(strategy) {
    try {
      return new this._strategies[strategy](strategy)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  createBoard() {
    const board = new GameBoard()
    board.players = this._typeOfPlayers.map((typeOfPlayer) => this.createPlayer(typeOfPlayer))
    return board
  }
}
