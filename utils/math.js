export default {
  add: (a, b) => {
    return a + b
  },

  subtract: (a, b) => {
    return a - b
  },

  divide: (a, b) => {
    return a / b
  },

  multiply: (a, b) => {
    return a * b
  },

  calculateBMI(height, weight){
    return this.divide(weight, this.multiply(height, height));
  }
}
