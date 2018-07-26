describe('Bubble Sort', function () {
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it('handles an array with one element', function () {
        expect(bubbleSort([0])).toEqual([0]);
        expect(bubbleSort([5])).toEqual([5]);

        expect(bubbleSort([13]).length).toEqual(1);
        expect(bubbleSort(['apachi']).length).toEqual(1);

        expect(bubbleSort(['ant'])).toEqual(['ant']);
        expect(bubbleSort(['banana'])).toEqual(['banana']);

    });

    it('handles an array with multiple elements', function () {
        expect(bubbleSort([34, 90])).toEqual([34, 90]);
        expect(bubbleSort([6, 0, 18, 4, 31])).toEqual([0, 4, 6, 18, 31]);
        expect(bubbleSort([5, 1, 7, 22, 9, 3, 2, 19, 150, 4, 11])).toEqual([1, 2, 3, 4, 5, 7, 9, 11, 19, 22, 150]);

        expect(bubbleSort([5, 7, 8, 1]).length).toEqual(4);
        expect(bubbleSort(['a', 'b', 'c']).length).toEqual(3);

        expect(bubbleSort(['z', 'y', 'x'])).toEqual(['x', 'y', 'z']);
        expect(bubbleSort(['dog', 'banana', 'ant', 'apple', 'mango', 'cat'])).toEqual(['ant', 'apple', 'banana', 'cat', 'dog', 'mango']);

    });

    beforeAll(function () {
        spyOn(bubbleSort, 'swap').and.callThrough();
        spyOn(bubbleSort, 'comparator').and.callThrough();
    });

    it('it calls both methods once on unsorted array of length 2', function () {
        bubbleSort([2, 1]);
        expect(bubbleSort.comparator.calls.count()).toEqual(1);
        expect(bubbleSort.swap.calls.count()).toEqual(1);
    });

    it('it calls comparator once on sorted array of length 2', function () {
        bubbleSort([4, 5]);
        expect(bubbleSort.comparator.calls.count()).toEqual(1);
        expect(bubbleSort.swap.calls.count()).toEqual(0);
    });

    it('it calls comparator and swap only when necessary', function () {
        bubbleSort([6, 0, 18, 4, 31]);
        expect(bubbleSort.comparator.calls.count()).toEqual(1);
        expect(bubbleSort.swap.calls.count()).toEqual(0);
    });

});