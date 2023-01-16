const BasePlayer = require('./base-player')

module.exports = class PlayerDemanding extends BasePlayer {
  rolesToPayment(patrimony) {
    if (patrimony.rentalPrice > 50) {
      this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
      return true
    }
    return false
  }
}
