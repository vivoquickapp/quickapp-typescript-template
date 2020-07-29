export default {
  printObj(obj = {}) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`key = ${key}; value = ${obj[key]}`)
      } else {
        // 对象自带继承属性，则不予以打印出来(eg: constructor, toJSON, stopPropagation 等)；
      }
    }
  },

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
}
