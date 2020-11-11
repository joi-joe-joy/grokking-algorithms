const quickSort = <T>(array: T[]): T[] => {
    if (array.length < 2) {
        return array;
    } else {
        const [pivot] = array;
        const less = array.slice(1).filter((item) => item <= pivot);
        const greater = array.slice(1).filter((item) => item > pivot);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
};

export default quickSort;
