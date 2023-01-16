const BusinessUtils = require('../../utils/business-utils')
const BasePlayer = require('./base-player')

module.exports = class PlayerRandom extends BasePlayer {
  /*
    O jogador aleatório compra a propriedade
    que ele parar em cima com probabilidade
    de 50%.
*/

  rolesToPayment(patrimony) {
    if (BusinessUtils.getRandomInt(0, 1) > 0) {
      this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
      return true
    }
    return false
  }
}
