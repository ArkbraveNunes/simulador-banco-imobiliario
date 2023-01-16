const BasePlayer = require('./base-player')

module.exports = class PlayerDemanding extends BasePlayer {
  /*
    O jogador exigente compra qualquer
    propriedade, desde que o valor do aluguel
    dela seja maior do que 50.
*/

  rolesToPayment(patrimony) {
    if (patrimony.rentalPrice > 50) {
      this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
      return true
    }
    return false
  }
}
