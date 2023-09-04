const reverseString = require('./reverseString');

test('normal word', () => {
    expect(reverseString('String')).toBe('gnirtS');
})

test('one letter', () => {
    expect(reverseString('a')).toBe('a');
})

test('multiple words', () => {
    expect(reverseString('one, two')).toBe('owt ,eno');
})