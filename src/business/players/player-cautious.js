const BasePlayer = require('./base-player')

module.exports = class PlayerCautious extends BasePlayer {
  /*
    O jogador cauteloso compra qualquer
    propriedade desde que ele tenha uma
    reserva de 80 saldo sobrando
    depois de realizada a compra.
*/

  rolesToPayment(patrimony) {
    if (this.money - patrimony.propertyPrice >= 80) {
      this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
      return true
    }
    return false
  }
}
