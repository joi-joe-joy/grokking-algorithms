const quickSort = (array: number[]): number[] => {
    if (array.length < 2) {
        return array;
    } else {
        const [pivot] = array;
        const less = array.filter((item) => item < pivot);
        const greater = array.filter((item) => item > pivot);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
};

export default quickSort;
