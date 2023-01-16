const BusinessUtils = require('../utils/business-utils')

module.exports = class MonopolyServiceDto {
  static simulationGameDto(winnerPlayer, listPlayers) {
    const result = {
      winner: '',
      players: [],
    }

    const listSorted = listPlayers.sort(BusinessUtils.functionSortByMoney('decrescent'))

    result.winner = winnerPlayer.strategy
    result.players = listSorted.map((item) => item.strategy)

    return result
  }
}
