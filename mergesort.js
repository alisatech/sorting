function split(wholeArray) {
    if (wholeArray.length < 2) return [wholeArray, []]

    let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2)),
        secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
    return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
    let mergedArr = [];

    while (firstHalf.length && secondHalf.length) {
        const first = firstHalf[0], second = secondHalf[0];
        if (first <= second) mergedArr.push(firstHalf.shift());
        else mergedArr.push(secondHalf.shift());
    }

    if (firstHalf.length) mergedArr.push(...firstHalf);
    else if (secondHalf.length) mergedArr.push(...secondHalf);
    return mergedArr;
}


function mergeSort(array) {

    if (array.length < 2) return array;

    let result = [], halves = split(array);
    if (halves[0].length > 1) {
        halves[0] = mergeSort(halves[0]);
        halves[1] = mergeSort(halves[1]);
    }
    result = merge(...halves)
    return result;
}