var helper = {}

helper.swap = function (i, arr) {
    var currVal = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = currVal;
    return true;
}

helper.comparator = function (i, arr) {
    return arr[i] > arr[i + 1] ? helper.swap(i, arr) : false;
}

function bubbleSort(array) {
    if (array.length < 2) return array;

    var result = array.slice(), countSwaps = 0;
    for (var i = 0; i < result.length - 1; i++) {
        var wasSwaped = helper.comparator(i, result);
        if (wasSwaped) countSwaps++;
    }

    if (countSwaps) result = bubbleSort(result);
    return result;
}
