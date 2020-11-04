import selectionSort from '../../src/selection-sort/selection-sort';

test('Selection Sort should sort the array', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([-1, -2, -3, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
    expect(selectionSort([1])).toEqual([1]);
});

test('Selection Sort should return null, if the array is empty', () => {
    expect(selectionSort([])).toBeNull();
});

test('The original array should not change', () => {
    const array = [5, 4, 3, 2, 1];
    selectionSort(array);
    expect(array).toEqual([5, 4, 3, 2, 1]);
});
