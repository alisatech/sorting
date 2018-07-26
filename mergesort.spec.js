describe('Split Array function', function () {
    it('is able to split an array into two halves', function () {
        expect(split([1])).toEqual([[1], []]);
        expect(split([1, 2])).toEqual([[1], [2]]);
        expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
        expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    });
});

describe('Merge function', function () {
    it('is able to merge two sorted arrays into one sorted array', function () {
        expect(merge([2], [1])).toEqual([1, 2]);
        expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
        expect(merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
        expect(merge([1, 4], [2, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('MergeSort function', function () {
    it('is able to sort an empty array', function () {
        expect(mergeSort([])).toEqual([]);
    });

    it('is able to sort array of 1', function () {
        expect(mergeSort([1])).toEqual([1]);
    });

    it('is able to sort array of two', function () {
        expect(mergeSort([2, 1])).toEqual([1, 2]);
        expect(mergeSort([5, 1, 9, 33, 11, 106, 28])).toEqual([1, 5, 9, 11, 28, 33, 106]);
    });


    it('is able to sort array of multiple', function () {
        expect(mergeSort([5, 1, 9, 33, 11, 28])).toEqual([1, 5, 9, 11, 28, 33]);
        expect(mergeSort([5, 1, 9, 33, 11, 106, 28])).toEqual([1, 5, 9, 11, 28, 33, 106]);
    });
});