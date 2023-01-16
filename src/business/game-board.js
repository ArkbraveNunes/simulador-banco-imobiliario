const BusinessUtils = require('../utils/business-utils')
const CardPatrimony = require('./card-patrimony')

module.exports = class GameBoard {
  constructor() {
    this.winner = null
    this.played = 0
    this.players = []
    this.startTime = Date.now()
    this.cards = []
    this.setCards()
  }

  setCards() {
    for (let index = 1; index < 21; index++) {
      this.cards.push(new CardPatrimony(index, null))
    }
  }

  playDice() {
    /*
        No começo da sua vez, o jogador joga um
        dado equiprovável de 6 faces que determina
        quantas espaços no tabuleiro o jogador vai
        andar.
*/
    return BusinessUtils.getRandomInt(1, 6)
  }

  remove(player) {
    for (const cardPatrimony of this.cards) {
      if (cardPatrimony.typeOfStrategy == player.strategy) {
        cardPatrimony.typeOfStrategy = null
      }
    }
    this.players = this.players.filter((itemPlayer) => itemPlayer.strategy !== player.strategy)
  }

  walk(player, _dice = null) {
    let goToPosition = player.position + (_dice || this.playDice())
    if (goToPosition >= 20) {
      /*
            Ao completar uma volta no tabuleiro,
            o jogador ganha 100 de saldo.
*/
      player.money += 100
      goToPosition -= 20
    }
    player.position = goToPosition
    return goToPosition
  }

  checkWinner(player) {
    /*
        Termina quando restar somente um jogador
        com saldo positivo, a qualquer momento da
        partida. Esse jogador é declarado o
        vencedor.
*/
    if (this.players.length === 1) {
      return player
    }
    if (this.played >= 1000) {
      let money = 0
      let winner = null
      for (const itemPlayer of this.players) {
        if (itemPlayer.money > money) {
          money = itemPlayer.money
          winner = itemPlayer
        }
      }
      return winner
    }

    const elements = []
    this.players.forEach((itemPlayer) => {
      if (itemPlayer.strategy !== player.strategy) {
        elements.push(itemPlayer.money)
      }
    })

    const soma = elements.reduce((acc, value) => acc + value, 0)

    if (soma < 0) {
      return player
    }
    return null
  }

  play(player, board) {
    /*
        Um jogador que fica com saldo negativo
        perde o jogo, e não joga mais. Perde
        suas propriedades e portanto podem ser
        compradas por qualquer outro jogador.
*/
    if (player.money <= 0) {
      player.gameOver = true
      return
    }

    const patrimony = this.cards[this.walk(player)]
    player.incomeOrSale(patrimony, board)
  }

  finish() {
    return {
      timeIt: Date.now() - this.startTime,
      winner: this.winner,
      money: this.winner.money,
      played: this.played,
      strategy: this.winner.strategy,
      timeOut: this.played > 100,
    }
  }
}
