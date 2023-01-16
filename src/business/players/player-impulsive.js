const BasePlayer = require('./base-player')

module.exports = class PlayerImpulsive extends BasePlayer {
  rolesToPayment(patrimony) {
    this.paid(patrimony.propertyPrice, patrimony.typeOfStrategy)
    return true
  }
}
