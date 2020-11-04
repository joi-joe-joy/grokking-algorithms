const findSmallest = (arr: number[]): number => {
    let [smallest] = arr;
    let smallestIndex = 0;
    arr.forEach((item, i) => {
        if (item < smallest) {
            smallest = item;
            smallestIndex = i;
        }
    });
    return smallestIndex;
};

const selectionSort = (arr: number[]): number[] | null => {
    if (!arr.length) {
        return null;
    }
    const oldArr = arr.slice();
    const newArr: number[] = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const smallest = findSmallest(oldArr);
        const [removed] = oldArr.splice(smallest, 1);
        newArr.push(removed);
    }
    return newArr;
};

export default selectionSort;
