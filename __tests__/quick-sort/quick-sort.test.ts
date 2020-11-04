import quickSort from '../../src/quick-sort/quick-sort';

test('Quick Sort should sort the array', () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([-1, -2, -3, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
    expect(quickSort([1])).toEqual([1]);
});

test('Quick Sort should return empty array, if the array is empty', () => {
    expect(quickSort([])).toEqual([]);
});

test('The original array should not change', () => {
    const array = [5, 4, 3, 2, 1];
    quickSort(array);
    expect(array).toEqual([5, 4, 3, 2, 1]);
});
