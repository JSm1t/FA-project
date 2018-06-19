const utils = require('./index');

const testData = [
  {
    name: 'AnotherOne',
    other: 'test',
    array: [2, 3]
  },
  {
    name: 'Test',
    other: 'test',
    array: [1, 2, 3]
  },
  {
    name: 'Something',
    other: 'test',
    array: [4, 6, 5]
  }
];

describe('sortByProperty - testsuite', () => {
  test('Should short based on property asc', () => {
    const sortedArray = utils.sortByProperty(testData, 'name');
    expect(sortedArray[0]).toEqual({
      name: 'AnotherOne',
      other: 'test',
      array: [2, 3]
    });
    expect(sortedArray[1]).toEqual({
      name: 'Something',
      other: 'test',
      array: [4, 6, 5]
    });
    expect(sortedArray[2]).toEqual({
      name: 'Test',
      other: 'test',
      array: [1, 2, 3]
    });
  });

  test('Should return the same ordered array, when no property specified', () => {
    const sortedArray = utils.sortByProperty(testData);
    expect(sortedArray).toEqual(testData);
  });
});

describe('filterByProperty - testsuite', () => {
  test('Should only return array of objects, that equals condition', () => {
    const filteredArray = utils.filterByProperty(testData, 'array', 6);
    expect(filteredArray).toEqual([{
      name: 'Something',
      other: 'test',
      array: [4, 6, 5]
    }]);
  });

  test('Should only return array of objects, that equals condition', () => {
    const filteredArray = utils.filterByProperty(testData, 'array', 2);
    expect(filteredArray).toContain(testData[0]);
    expect(filteredArray).toContain(testData[2]);
  });

  test('Should return the same array, when no property specified', () => {
    const filteredArray = utils.filterByProperty(testData, null, 6);
    expect(filteredArray).toEqual(testData);
  });

  test('Should return the same array, when no shouldInclude is specified', () => {
    const filteredArray = utils.filterByProperty(testData, 'array');
    expect(filteredArray).toEqual(testData);
  });
})

