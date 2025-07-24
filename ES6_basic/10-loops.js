export default function appendToEachArrayValue(array, appendString) {
    const array = [];
    for (let idx in array) {
        idx = appendString + idx;
        arr.push(idx);
    }

    return array;
}