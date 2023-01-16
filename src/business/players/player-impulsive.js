const BasePlayer = require('./base-player')

module.exports = class PlayerImpulsive extends BasePlayer {
  /*
    O jogador impulsivo compra qualquer
    propriedade sobre a qual ele parar.
*/

  rolesToPayment(patrimony) {
    this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
    return true
  }
}
