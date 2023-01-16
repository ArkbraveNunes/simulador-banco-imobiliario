const Logger = require('../utils/logger')
const MonopolyBusiness = require('../business/game-main')
const MonopolyServiceDto = require('../dto/monopoly-service-dto')

module.exports = class MonopolyService {
  constructor() {
    this.monopolyBusiness = new MonopolyBusiness()
  }

  async getSimulationGame() {
    try {
      this.monopolyBusiness.startGame()
      const listOfPlayers = this.monopolyBusiness.listOfPlayers()
      const winnerPlayer = this.monopolyBusiness.findWinnerOfGame()
      return MonopolyServiceDto.simulationGameDto(winnerPlayer, listOfPlayers)
    } catch (error) {
      Logger.error(error)
      throw error
    }
  }
}
