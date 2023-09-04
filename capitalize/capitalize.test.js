const capitalize = require('./capitalize');

test('all letters lower case', () => {
    expect(capitalize('string')).toBe('String');
});

test('already capitalized', () => {
    expect(capitalize('String')).toBe('String');
});

test('all letters upper case', () => {
    expect(capitalize('STRING')).toBe('STRING');
});