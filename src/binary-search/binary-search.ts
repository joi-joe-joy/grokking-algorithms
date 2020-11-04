const binarySearch = (list: number[], item: number): number | null => {
    let low: number = 0;
    let high: number = list.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        let guess = list[middle];

        if (guess === item) {
            return middle;
        }
        if (guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return null;
};

export default binarySearch;
