const BasePlayer = require('./base-player')

module.exports = class PlayerCautious extends BasePlayer {
  rolesToPayment(patrimony) {
    if (this.money - patrimony.propertyPrice >= 80) {
      this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
      return true
    }
    return false
  }
}
