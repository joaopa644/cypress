import math from '../../../utils/math';

describe('Unit Test Application Code', function () {
  const { add, divide, multiply, subtract } = math

  before(() => {
    expect(add, 'add').to.be.a('function')
    expect(divide, 'divide').to.be.a('function')
    expect(multiply, 'multiply').to.be.a('function')
    expect(subtract, 'subtract').to.be.a('function')
  });

  context('math.js', function () {
    it('can add numbers', function () {
      expect(add, 'add').to.be.a('function')
      expect(add(1, 2)).to.eq(3)
    });

    it('can subtract numbers', function () {
      expect(math.subtract, 'subtract').to.be.a('function')
      expect(math.subtract(5, 12)).to.eq(-7)
    });

    it('can divide numbers', function () {
      expect(divide, 'divide').to.be.a('function')
      expect(divide(27, 9)).to.eq(3)
    });

    it('can muliple numbers', function () {
      expect(multiply, 'multiply').to.be.a('function')
      expect(multiply(5, 4)).to.eq(20)
    });

    it('can calculate BMI', function () {
      cy.spy(math, 'divide');
      cy.spy(math, 'multiply');

      expect(math.calculateBMI, 'calculateBMI').to.be.a('function');

      expect(math.calculateBMI(1.75, 98)).to.eq(32);

      expect(math.divide).to.be.called
      expect(math.multiply).to.be.called
    });
  });
})