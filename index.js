/**
 * Binary Search Algorithm
 * @param {Array} arr - The sorted array to search through
 * @param {number} target - The value to search for
 * @returns {number} - The index of the target value, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

module.exports = {
    binarySearch,
};
