const MonopolyController = require('../controllers/monopoly-controller')

module.exports = class MonopolyRoutes {
  static routes(route) {
    route.route('/monopoly-game/v1/simulation').get(MonopolyController.getSimulationGame)
  }
}
