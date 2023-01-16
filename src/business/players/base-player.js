module.exports = class BasePlayer {
  constructor(strategy, position = 0, money = 300) {
    this.position = position
    this.money = money
    this.strategy = strategy
    this.gameOver = false
  }

  incomeOrSale(patrimony, board = null) {
    if (patrimony.typeOfStrategy) {
      if (this.strategy != patrimony.typeOfStrategy) {
        this.paid(patrimony.rentalPrice, patrimony.typeOfStrategy)
      }
      return
    }
    if (this.rolesToPayment(patrimony)) {
      patrimony.typeOfStrategy = this.strategy
    }
  }

  rolesToPayment(patrimony, board) {
    throw new Error()
  }

  paid(propertyPrice, typeOfStrategy = null) {
    this.money -= propertyPrice
    if (typeOfStrategy) {
      this.money += propertyPrice
    }
    if (this.money < 1) {
      this.gameOver = true
    }
  }
}
