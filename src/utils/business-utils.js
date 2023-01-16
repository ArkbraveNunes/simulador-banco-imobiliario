module.exports = class BusinessUtils {
  static functionSortByMoney(typeFunction) {
    return {
      crescent: (itemOne, itemTwo) =>
        itemOne.money < itemTwo.money ? -1 : itemOne.money > itemTwo.money ? 1 : 0,
      decrescent: (itemOne, itemTwo) =>
        itemOne.money > itemTwo.money ? -1 : itemOne.money < itemTwo.money ? 1 : 0,
    }[typeFunction]
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
