const binarySearch = (list: number[], item: number): number | null => {
    const iter = (low: number, high: number): number | null => {
        if (low < high) {
            return null;
        }

        let middle = Math.floor((low + high) / 2);

        if (list[middle] === item) {
            return middle;
        }
        if (list[middle] > item) {
            return iter(low, middle - 1);
        } else {
            return iter(middle + 1, high);
        }
    };

    return iter(0, list.length - 1);
};

export default binarySearch;
