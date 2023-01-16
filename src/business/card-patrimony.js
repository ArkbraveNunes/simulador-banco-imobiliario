const BusinessUtils = require('../utils/business-utils')

module.exports = class CardPatrimony {
  constructor(id, typeOfStrategy = null) {
    this.id = id
    this.typeOfStrategy = typeOfStrategy
    this.rentalPrice = BusinessUtils.getRandomInt(30, 120)
    this.propertyPrice = BusinessUtils.getRandomInt(30, 120)
  }
}
