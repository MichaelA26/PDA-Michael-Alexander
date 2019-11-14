var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it has to add', function(){
    calculator.previousTotal = 4
    calculator.add(6)
    assert.strictEqual(calculator.runningTotal, 10)
  });

  it('it has to subtract', function(){
    calculator.previousTotal = 10
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 6)
  });

  it('it has to multiply', function(){
    calculator.previousTotal = 6
    calculator.multiply(2)
    assert.strictEqual(calculator.runningTotal, 12)
  });

  it('it has to divide', function(){
    calculator.previousTotal = 12
    calculator.divide(3)
    assert.strictEqual(calculator.runningTotal, 4)
  });

  it('it has to concatenate multiple number button clicks', function(){
    calculator.runningTotal = 0
    calculator.numberClick(1)
    calculator.numberClick(0)
    calculator.numberClick(1)
    assert.strictEqual(calculator.runningTotal, 101)
  });

  it('it has to chain multiple operations together', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  });

  it('it has to clear the running total without affecting calculation', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.clearClick()
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, '11')
  });

});
