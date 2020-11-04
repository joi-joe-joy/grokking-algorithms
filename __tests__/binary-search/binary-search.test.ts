import binarySearch from '../../src/binary-search/binary-search';

test('Binary search should work correctly with an array', () => {
    expect(binarySearch([1, 3, 5, 6, 7, 8, 10], 8)).toBe(5);
    expect(binarySearch([1, 3, 5, 6, 7, 8, 10], 1)).toBe(0);
    expect(binarySearch([1, 3, 5, 6, 7, 8, 10], 10)).toBe(6);
    expect(binarySearch([1], 1)).toBe(0);
});

test('Binary search should work correctly if the array does not contain a number ', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 8)).toBeNull();
});

test('Binary search should work correctly with empty array', () => {
    expect(binarySearch([], 8)).toBeNull();
});
