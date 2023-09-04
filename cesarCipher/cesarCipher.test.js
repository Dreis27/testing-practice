const caesarCipher = require('./cesarCipher');

test('All letters lower case', () => {
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
})

test('Contains upper case letters', () => {
    expect(caesarCipher('Hello', 5)).toBe('Mjqqt');
})

test('Contains symbols that are not letters', () => {
    expect(caesarCipher('hello, world', 5)).toBe('mjqqt, btwqi');
})

test('Shift factor greater than count of letters in alphabeth', () => {
    expect(caesarCipher('hello', 50)).toBe('fcjjm');
})

test('Shift factor negative', () => {
    expect(caesarCipher('hello', -5)).toBe('czggj');
})
