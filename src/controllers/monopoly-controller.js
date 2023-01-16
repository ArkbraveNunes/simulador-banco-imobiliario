const Boom = require('@hapi/boom')
const MonopolyService = require('../services/monopoly-service')

module.exports = class MonopolyController {
  static async getSimulationGame(req, res) {
    const monopolyService = new MonopolyService()
    return monopolyService
      .getSimulationGame()
      .then((result) => res.json(result))
      .catch((err) =>
        err.statusCode
          ? res.status(err.statusCode).json(err)
          : res.status(500).json(Boom.internal('Internal Server Error').output.payload),
      )
  }
}
