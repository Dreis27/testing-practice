const calculator = require('./calculator');

test('add', () => {
    expect(calculator.add(10,5)).toBe(15);
})

test('subtract', () => {
    expect(calculator.subtract(10,5)).toBe(5);
})

test('multiply', () => {
    expect(calculator.multiply(10,5)).toBe(50);
})

test('divide', () => {
    expect(calculator.divide(10,5)).toBe(2);
})