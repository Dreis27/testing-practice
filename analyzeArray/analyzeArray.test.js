const analyzeArray = require('./analyzeArray');

test('analyzeArray base test', () => {
    expect(analyzeArray([1,2,3,4,5,6,7,8,9])).toEqual({average: 5,
                                                        min: 1,
                                                        max: 9,
                                                        length: 9});
})

test('empty array', () => {
    expect(analyzeArray([])).toEqual(null);
})

test('not array in input', () => {
    expect(analyzeArray('hello')).toEqual(null);
})